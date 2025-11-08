const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error(err));

// Modelos
const Usuario = require('./backend/models/Usuario');
const Espacio = require('./backend/models/Espacio');
const Sesion = require('./backend/models/Sesion');
const Evento = require('./backend/models/Evento');

// API: Iniciar sesión (al escanear QR/NFC)
app.post('/api/sesion/iniciar', async (req, res) => {
  const { token, numero_placa } = req.body;
  try {
    // Busca usuario (simula; en producción, usa email/token)
    const usuario = await Usuario.findOne({ email: 'juan@email.com' });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    // Crea sesión
    const sesion = new Sesion({
      id_usuario: usuario._id,
      token_sesion: token,
      placa: { numero_placa, modelo_auto: 'Desconocido' }
    });
    await sesion.save();
    res.json({ sesion_id: sesion._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API: Obtener espacios disponibles
app.get('/api/espacios', async (req, res) => {
  try {
    const espacios = await Espacio.find({ estado: 'disponible' });
    res.json(espacios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API: Asignar espacio (evento de entrada)
app.post('/api/evento/entrada', async (req, res) => {
  const { id_sesion, id_espacio } = req.body;
  try {
    // Crea evento
    const evento = new Evento({
      id_sesion,
      tipo: 'entrada',
      id_espacio_asignado: id_espacio
    });
    await evento.save();

    // Actualiza espacio a ocupado
    await Espacio.findByIdAndUpdate(id_espacio, { estado: 'ocupado' });
    res.json(evento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
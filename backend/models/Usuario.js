const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, unique: true },
  contraseña: String,
  tipo: { type: String, default: 'conductor' },
  fecha_registro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
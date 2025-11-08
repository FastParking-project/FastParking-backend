const mongoose = require('mongoose');

const sesionSchema = new mongoose.Schema({
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  token_sesion: { type: String, unique: true },
  placa: {
    numero_placa: String,
    modelo_auto: String
  },
  fecha_inicio: { type: Date, default: Date.now },
  fecha_fin: Date
});

module.exports = mongoose.model('Sesion', sesionSchema);
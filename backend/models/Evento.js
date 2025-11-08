const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  id_sesion: { type: mongoose.Schema.Types.ObjectId, ref: 'Sesion' },
  tipo: String,
  timestamp: { type: Date, default: Date.now },
  id_espacio_asignado: { type: mongoose.Schema.Types.ObjectId, ref: 'Espacio' }
});

module.exports = mongoose.model('Evento', eventoSchema);
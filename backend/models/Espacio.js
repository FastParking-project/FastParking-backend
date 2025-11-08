const mongoose = require('mongoose');

const espacioSchema = new mongoose.Schema({
  numero: String,
  tipo: { type: String, default: 'estandar' },
  estado: { type: String, default: 'disponible' }
});

module.exports = mongoose.model('Espacio', espacioSchema);
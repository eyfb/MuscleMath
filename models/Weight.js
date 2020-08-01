const mongoose = require('mongoose');

const weightSchema = new mongoose.Schema({
  pounds: Number 
});

const Weight = mongoose.model('Weight', weightSchema);
module.exports = Weight;
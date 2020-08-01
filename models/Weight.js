const mongoose = require('mongoose');

const weightSchema = new mongoose.Schema({
  name: String 
});

const Weight = mongoose.model('Weight', weightSchema);
module.exports = Weight;
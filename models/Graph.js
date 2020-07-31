const mongoose = require('mongoose');

const graphSchema = new mongoose.Schema({
  name: String
});

const Graph = mongoose.model('Graph', graphSchema);
module.exports = Graph;
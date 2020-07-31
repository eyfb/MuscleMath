/**
 * GET /graphs
 * List all graphs.
 */
const Graph = require('../models/Graph.js');

exports.getGraphs = (req, res) => {
  Graph.find((err, docs) => {
    res.render('graphs', { graphs: docs });
  });
};
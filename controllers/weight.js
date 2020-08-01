/**
 * GET /weight
 * List all weight.
 */
const Weight = require('../models/Weight.js');

exports.getWeights = (req, res) => {
  Weight.find((err, docs) => {
    res.render('weights', { weights: docs });
  });
};
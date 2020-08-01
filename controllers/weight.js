/**
 * GET /weight
 * List all weight.
 */
const Weight = require('../models/Weight.js');

exports.getWeight = (req, res) => {
  Book.find((err, docs) => {
    res.render('weight', { weight: docs });
  });
};
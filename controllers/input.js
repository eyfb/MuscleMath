/**
 * GET /inputs
 * Get input from user
 */
/**
 * GET /books
 * List all books.
 */
const Book = require('../models/Input.js');

exports.getInput = (req, res) => {
  Book.find((err, docs) => {
    res.render('input', { books: docs }); //first arg is the .pug file in views
  });
};
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

//Launches a python script
exports.callPython = (req, res) => {
    var exec = require('child_process');

    res.render('input', {});
    var process = exec.spawn('python',["./python/hello.py", 'first', 'last']);
                            // req.query.firstname, 
                            // req.query.lastname] ); 
  
    // Takes stdout data from script which executed 
    // with arguments and send this data to res object 
    process.stdout.on('data', function(data) { 
        console.log('data' + data);
        // res.send(data.toString()); 
    }) 

    console.log('hi');
}
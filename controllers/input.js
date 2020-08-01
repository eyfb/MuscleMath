const validator = require('validator');
const Book = require('../models/Input.js');

/**
 * GET /inputs
 * Get input from user
 */
exports.getInput = (req, res) => {
  Book.find((err, docs) => {
    res.render('input', { books: docs }); //first arg is the .pug file in views
  });
};

//Launches a python script
exports.callPython = (req, res) => {
    var exec = require('child_process');

    res.render('input', {}); //testing 
    var process = exec.spawn('python',["./python/hello.py", 'first', 'last']);
                            // req.query.firstname, 
                            // req.query.lastname] ); 
  
    // Takes stdout data from script which executed 
    // with arguments and send this data to res object 
    process.stdout.on('data', function(data) { 
        console.log('data' + data);
        // res.send(data.toString()); 
    }) 

    console.log('End of python script.');
}

/**
 * POST /input
 * Send health data to server.a
 */
exports.postHealth = (req, res) => {
    const validationErrors = [];
    let fromWeight;
    let fromHeight;

    //Ideally check "isNumber"
    //Error checking
    if (validator.isEmpty(req.body.weight) || !validator.isFloat(req.body.weight)) 
        validationErrors.push({ msg: 'Please renter your weight.' });
    if (validator.isEmpty(req.body.height) || !validator.isFloat(req.body.height)) 
        validationErrors.push({ msg: 'Please renter your height.' });
    //Redirect if errors
    if (validationErrors.length) {
      req.flash('errors', validationErrors);
      return res.redirect('/input');
    }
    
    //Log
    fromWeight = req.body.weight;
    fromHeight = req.body.height;
    const date = new Date().toISOString().slice(0, 10);
    console.log(date + ' ' + fromWeight + ' ' + fromHeight);

    //Append to csv in /public/test_csvs/test2.csv
    var fs = require('fs');
    var csvWriter = require('csv-write-stream');

    //Note: this currently just overwrites the existing csv data..
    // var writer = csvWriter();
    // writer.pipe(fs.createWriteStream('./public/test_csvs/test2.csv'));
    // // writer.write({id: "world", date: "bar", weight: "taco", height: "", bmi: fromWeight/fromHeight});
    // writer.write({id: '0', date: date, weight: fromWeight, height: fromHeight, bmi: fromWeight/fromHeight});
    // writer.end(); 


    req.flash('success', {msg: 'Health data logged! Here are your results.'});
    return res.redirect('/more_graphs');
};
  
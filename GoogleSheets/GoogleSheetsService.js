// googleSheetsService.js
// GoogleSheetsService has full access to a spread sheet. 
// To run, in the command line type <node GoogleSheetsService.js>.
/*
const { google } = require('googleapis');
const key = require('./GoogleSheetsServiceCredentials.json');
// Change these parameters to access a different spreadsheet that has been shared to your 
// Google Cloud Platform service account.
const spreadsheet_id = '10jqx9YYm9hquoHYBwfIwvtpRSNnHPWzEQfyk4o_Df9Y';
const spreadsheet_sheetname = 'Sheet1';
const spreadsheet_data_range = 'A1:B5';
let spreadsheet_desired_info = spreadsheet_sheetname + '!' + spreadsheet_data_range;
// create json web token
const client = new google.auth.JWT(
  key.client_email,
  null, 
  key.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
    
);

// connecting with google sheets with your credentials you get a token 
// will not use token in this case
client.authorize(function(err, tokens){

    if(err){
      console.log(err);
      return; 
    } else {
      console.log('Connected!'); // connection was successful
      gsrun(client);
    }
});

async function gsrun(cl){ // got fro prev gsrun (client command)

  // connection to my googlesheets api
  const gsapi = google.sheets({version:'v4', auth: cl }); 

  const opt = { 
    spreadsheetId: spreadsheet_id,
    range: spreadsheet_desired_info

  };

  // Making call to api. It takes an unkown time to get the info back, so we used an async func
   let sheet = await gsapi.spreadsheets.values.get(opt); 
   
  console.log(sheet.data.values); 
  // sheet1 is the object with data and data has values which we can access
  // lets store these
}  
*/


const { google } = require("googleapis");
const keys = require("./GoogleSheetsServiceCredentials.json");

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  "https://www.googleapis.com/auth/spreadsheets"
]);

const gsrun = async cl => {
  const gsapi = google.sheets({ version: "v4", auth: cl });

  const opt = {
    spreadsheetId: "10jqx9YYm9hquoHYBwfIwvtpRSNnHPWzEQfyk4o_Df9Y",
    range: "Sheet1!A1:B5"
  };

  const data = await gsapi.spreadsheets.values.get(opt);
  const dataArray = data.data.values;

  return dataArray;
};

// main async IIFE
(async () => {
  client.authorize(function(err, tokens) {
    if (err) {
      console.log(err);
      return;
    }

    console.log("Connected");
  });

  const receivedData = await gsrun(client);

  // you can use receivedData here later:
  console.log(receivedData.);
})();



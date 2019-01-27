'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

// Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.
app.intent('make_name', (conv, {color,number})=> {
    const  generatedNumber = parseInt(color.length,10)
    const luckyNumber = parseInt(number,10)
    const finalNumber = generatedNumber * luckyNumber
    // Respond with the user's lucky number and end the conversation.
    conv.close('Your lucky number is ' + finalNumber);
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
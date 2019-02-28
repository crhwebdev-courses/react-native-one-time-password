const twilio = require('twilio');
const twilioCredentials = require('./twilio_credentials.json');

const accountSid = twilioCredentials.accountSid;
const authToken = twilioCredentials.authToken;

module.exports = twilio(accountSid, authToken);

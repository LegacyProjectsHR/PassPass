const accountSid = 'AC3636f471bd77cc6d998a0553d9f8a019';
const authToken =  'd60348259faf7e1923dd16cb5dfc7c6b';

var twilio = require('twilio');

var client = new twilio(accountSid, authToken);

var twilioMessage = function (input, cb) {
  //expect input to be an object containing:
    //the body of the message to be sent
    //the number to send the message TO
  //expect cb to be a callBack function to trigger whatever followup effects are needed
  client.messages.create({
    body: input.msgBody,
    to: '+1' + input.msgTo, //text this number 
    from: '+14154172475' //from a valid twillio number 
  })
  .then((message) => {
    //trigger callback,  twilio does send several usefule things back in it's response, usefull for later features.
    cb();
  });
}

module.exports.twilioMessage = twilioMessage;
//will need to pull 
var express = require('express');

var app = express();

app.listen(8887, function() {
  console.log('Listening on port 8887');
});

var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

function getRandomMessage() {
  var i = Math.floor(Math.random() * messages.length);
  return messages[i];
}

app.get('/', function(req, res) {
  res.send(JSON.stringify({
    message: getRandomMessage()
  }));
});

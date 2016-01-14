var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cors = require('cors');

app.use(bodyParser.json());

app.use(cors());

app.listen(8887, function() {
  console.log('Listening on port 8887');
});

var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

function getRandomMessage() {
  var i = Math.floor(Math.random() * messages.length);
  return messages[i];
}

app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message: getRandomMessage()
  }));
});

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
var bodyParser = require('body-parser');
var cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

projectData = {
  apiKey: process.env.API_KEY,
  apiUrl: process.env.API_URL,
};

console.log(`Your API key is ${process.env.API_KEY}`);

const app = express();
app.use(cors());
app.options('*', cors());

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'example.com');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.use(allowCrossDomain);

// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(express.static('dist'));

console.log(__dirname);
console.log(JSON.stringify(mockAPIResponse));

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
  console.log('Example app listening on port 8082!');
});

app.get('/test', function (req, res) {
  res.json(mockAPIResponse);
});

app.get('/all', function (req, res) {
  res.json(projectData);
});

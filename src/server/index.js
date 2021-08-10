var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
var bodyParser = require('body-parser');
var cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

projectData = {
  apiKey: process.env.API_KEY,
  apiSentiment: {
    'P+': 'strong positive',
    P: 'positive',
    NEU: 'neutral',
    N: 'negative',
    'N+': 'strong negative',
    NONE: 'without polarity',
  },
};

const app = express();
app.use(cors());
app.options('*', cors());

// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT || 8082, function () {
  console.log('Example app listening on port 8082!');
});

app.get('/test', function (req, res) {
  res.json(mockAPIResponse);
});

app.get('/all', function (req, res) {
  res.json(projectData);
});

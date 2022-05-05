const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app = express();

const api = require('./routes/api');

const cors = require('cors');

const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api', api);
app.get('/', function (req, res) {
  res.send('Server is up and running!');
});

app.listen(port, function () {
  console.log('Server is listening in PORT', port);
});

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const helpers = require('../modules/helpers');

router.post('/readfile', async function (req, res) {
  const folder = path.resolve(__dirname, '..');
  fs.writeFileSync(folder + '/data/employees.txt', req.files.schedules.data);
  fs.readFile(folder + '/data/employees.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const people = data.split('\n');
    const rates = helpers.generateResponse(people);
    res.send(rates);
  });
});

module.exports = router;

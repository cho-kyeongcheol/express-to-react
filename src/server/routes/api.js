var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
  console.log('http://localhost:3001/api/');
  res.send({title: 'hello react!'});
});

module.exports = router;
var express = require('express');
var router = express.Router();
var mysql      = require('mysql');

router.get('/', function(req, res, next) {

  var connection = mysql.createConnection({
    host     : 'munerdb.cfxgiytzm2qu.us-east-1.rds.amazonaws.com',
    user     : 'root',
    password : 'root1234',
    database : 'munerdb'
  });

  connection.connect();

  connection.query('SELECT * from usuarios', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  connection.end();

});

module.exports = router;

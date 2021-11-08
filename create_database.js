const debug = require('debug')('monprojetdemo:create_database');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'monprojetdemo.ceefcjczct9j.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'admin123',
  database: 'mysql'
});
connection.query(
    'create database studentdb',
    function(err, results, fields) {
      debug(err);
      debug(results); // results contains rows returned by server
      debug(fields); // fields contains extra meta data about results, if available
    }
);

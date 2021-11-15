const debug = require('debug')('monprojetdemo:create_database');
const mysql = require('mysql2');
const connection = require('./db_connect');

connection.query(
    'create table students (id int auto_increment primary key, firstName varchar(100), lastName varchar(100))',
    function(err, results, fields) {
      debug(err);
      debug(results); // results contains rows returned by server
      connection.close();
    }
);

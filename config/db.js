var mysql = require('mysql');
const { sql } = require('./config');


var con = mysql.createConnection({
  host: sql.uri,
  user: sql.user,
  port: '3306',
  password: sql.password,
  database: sql.name,
  insecureAuth : true
});

con.connect(function(err) {
    try {
        if (err) throw err;
  console.log("Connected!");
    } catch (error) {
        console.error(err);
    }
});

module.exports = con
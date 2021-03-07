var mysql = require('mysql');
const { sql } = require('./config');


var con = mysql.createConnection({
  host: sql.uri,
  user: sql.user,
  password: sql.password,
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
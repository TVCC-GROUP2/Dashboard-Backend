const db = require('../../config/db')
require('dotenv').config()
const GetLoginCount = async (req, res) => {
    try {
      sql='select * from applogin'
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        return res.status(200).json(result);
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        data: err,
      });
    }
  };

  const GetAtendeeSession = async (req, res) => {
    try {
      sql='select * from applogin'
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        return res.status(200).json(result);
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        data: err,
      });
    }
  };
  module.exports = {
    GetLoginCount,
    GetAtendeeSession,
  };
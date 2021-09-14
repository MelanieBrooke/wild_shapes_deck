const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
connection.connect();

const getDruidLevel = (characterName, cb) => {
  var queryString = 'SELECT druidLevel FROM user WHERE characterName = (?)';
  var queryArgs = [characterName];
  connection.query(queryString, queryArgs, function(err, result) {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
};

module.exports = {
  getDruidLevel
};

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

const getWildShapes = (cb) => {
  var queryString = 'SELECT * FROM shapes';
  connection.query(queryString, function(err, result) {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
}

const seenBeast = (beast, cb) => {
  var queryString = 'UPDATE shapes SET seen = true WHERE animal = (?)';
  var queryArgs = [beast];
  connection.query(queryString, queryArgs, function(err, result) {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  })
}

const undoSeenBeast = (beast, cb) => {
  var queryString = 'UPDATE shapes SET seen = false WHERE animal = (?)';
  var queryArgs = [beast];
  connection.query(queryString, queryArgs, function(err, result) {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  })
}



module.exports = {
  getDruidLevel,
  getWildShapes,
  seenBeast,
  undoSeenBeast
};


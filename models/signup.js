const db = require('../config/database');

const SignUp = {
  create: (usuario, callback) => {
    db.query('INSERT INTO Usuario SET ?', usuario, callback);
  }
};

module.exports = SignUp;


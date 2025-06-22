const db = require('../config/database');

const Menu = {
  getAll: (callback) => {
    db.query('SELECT * FROM Menu', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Menu WHERE Id = ?', [id], callback);
  },

  create: (platillo, callback) => {
    db.query('INSERT INTO Menu SET ?', platillo, callback);
  },

  update: (id, platillo, callback) => {
    db.query('UPDATE Menu SET ? WHERE Id = ?', [platillo, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Menu WHERE Id = ?', [id], callback);
  }
};

module.exports = Menu;


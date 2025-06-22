const db = require('../config/database');

const Proveedor = {
  getAll: (callback) => {
    db.query('SELECT * FROM Proveedor', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Proveedor WHERE Id = ?', [id], callback);
  },

  create: (proveedor, callback) => {
    db.query('INSERT INTO Proveedor SET ?', proveedor, callback);
  },

  update: (id, proveedor, callback) => {
    db.query('UPDATE Proveedor SET ? WHERE Id = ?', [proveedor, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Proveedor WHERE Id = ?', [id], callback);
  }
};

module.exports = Proveedor;

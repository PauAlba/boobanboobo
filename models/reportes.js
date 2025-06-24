const db = require('../config/database');

const Reportes = {
  getAll: (callback) => {
    db.query('SELECT * FROM Ventas', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Ventas WHERE Id = ?', [id], callback);
  },

  create: (venta, callback) => {
    db.query('INSERT INTO Ventas SET ?', venta, callback);
  },

  update: (id, venta, callback) => {
    db.query('UPDATE Ventas SET ? WHERE Id = ?', [venta, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Ventas WHERE Id = ?', [id], callback);
  }
};

module.exports = Reportes;


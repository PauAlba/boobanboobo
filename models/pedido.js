const db = require('../config/database');

const Pedido = {
  getAll: (callback) => {
    db.query('SELECT * FROM Pedido', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Pedido WHERE Id = ?', [id], callback);
  },

  create: (pedido, callback) => {
    db.query('INSERT INTO Pedido SET ?', pedido, callback);
  },

  update: (id, pedido, callback) => {
    db.query('UPDATE Pedido SET ? WHERE Id = ?', [pedido, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Pedido WHERE Id = ?', [id], callback);
  }
};

module.exports = Pedido;


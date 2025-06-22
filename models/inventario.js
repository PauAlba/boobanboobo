const db = require('../config/database');

const Inventario = {
  getAll: (callback) => {
    db.query('SELECT * FROM Inventario', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Inventario WHERE Id = ?', [id], callback);
  },

  create: (ingrediente, callback) => {
    db.query('INSERT INTO Inventario SET ?', ingrediente, callback);
  },

  update: (id, ingrediente, callback) => {
    db.query('UPDATE Inventario SET ? WHERE Id = ?', [ingrediente, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Inventario WHERE Id = ?', [id], callback);
  }
};

module.exports = Inventario;


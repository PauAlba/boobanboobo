const db = require('../config/database');

const Menu = {
  getAll: (callback) => {
    db.query('SELECT * FROM Menu', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Menu WHERE Id = ?', [id], callback);
  },

  create: (platillo, callback) => {
    console.log('creando...')
    db.query('INSERT INTO Menu SET ?', platillo, callback);
    (err, results) => {
        if (err) {
          console.error('Error en post:', err);
          return callback(err);
        }
        callback(null, results || []);
      }
  },

  update: (id, platillo, callback) => {
    db.query('UPDATE Menu SET ? WHERE Id = ?', [platillo, id], callback);

  },

  delete: (id, callback) => {
    db.query('DELETE FROM Menu WHERE Id = ?', [id], callback);
  }
};

module.exports = Menu;


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
  },

  getHistorialPorCliente: (clienteId, callback) => {
    console.log(`🟡 Ejecutando getHistorialPorCliente para clienteId=${clienteId}...`);

    const sql = `
      SELECT p.Id, p.Fecha, p.Completado, p.PlatilloId
      FROM Pedido p
      WHERE p.UsuarioId = ?
      ORDER BY p.Fecha DESC
    `;

    db.query(sql, [clienteId], (err, results) => {
      if (err) {
        console.error('❌ Error en consulta:', err);
        return callback(err);
      }

      console.log('✅ Resultados:', results);
      callback(null, results || []);
    });
  }

};

module.exports = Pedido;


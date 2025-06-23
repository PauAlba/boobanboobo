const db = require('../config/database');

const Usuario = {
  // Obtener todos los usuarios (sin contraseñas)
  getAll: (callback) => {
    db.query('SELECT Id, Nombre, Usuario, Tipo, Email FROM Usuario', callback);
  },

  // Obtener usuario por ID
  getById: (id, callback) => {
    db.query('SELECT Id, Nombre, Usuario, Tipo, Email FROM Usuario WHERE Id = ?', [id], callback);
  },

  // Crear nuevo usuario
  create: (usuario, callback) => {
    db.query('INSERT INTO Usuario SET ?', usuario, callback);
  },

  // Actualizar usuario (sin validaciones)
  update: (id, usuario, callback) => {
    db.query('UPDATE Usuario SET ? WHERE Id = ?', [usuario, id], callback);
  },

  // Eliminar usuario
  delete: (id, callback) => {
    db.query('DELETE FROM Usuario WHERE Id = ?', [id], callback);
  },

  // Login (único método necesario para auth)
  login: (usuario, contrasena, callback) => {
    db.query(
      'SELECT Id, Nombre, Usuario, Tipo FROM Usuario WHERE Usuario = ? AND Contrasena = ?',
      [usuario, contrasena],
      (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]); // Retorna el usuario encontrado o null
      }
    );
  },

  getClientes: (callback) => {
    db.query(
      'SELECT Id, Nombre, Usuario, Telefono, Email FROM Usuario WHERE Tipo = ?', 
      ['cliente'], 
      callback
    );
  },
  
  getByCliente: (clienteId, callback) => {
    db.query(`
      SELECT 
        p.Id,
        p.Fecha,
        p.Completado,
        m.Platillo,
        m.Precio
      FROM Pedido p
      JOIN Menu m ON p.PlatilloId = m.Id
      WHERE p.UsuarioId = ?
      ORDER BY p.Fecha DESC
    `, [clienteId], callback);
  }

};


  

module.exports = Usuario;
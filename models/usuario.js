const db = require('../config/database');

const Usuario = {
  // Obtener todos los usuarios (sin contraseñas)
  getAll: (callback) => {
    console.log('hola')
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

  // getClientes: (callback) => {
  //   db.query(
  //     'SELECT Id, Nombre, Usuario, Telefono, Email FROM Usuario WHERE Tipo LIKE ?', 
  //     ['cliente'],
  //     (err, results) => {
  //       if (err) return callback(err);
  //       callback(null, results || []);
  //     }
  //   );
  // }

  getClientes: (callback) => {
    console.log('🟡 Ejecutando getClientes...');
    db.query(
      'SELECT Id, Nombre, Usuario, Telefono, Email FROM Usuario WHERE Tipo = ?',
      ['cliente'],
      (err, results) => {
        if (err) {
          console.error('❌ Error en consulta:', err);
          return callback(err);
        }

        console.log('✅ Resultados:', results);
        callback(null, results || []);
      }
    );
  }
  

};


  

module.exports = Usuario;
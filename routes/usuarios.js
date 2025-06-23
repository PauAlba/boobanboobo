const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const Pedido = require('../models/pedido');

// Login - Reemplaza a auth.js
router.post('/login', (req, res) => {
  const { usuario, contrasena } = req.body;
  
  if (!usuario || !contrasena) {
    return res.status(400).json({ error: 'Usuario y contraseña requeridos' });
  }

  Usuario.login(usuario, contrasena, (err, usuarioEncontrado) => {
    if (err) return res.status(500).json({ error: 'Error en el servidor' });
    if (!usuarioEncontrado) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }
    
    res.json({
      success: true,
      user: usuarioEncontrado
    });
  });
});

// router.get('/clientes', (req, res) => {
//     Usuario.getClientes((err, results) => {
//         if (err) return res.status(500).json({ error: 'Error al obtener clientes' });
//         res.json(results);
//     });
// });

router.get('/clientes', (req, res) => {
  Usuario.getClientes((err, clientes) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener clientes' });
    }
    res.json(clientes);
  });
});


// Otras rutas CRUD
router.get('/', (req, res) => {
  Usuario.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  Usuario.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0] || null);
  });
});

router.post('/', (req, res) => {
  Usuario.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId });
  });
});

router.put('/:id', (req, res) => {
  Usuario.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

router.delete('/:id', (req, res) => {
  Usuario.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});


module.exports = router;
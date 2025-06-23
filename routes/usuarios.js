const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

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

// Añade esto junto a tus otras rutas
router.get('/clientes', (req, res) => {
    Usuario.getClientes((err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener clientes' });
        res.json(results);
    });
});


router.get('/cliente/:id', (req, res) => {
  const clienteId = req.params.id;
  
  if (!clienteId || isNaN(clienteId)) {
    return res.status(400).json({ error: 'ID de cliente inválido' });
  }

  Pedido.getByCliente(clienteId, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener pedidos' });
    res.json(results);
  });
});

module.exports = router;
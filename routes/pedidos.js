const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');

router.get('/', (req, res) => {
  Pedido.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  Pedido.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
});

router.post('/', (req, res) => {
  Pedido.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Pedido creado', id: result.insertId });
  });
});

router.put('/:id', (req, res) => {
  Pedido.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Pedido actualizado' });
  });
});

router.delete('/:id', (req, res) => {
  Pedido.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Pedido eliminado' });
  });
});

module.exports = router;

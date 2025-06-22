const express = require('express');
const router = express.Router();
const Inventario = require('../models/inventario');

router.get('/', (req, res) => {
  Inventario.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  Inventario.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
});

router.post('/', (req, res) => {
  Inventario.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Ingrediente agregado', id: result.insertId });
  });
});

router.put('/:id', (req, res) => {
  Inventario.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Ingrediente actualizado' });
  });
});

router.delete('/:id', (req, res) => {
  Inventario.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Ingrediente eliminado' });
  });
});

module.exports = router;


const express = require('express');
const router = express.Router();
const Proveedor = require('../models/proveedor');

router.get('/', (req, res) => {
  Proveedor.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  Proveedor.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
});

router.post('/', (req, res) => {
  Proveedor.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Proveedor creado', id: result.insertId });
  });
});

router.put('/:id', (req, res) => {
  Proveedor.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Proveedor actualizado' });
  });
});

router.delete('/:id', (req, res) => {
  Proveedor.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Proveedor eliminado' });
  });
});

module.exports = router;

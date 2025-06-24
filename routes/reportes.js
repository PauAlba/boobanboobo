const express = require('express');
const router = express.Router();
const Reportes = require('../models/reportes');

router.get('/', (req, res) => {
  Reportes.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  Reportes.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
});

router.post('/', (req, res) => {
  Reportes.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Venta registrada', id: result.insertId });
  });
});

router.put('/:id', (req, res) => {
  Reportes.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Venta actualizada' });
  });
});

router.delete('/:id', (req, res) => {
  Reportes.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Venta eliminada' });
  });
});

module.exports = router;


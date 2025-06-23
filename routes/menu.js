const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');

router.get('/', (req, res) => {
  Menu.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  Menu.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
});


router.post('/', (req, res) => {
  Menu.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Platillo creado', id: result.insertId });
  });
});

router.put('/:id', (req, res) => {
  Menu.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Platillo actualizado' });
  });
});

router.delete('/:id', (req, res) => {
  Menu.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Platillo eliminado' });
  });
});

module.exports = router;

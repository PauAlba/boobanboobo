const express = require('express');
const router = express.Router();
const SignUp = require('../models/signup');

router.post('/', (req, res) => {
  const { Nombre, Usuario: username, Contrasena, Tipo, Telefono, Email } = req.body;

  if (!Nombre || !username || !Contrasena || !Tipo) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const nuevoUsuario = {
    Nombre,
    Usuario: username,
    Contrasena,
    Tipo,
    Telefono,
    Email
  };

  SignUp.create(nuevoUsuario, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Usuario registrado exitosamente', id: result.insertId });
  });
});

module.exports = router;



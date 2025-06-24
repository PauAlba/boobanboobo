require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database');

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas API
// app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/menu', require('./routes/menu'));
app.use('/api/pedidos', require('./routes/pedidos'));
app.use('/api/inventario', require('./routes/inventario'));
app.use('/api/proveedores', require('./routes/proveedores'));
app.use('/api/reportes', require('./routes/reportes'));
app.use('/api/signup', require('./routes/signup'));

// my sql conneccion base de datos
db.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// inicio
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

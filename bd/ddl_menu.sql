CREATE DATABASE menu_db;
USE menu_db;

-- Tabla única para usuarios (empleados y clientes)
CREATE TABLE Usuario (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Usuario VARCHAR(30) NOT NULL UNIQUE,
    Contrasena VARCHAR(255) NOT NULL,
    Tipo ENUM('administrador', 'mesero', 'cocinero', 'cliente') NOT NULL,
    Telefono VARCHAR(15),
    Email VARCHAR(50)
);

-- Tabla de menú
CREATE TABLE Menu (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Platillo VARCHAR(100) NOT NULL,
    Precio DECIMAL(10,2) NOT NULL,
    Disponibilidad BOOLEAN DEFAULT TRUE
);

-- Tabla única de pedidos (como la tenías originalmente)
CREATE TABLE Pedido (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    Completado BOOLEAN DEFAULT FALSE,
    UsuarioId INT,  -- Relación con quien hace el pedido (cliente o empleado)
    PlatilloId INT, -- Platillo solicitado
    FOREIGN KEY (UsuarioId) REFERENCES Usuario(Id),
    FOREIGN KEY (PlatilloId) REFERENCES Menu(Id)
);

-- Tabla de inventario
CREATE TABLE Inventario (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Ingrediente VARCHAR(50) NOT NULL,
    Stock INT NOT NULL
);

-- Tabla de proveedores
CREATE TABLE Proveedor (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Telefono VARCHAR(15) NOT NULL,
    Servicio VARCHAR(200) NOT NULL
);

CREATE TABLE Ventas (
  Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Fecha DATETIME NOT NULL,
  Total DECIMAL(10,2) NOT NULL,
  Responsable VARCHAR(100) NOT NULL
);
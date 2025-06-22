USE menu_db;

-- Usuarios (empleados del sistema)
INSERT INTO Usuario (Nombre, Cargo, Usuario, Contrasena)
VALUES 
('Ana López', 'Administrador', 'admin01', 'admin123'),
('Luis Torres', 'Mesero', 'luis.t', 'mesero123'),
('María García', 'Cocinera', 'mariag', 'cocina456');

-- Clientes registrados
INSERT INTO Cliente (Nombre, Telefono, Email, Contrasena)
VALUES 
('Juan Pérez', '5551234567', 'juanp@gmail.com', '1234'),
('Laura Mendoza', '5559876543', 'lauram@hotmail.com', '4567'),
('Carlos Díaz', '5552468101', 'cdiaz@yahoo.com', '7890');

-- Menú disponible
INSERT INTO Menu (Platillo, Precio, Disponibilidad)
VALUES 
('Hamburguesa Clásica', 85.50, TRUE),
('Pizza Margarita', 120.00, TRUE),
('Ensalada César', 70.00, TRUE),
('Tacos al Pastor', 65.00, FALSE);

-- Pedidos realizados
INSERT INTO Pedido (Completado, ClienteId, PlatilloId)
VALUES 
(FALSE, 1, 1),
(TRUE, 2, 2),
(TRUE, 1, 3),
(FALSE, 3, 4);

-- Inventario de ingredientes
INSERT INTO Inventario (Ingrediente, Stock)
VALUES 
('Lechuga', 20),
('Tomate', 15),
('Carne de res', 10),
('Pan de hamburguesa', 25),
('Queso', 30);

-- Proveedores asociados
INSERT INTO Proveedor (Nombre, Telefono, Servicio)
VALUES 
('Distribuidora La Huerta', 5551112233, 'Verduras y frutas frescas'),
('Carnes Premium', 5553334455, 'Carne de res y cerdo de primera'),
('Panadería Don Pancho', 5556667788, 'Pan artesanal y bollería');

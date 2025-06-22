-- USE menu_db;

-- -- Usuarios del sistema (meseros, cocina, admin)
-- INSERT INTO Usuario (Nombre, Cargo) VALUES
-- ('Ana Ramírez', 'admin'),
-- ('Carlos Méndez', 'mesero'),
-- ('Lucía Gómez', 'cocinera'),
-- ('Mario Ruiz', 'mesero');

-- -- Clientes registrados
-- INSERT INTO Cliente (Usuario, Contrasena) VALUES
-- ('cliente1', 1234),
-- ('cliente2', 5678),
-- ('cliente3', 2468);

-- -- Menú de platillos
-- INSERT INTO Menu (Platillo, Precio, Disponibilidad) VALUES
-- ('Tacos al pastor', 35.00, TRUE),
-- ('Hamburguesa clásica', 60.00, TRUE),
-- ('Pizza de pepperoni', 85.00, FALSE),
-- ('Ensalada César', 45.00, TRUE),
-- ('Spaghetti a la boloñesa', 70.00, TRUE);

-- -- Inventario de ingredientes
-- INSERT INTO Inventario (Ingrediente, Stock) VALUES
-- ('Carne al pastor', 30),
-- ('Pan de hamburguesa', 20),
-- ('Queso mozzarella', 15),
-- ('Lechuga', 25),
-- ('Spaghetti', 40),
-- ('Salsa boloñesa', 35);

-- -- Proveedores de insumos
-- INSERT INTO Proveedor (Nombre, Telefono, Servicio) VALUES
-- ('Carnes Premium', 551122334, 'Provee carne de res y cerdo'),
-- ('Panadería La Tradición', 522334455, 'Pan artesanal y bollería'),
-- ('Lácteos del Bajío', 553344566, 'Quesos y mantequillas'),
-- ('Verduras Express', 554455667, 'Verduras frescas a diario');

-- -- Pedidos realizados por clientes
-- INSERT INTO Pedido (Completado, ClienteId, PlatilloId) VALUES
-- (FALSE, 1, 1),  -- cliente1 pide tacos
-- (TRUE, 2, 2),   -- cliente2 pidió hamburguesa
-- (TRUE, 3, 4),   -- cliente3 pidió ensalada
-- (FALSE, 1, 5);  -- cliente1 pidió spaghetti

CREATE TABLE manager (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    office VARCHAR(255) NOT NULL,
    address_line_1 VARCHAR(255) NOT NULL,
    address_line_2 VARCHAR(255),
    phone_number VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL
);
INSERT INTO manager (name, description, office, address_line_1, address_line_2, phone_number, email) VALUES
('Pete Lawlor', 'Oversees the daily operations of the Horticulture Hall greenhouses and growth chambers and ATRB greenhouses', '64 Horticulture Hall', '2206 Osborn Drive', 'Ames, IA 50011', '515-294-2100', 'palawlor@iastate.edu'),
('Aaron Brand', 'Oversees the daily operations of Agronomy Hall greenhouses and growth chambers, Agronomy Greenhouse, and Plant Pathology greenhouses', '2104H Agronomy Hall', '716 Farm House Lane', 'Ames, IA 50011', '515-294-6904', 'abrand@iastate.edu');

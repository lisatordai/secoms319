CREATE TABLE greenhouse (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    bio TEXT NOT NULL,
    url VARCHAR(255) NOT NULL,
    alt VARCHAR(255) NOT NULL
);
INSERT INTO greenhouse (name, bio, url, alt) VALUES
('Agronomy greenhouse', 'Agronomy greenhouse Stuff', './images/Agronomy.jpg', 'Agronomy greenhouse photo'),
('Agronomy Hall greenhouse', 'Plant', './images/plant1.jpg', 'plant1'),
('Plant Pathology greenhouse', 'Plant Pathology greenhousestuff', './images/Pathology.jpg', 'Plant Pathology greenhouse photo'),
('Forestry greenhouse', 'Forestry greenhouse stuff', './images/plant1.jpg', 'Forestry greenhouse photo'),
('Horticulture Hall greenhouse', 'Horticulture Hall greenhouse stuff', './images/Horticulture.jpg', 'Horticulture Hall greenhouse photo'),
('ATRB greenhouse', 'ATRB greenhouse stuff', './images/plant1.jpg', 'ATRB greenhouse photo');

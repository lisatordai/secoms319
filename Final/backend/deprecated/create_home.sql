CREATE TABLE home (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    url VARCHAR(255),
    url_button VARCHAR(50)
);
INSERT INTO home (title, text, url, url_button) VALUES
('About the Facilities', 'The Shared Plant Growth Facilities encompasses 43,967 square feet of greenhouse space in the Advanced Teaching and Research Building (ATRB), Agronomy Greenhouse, Agronomy Hall, Horticulture Hall, and Plant Pathology Greenhouse with a total of 84 rooms to house instructional and research projects as well as 56 plant growth chambers in Agronomy Hall and Horticulture Hall that have a total growing space of over 985 square feet. The greenhouses range in construction dates from 1967 through 2018. The Agronomy Hall, Horticulture Hall, and ATRB greenhouses have computer control systems to ensure proper environmental conditions and to provide specific conditions for research and instructional projects. The growth chambers are able to simulate the climate of many locations from around the globe with lighting and temperature control in all changes and some chambers also have humidity and CO2 controls as well. The majority of the insect pest control in the Shared Plant Growth Facilities is accomplished with the use of beneficial insects, predatory mites, and parasitic wasps to significantly decrease the use of chemical pesticides and the risks associated with them for all of our faculty, staff, and students.', NULL, NULL),
('Visit Us', 'The Shared Plant Growth Facilities, primarily being for research and teaching purposes are not normally open for visitors. We do, however offer guided tours of the greenhouse and growth chamber facilities with the greenhouse managers. To schedule a tour of the facilities, please contact the greenhouse manager at least two weeks in advance.', NULL, NULL),
('Notice', 'There could be poisonous plants and plants that may cause allergic reactions in the greenhouses so it is advised that you do not touch any of the plants in the greenhouse. Some plants may have been treated with pesticides so you should not ingest any plant material from the greenhouse.', NULL, NULL),
('Reservations', 'Reservations are managed through an online reservation system called RedBud.', 'https://iowastate.redbudsaas.us/', 'Reserve');

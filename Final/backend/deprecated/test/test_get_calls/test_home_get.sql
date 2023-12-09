-- Route to get all posts
-- /api/home/get
SELECT * FROM home;

-- Route to get one section for home from ID
-- /api/home/getFromId/:id
SELECT * FROM home WHERE id = 2;

-- Route to get one section for home from title
-- "/api/home/getFromTitle/:title"
SELECT * FROM home WHERE title = "Visit Us";

-- Route to get id from title
-- /api/home/getIdFromTitle/:title
SELECT id FROM home WHERE title = "Visit Us";

-- Route to get title from id
-- /api/home/getTitleFromId/:id
SELECT title FROM home WHERE id = 1;

-- Route to get text from Id
-- /api/home/getTextFromId/:id
SELECT text FROM home WHERE id = 1;

-- Route to get text from title
-- /api/home/getTextFromTitle/:title
SELECT text FROM home WHERE title = "Visit Us";


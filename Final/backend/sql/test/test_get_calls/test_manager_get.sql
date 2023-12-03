-- Route to get all manager posts
-- /api/manager/get
SELECT * FROM manager;

-- Route to get manager from Id
-- /api/manager/getFromId/:id
SELECT * FROM manager WHERE id = 2;

-- Route to get manager from name
-- /api/manager/getFromName/:name
SELECT * FROM manager WHERE name = "Aaron Brand"

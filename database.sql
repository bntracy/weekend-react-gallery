CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/family.jpg', 'Family', 'Photo on vacation with my parents and brother.'),
('images/friends1.jpg', 'Friends', 'My friends at Turducken. We are all very full.'),
('images/friends2.jpg', 'Friends', 'My friends, ready for an adventure.'),
('images/Maxie1.jpg', 'Maxie', 'Pretty bird!'),
('images/Maxie2.jpg', 'Maxie', 'Maxie getting scratchies.');
  
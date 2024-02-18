const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const sqlText = 'UPDATE "gallery" SET "likes"="likes"+1 WHERE "id"=$1;';
  pool.query(sqlText, [req.params.id]).then(dbResult => {
    res.sendStatus(200);
  }).catch(dbError => {
    console.log('Error incrementing likes', sqlText, dbError);
    res.sendStatus(500);
  });
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlText = 'SELECT * FROM "gallery" ORDER BY "id" ASC';
  pool.query(sqlText).then(dbResult => {
    res.send(dbResult.rows);
  }).catch(dbError => {
    console.log('Error getting data from database', dbError);
    res.sendStatus(500);
  });
});

router.post('/', (req, res) => {
  const sqlText = 'INSERT INTO "gallery" ("url", "title", "description") VALUES ($1, $2, $3);';
  pool.query(sqlText, [req.body.url, req.body.title, req.body.description]).then(dbResult => {
    res.sendStatus(201);
  }).catch(dbError => {
    console.log('Error putting data in database', dbError);
    res.sendStatus(500);
  });
});

router.delete('/:id', (req, res) => {
  const sqlText = 'DELETE FROM "gallery" WHERE "id"=$1';
  pool.query(sqlText, [req.params.id]).then(dbResult => {
    res.sendStatus(204);
  }).catch(dbError => {
    console.log('Error deleting item', dbError);
    res.sendStatus(500);
  });
});

module.exports = router;

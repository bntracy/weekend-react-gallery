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
  const sqlText = 'SELECT * FROM "gallery"';
  pool.query(sqlText).then(dbResult => {
    res.send(dbResult.rows);
  }).catch(dbError => {
    console.log('Error getting data from database', dbError);
    res.sendStatus(500);
  });
});

module.exports = router;

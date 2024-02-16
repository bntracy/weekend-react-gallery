const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
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

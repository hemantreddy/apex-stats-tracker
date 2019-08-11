const express = require('express');

const router = express.Router();

router.get('/:platform/:gamertag', (req, res, next) => {
  console.log(req.params.platform, req.params.gamertag);
  res.send('hello');
});

module.exports = router;

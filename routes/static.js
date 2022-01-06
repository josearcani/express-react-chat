const path = require('path');

const router = require('express').Router();

router.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../client/build/') });
});

module.exports = router;

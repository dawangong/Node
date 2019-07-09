const express = require('express');
const router = express.Router();

router.get('/:name', (req, res) => {
  res.render('user', {
    name: req.params.name
  });
  // res.send('hello, ' + req.params.name)
});

module.exports = router;

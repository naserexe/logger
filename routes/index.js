const router = require('express').Router();


router.get('/', (req, res, next) => {
  res.json({ msg: 'GET method on root url' });
  req.reqParams = req.params;
  next();
});

module.exports = router;

const router = require('express').Router();

// This route will work correctly
router.get('/', (req, res, next) => {
  try {
    res.render('index', { user: 'Abdullah Naser' });
  } catch (err) {
    next(err);
  }
});

// This route will throw an error
router.get('/error', (req, res, next) => {
  try {
    // eslint-disable-next-line
    something_goes_wrong_here___
  } catch (err) {
    next(err);
  }
});

module.exports = router;

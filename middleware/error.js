const errorHandler = (err, req, res, next) => {
  // Log to console for developer
  console.log(err);

  res.status(err.statusCode || 500).render('error', { error: err, status: err.statusCode || 500 });
  next();
};

module.exports = errorHandler;

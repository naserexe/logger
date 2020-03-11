const fs = require('fs');

const logger = (req, res, next) => {
  // Create log object
  const log = {
    method: req.method,
    protocol: req.protocol,
    host: req.get('host'),
    body: Object.keys(req.body).length === 0 ? 'No body found' : req.body,
    requestTime: new Date().toISOString(),
    url: req.originalUrl,
    params: Object.keys(req.params).length === 0 ? 'No params found' : req.params,
    query: Object.keys(req.query).length === 0 ? 'No query found' : req.query,
  };

  // Convert JSON data to string
  const data = JSON.stringify(log);

  // Write log file
  fs.writeFile(`./logs/request-log-${Date.now()}.json`, data, (err) => {
    if (err) {
      return console.log(err);
    }
    return console.log('Log saved');
  });

  // Destructuring log object
  const {
    method, protocol, host, url, requestTime,
  } = log;

  console.log(`${method} ${protocol}://${host}${url} -- ${requestTime}`);
  console.log(log);
  next();
};

module.exports = logger;

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error');

// Route files;
const indexRoute = require('./routes/index');


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Logger middleware
app.use(logger);


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Mount Routes
app.use('/', indexRoute);

// All route will throw an error except those we created
app.use('*', (req, res) => {
  res.render('notFound', { error: 'Ops! This Page Could Not Be Found', status: '404' });
});


// Error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

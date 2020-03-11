const express = require('express');
const logger = require('./middleware/logger');

// Route files;
const indexRoute = require('./routes/index');


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Logger middleware
app.use(logger);

// Mount Routes
app.use('/', indexRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

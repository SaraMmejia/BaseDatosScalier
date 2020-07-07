const express = require('express');
const cors = require('cors');
const connection = require('./db.js');

const app = express(); //inicializa el servidor

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App running on http://localhost:${port}`));

const express = require('express');
const cors = require('cors');
const connection = require('./src/db');
const userController = require('./src/controllers/user.controller ');

const app = express(); //inicializa el servidor
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendStatus(200);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App running on http://localhost:${port}`));

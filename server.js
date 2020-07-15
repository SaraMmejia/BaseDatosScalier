require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./src/db');
const userController = require('./src/controllers/user.controller');
const loginController = require('./src/controllers/login.controller');
const morgan = require('morgan');
const userRouter = require('./src/routes/user');
const loginRouter = require('./src/routes/login');

const app = express(); //inicializa el servidor
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/', loginRouter);
app.use('/users', userRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App running on http://localhost:${port}`));

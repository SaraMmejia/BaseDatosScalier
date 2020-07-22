require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./src/db');
const morgan = require('morgan');
const userRouter = require('./src/routes/user');
const loginRouter = require('./src/routes/login');
const postRouter = require('./src/routes/post');
const commentController = require('./src/routes/comment');
const likeController = require('./src/routes/like');
const { formData } = require('./src/utils/middlewareBusBoy');

const app = express(); //inicializa el servidor
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/', loginRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentController);
app.use('/likes', likeController);

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`App running on http://localhost:${port}`));

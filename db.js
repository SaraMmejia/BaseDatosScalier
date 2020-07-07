const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect('mongodb://localhost:27017/users', options);

const { connection } = mongoose;

connection.once('open', () => console.log('Conntion Established Successfully'));

connection.on('error', () => console.log('Something went wrong', err));

module.exports = connection;

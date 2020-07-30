const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGO_URI, options);

const { connection } = mongoose;

connection.once('open', () => console.log('Conntion Established Successfully'));

connection.on('error', () => console.log('Something went wrong', err));

module.exports = connection;

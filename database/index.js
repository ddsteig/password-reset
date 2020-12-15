const mongoose = require('mongoose');

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/forage",{
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);

mongoose.connection.on('error', (err) => {
    console.error(`Error: ${err.message}`);
  });

module.exports = mongoose.connection;
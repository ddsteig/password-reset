const mongoose = require('mongoose');

// Connect to the Mongo DB
// useFindAndModify set to false for password rset functionality
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/forage",{
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);

mongoose.connection.on('error', (err) => {
    console.error(`Error: ${err.message}`);
  });

module.exports = mongoose.connection;
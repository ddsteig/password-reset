require("dotenv").config();
const express = require("express");
const dbConnection = require("./database");
const logger = require("morgan");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/route");
const routes = require("./routes");

const cookieParser = require("cookie-parser");

// Logs the actions taking place in server-side for routes
app.use(logger("dev"));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
dbConnection;

app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/auth", authRoutes);
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use("/Forage-Reactive/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Start the API server
app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});

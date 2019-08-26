const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const createDataRoutes = require("./routes/create-data");
const userRoutes = require("./routes/user");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://127.0.0.1:27017/student")
  .then(() => console.log("CONNECTED TO DB!"))
  .catch(err => console.log("CONNECTION FAILED!"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET POST PATCH DELETE OPTIONS"
  );
  next();
});

app.use(createDataRoutes);
app.use(userRoutes);

module.exports = app;

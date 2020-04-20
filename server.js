//dependencies
const express = require("express");
const app = new express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

//imports
const db = require("./config/keys");
const itemRouter = require("./routes/api/itemRouter");

//variables
const port = process.env.PORT || 8000;

//middlewareeeeeeee
app.use(bodyParser.json());
app.use("/api/items", itemRouter);

//connect to mongo
mongoose
  .connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB database!"))
  .catch((err) => console.log(err));

//start server
app.listen(port, () => console.log(`Server started at port: ${port}`));

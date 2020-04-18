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

//serve static assets if in production
if (process.env.NODE_ENV === "produvtion") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//connect to mongo
mongoose
  .connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB database!"))
  .catch((err) => console.log(err));

//start server
app.listen(port, () => console.log(`Server started at port: ${port}`));

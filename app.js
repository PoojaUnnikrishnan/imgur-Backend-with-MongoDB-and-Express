const cors = require("cors");
const express = require("express"); // load express module which returns a function
const app = express(); //represent our application
const mongoose = require("mongoose"); //to connect database and server.
require("dotenv").config(); //to read enviornment variables from .env file

app.use(express.json()); // parse requests of content-type - application/json
app.use(
  express.urlencoded({
    // parse requests of content-type - application/x-www-form-urlencoded
    extended: true,
  })
);
app.use(cors());

require("./router/userRouter")(app);
require("./router/imageRouter")(app);

const PORT = process.env.PORT || 3000; //setup server to listen
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", function (req, res) {
  //to get a response
  res.send("Hello World.."); //this sends "hello world" message
});

app.listen(PORT, function () {
  //listening to port
  console.log(`listening to port ${PORT}`);
});

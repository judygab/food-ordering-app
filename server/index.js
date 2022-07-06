const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require('./db')

const app = express();
const productRouter = require('./routes/productRouter');

var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Food Ordering." });
});
//get products
app.use('/api/', productRouter)
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
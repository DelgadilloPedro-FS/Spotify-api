require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.BE_PORT || 3001;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

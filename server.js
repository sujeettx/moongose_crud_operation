const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 5800;
require("./db");
const people = require("./models/people");
app.use(express.json());

const peoplesRoutes = require('./routes/peoplesRoutes')
app.use('/people',peoplesRoutes)
app.listen(port, () => {
  console.log(`server is running in port number ${port}`);
});

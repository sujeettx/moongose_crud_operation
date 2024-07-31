const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 5800;
require("./db");
app.use(express.json());
const menucard = require('./routes/menucardRoutrs');
app.use('/menuCard',menucard);
const peoplesRoutes = require('./routes/peoplesRoutes');
app.use('/people',peoplesRoutes)
app.listen(port, () => {
  console.log(`server is running in port number ${port}`);
});

const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 5800;
require("./db");
const logrequest = (req,res,next)=>{
  console.log(`[${ new Date().toLocaleString()} request made to : ${req.originalUrl}]`);
  next();
}
app.use(logrequest);
app.use(express.json());
const menucard = require('./routes/menucardRoutrs');
app.use('/menuCard',menucard);
const peoplesRoutes = require('./routes/peoplesRoutes');
app.use('/people',peoplesRoutes)
app.listen(port, () => {
  console.log(`server is running in port number ${port}`);
});

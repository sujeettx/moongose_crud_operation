const express = require("express");
const bodyparser = require("body-parser");
require("./db");
const middleware = require("./middleware");
const passport = require("./auth");
const app = express();
const port = 5800;
app.use(middleware);
app.use(express.json());
app.use(passport.initialize());
const menucard = require("./routes/menucardRoutrs");
app.use("/menuCard", menucard);
const peoplesRoutes = require("./routes/peoplesRoutes");
const localAthuerzation = passport.authenticate("local", { session: false });
app.use("/people",localAthuerzation,peoplesRoutes);
app.listen(port, () => {
  console.log(`server is running in port number ${port}`);
});

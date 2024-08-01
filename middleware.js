const logrequest = (req, res, next) => {
    console.log(
      `[${new Date().toLocaleString()} request made to : ${req.originalUrl}]`
    );
    next();
  };
module.exports = logrequest;
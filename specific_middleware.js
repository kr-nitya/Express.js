const express = require("express");
const app = express();
const port = 4000;
//Single Middleware
// app.use("/user/:id", (req, res, next) => {
//   res.send("Hello");
//   console.log("Request Type:", req.method);
//   next();
// });

//Multiple Middleware
app.use(
  "/user/:id",
  (req, res, next) => {
    res.send("First");
    console.log("Request URL:", req.originalUrl);
    console.log("First");
    
    next();
  },
  (req, res, next) => {
    console.log("Second");
    console.log("Request Type:", req.method);
    next();
  }
);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

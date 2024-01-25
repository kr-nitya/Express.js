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
// app.use(
//   "/user/:id",
//   (req, res, next) => {
//     res.send("First");
//     console.log("Request URL:", req.originalUrl);
//     console.log("First");
//     next();
//   },
//   (req, res, next) => {

//     console.log("Request Type:", req.method);
//     console.log("Second");
//     next();
//   }
// );
//Conditional Middleware
app.get("/user/:id",
  (req, res, next) => {
    // if the user ID is 0, skip to the next route
    if (req.params.id === "0") {
      //If id = 0 then skip the regular middleware and jump to the next with same route path /user/:id
      next("route");
      // otherwise pass the control to the next middleware function in this stack
    } else {
      next();
    }
  },
  (req, res, next) => {
    // send a regular response
    res.send("regular");
  }
);

// handler for the /user/:id path, which sends a special response
app.get("/user/:id", (req, res, next) => {
  res.send("special");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

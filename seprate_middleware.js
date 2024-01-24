const express = require("express");
const app = express();

const myLogger = function (req, res, next) {
  console.log("First Middleware");
  next();
};
const secondMid = function (req, res, next) {
  console.log("Second Middleware");
  next();
};
//Middleware execute in order which it is added
//The above both middleware execute for each request on / and /test
app.use(secondMid);
app.use(myLogger);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/test",(req,res)=>{
    res.send("Testing..");
})
app.listen(4000);

// const express = require("express");
// const app = express();

// const requestTime = function (req, res, next) {
//   req.requestTime = Date.now();
//  next();
// };

// app.use(requestTime);

// app.get("/", (req, res) => {
//   let responseText = "Hello World!<br>";
//   responseText += `<small>Requested at: ${req.requestTime}</small>`;
//   res.send(responseText);
// });

// app.listen(4000);

const express = require("express");
const app = express();
const port = 5000;
// app.get("/user/:id", function (req, res) {
//   //res.send('user ' + req.params.id)
//   res.send("The views directory is " + req.app.get("views"));
// });
app.get("/user/:id", (req, res) => {
  res.send(req.hostname);
  console.log("IP = ",req.ip);
  console.log("URL = ",req.originalUrl);
  console.log("Path = ",req.path);
  console.log("ID=", req.params.id);
  console.log("Protocol = ",req.protocol);
});
app.listen(port, () => {
  console.log("Listening..");
});

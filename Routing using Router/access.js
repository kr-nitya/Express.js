const express = require("express");
const app = express();
const port = 4000;
const birds = require("./birds");
//If we use this app.use("/",birds) then no need to give seprate paths whenever req on / or /about detected automatically 
//app.use("/", birds);
//If we use app.get() then we have to specify all the path which we want
// app.get("/",birds);
// app.get("/about",birds);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

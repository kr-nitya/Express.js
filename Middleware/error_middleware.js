const express = require("express");
const app = express();
app.get("/user/:id", (req, res, next) => {
  const userId = req.params.id;
  // Simulate an error
  if (userId === "0") {
    const err = new Error("User not found");
    err.status = 404;
    next(err);
  } else {
    // Normal processing if no error
    res.send(`User ID: ${userId}`);
  }
});
// Error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  // Send an error response to the client
  res.status(err.status).send("Something went wrong!");
});
app.listen(4000);

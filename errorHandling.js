const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 4000;

// app.get('/', (req, res) => {
//   throw new Error('BROKEN') // Express will catch this on its own.
// })
//Handling File Error
// app.get('/', (req, res, next) => {
//   fs.readFile('/file-does-not-exist', (err, data) => {
//     if (err) {
//       next(err) // Pass errors to Express.
//     } else {
//       res.send(data)
//     }
//   })
// })
//Async Error

// app.get("/", (req, res, next) => {
//   setTimeout(() => {
//     try {
//       throw new Error("BROKEN");
//     } catch (err) {
//       next(err);
//     }
//   }, 2000);
// });

// Middleware function that intentionally throws an error
app.use((req, res, next) => {
  try {
    throw new Error('Something went wrong!');
  } catch (error) {
    // Pass the error to the next middleware
    next(error);
  }
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong on our end!');
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});

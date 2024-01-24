const express = require("express");
const app = express();
const port = 4000;
app.get("/", (req, res) => {
  res.send("root");
});
app.get("/about", (req, res) => {
  res.send("about");
});
//This route path will match requests to /random.text
app.get("/random.text", (req, res) => {
  res.send("random.text");
});
//This route path will match acd and abcd.
//? ==> 0 or 1 time b
app.get("/ab?cd", (req, res) => {
  res.send("ab?cd");
});
//This route path will match abcd, abbcd, abbbcd, and so on.
// + ==> 1 or more time b
app.get("/ab+cd", (req, res) => {
  res.send("ab+cd");
});
//This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
// * ==> 1 time b and many time anything
app.get("/ab*cd", (req, res) => {
  res.send("ab*cd");
});
//This route path will match /abe and /abcde.
app.get("/ab(cd)?e", (req, res) => {
  res.send("ab(cd)?e");
});
//This route path will match anything with an “a” in it.
// app.get(/a/, (req, res) => {
//   res.send("/a/");
// });
//This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/, (req, res) => {
  res.send("/.*fly$/");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//Take userId and bookId from query string
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
});

app.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
  }, (req, res) => {
    res.send('Hello from B!')
  })
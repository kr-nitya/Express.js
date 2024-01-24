const express = require("express");
const app = express();
const port = 4000;
app.get("/", (req, res) => {
  // res.json({ user: 'Nitya' });
  //res.redirect("/redirect");
  //res.end("Now Ending..");
  //res.render('index'); //Use with EJS
  // res.send("Sending");
});
app.get("/redirect", (req, res) => {
  res.send("Redirected");
});
app.get("/html", (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Express HTML Example</title>
    </head>
    <body>
      <h1>Hello from Express!</h1>
    </body>
    </html>
  `;
  // Set the Content-Type header to indicate that HTML is being sent
  res.header("Content-Type", "text/html");
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log("Listening..");
});

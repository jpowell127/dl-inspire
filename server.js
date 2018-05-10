const express = require("express");
const app = express();
const path = require("path");
const appDir = path.dirname(require.main.filename);
const colors = require("colors/safe");
const opn = require("opn");

app.use("/", express.static("dist"));

// render home page
app.get("/", (req, res) => {
  res.sendFile(path.join(appDir + "/dist/index.html"));
});

// set up global error handling
app.use((req, res, next) => {
  res.status(404);

  // respond with json
  if (req.accepts("json")) {
    res.send({ error: "Not found" });
    return;
  }

  // default to plain-text. send()
  res.type("txt").send("Not found");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("-------------------------  o8o  -------------------------");
  console.log(colors.bold.green("Hi there Dealer Inspire!"));
  console.log(colors.blue("I'm going to launch your favorite browser now."));
  console.log("-------------------------  o8o  -------------------------");

  setTimeout(
    () => opn("http://localhost:" + (process.env.PORT || 3000) + "/"),
    1000
  );
});

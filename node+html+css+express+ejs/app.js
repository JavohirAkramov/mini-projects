//Imports
const express = require("express");
const app = express();
const port = 3001;

//Static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

//Set views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("", (req, res) => {
  // res.sendFile(__dirname + "/views/index.html");
  // res.send("Assalomu alaykum!");
  res.render("index", { text: "Ejs is first used by me!" });
});
app.get("/about", (req, res) => {
  res.render("about", { text: "This is About page" });
});

//Listen on port 3001
app.listen(port, () => console.info(`Listening on port ${port}`));

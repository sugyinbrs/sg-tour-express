// const userInfo = require("./data/userInfo");
var birds = require("./routes/bird");
const express = require("express");
const router = express.Router();
var cors = require("cors");
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
const port = 3090;

// cors enable all
app.use(cors(corsOptions));

app.use("/static", express.static("public"));

app.get("/", function (req, res) {
  res.send("POST request to the homepage Post");
});

app
  .route("/users")
  .get(function (req, res) {
    res.send("Get a random book");
    // res.json(userInfo);
  })
  .post(function (req, res) {
    res.send("Add a book");
  })
  .put(function (req, res) {
    res.send("Update the book");
  });

app.use("/birds", birds);

app.get("/images", function (req, res) {
  res.send("POST request to the users");
});

app.listen(port, () => {
  console.log(`port ${port} is ready!!!`);
});

module.exports = router;

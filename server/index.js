require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./middleware/errorHandler");
const authRoutes = require("./routes/authentication");
const postRoutes = require("./routes/userPosts");
const {
  ensureAuthenticated,
  ensureCorrectUser,
} = require("./middleware/authentication");

app.use(cors());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

// code block for serving the front end for cyclic.sh deployment
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//All my put routes here
app.use("/api/auth", authRoutes);
app.use(
  "/api/users/:id/posts",
  ensureAuthenticated,
  ensureCorrectUser,
  postRoutes
);

// get all posts
app.use("/api/posts", ensureAuthenticated, async (req, res, next) => {
  let userPosts = await db.UserPost.find()
    .sort({ createdAt: "descending" })
    .populate("user", { username: true, profileImageLink: true });
  return res.status(200).json(userPosts);
});

app.use(function (req, res, next) {
  let err = new Error("Not Found");
  res.status(404);
  return next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

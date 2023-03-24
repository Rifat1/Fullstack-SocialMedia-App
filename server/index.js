require("dotenv").config();
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

//will put routes here
// app.use("/", (req, res) => {
//   res.send("Hello World!");
// });
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

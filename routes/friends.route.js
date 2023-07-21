const express = require("express");

const {
  postFriends,
  getFriends,
  getFriend,
} = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log("IP address:", req.ip);
  next();
});

friendsRouter.post("/", postFriends);
friendsRouter.get("/", getFriends);
friendsRouter.get("/:friendsId", getFriend);

module.exports = friendsRouter;

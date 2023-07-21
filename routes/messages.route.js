const express = require("express");

const {
  getMessages,
  postMessages,
} = require("../controllers/messages.controller");

const messageRouter = express.Router();

messageRouter.get("/", getMessages);
messageRouter.post("/", postMessages);

module.exports = messageRouter;

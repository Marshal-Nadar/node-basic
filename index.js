const express = require("express");
const app = express();
const path = require("path");

const friendsRouter = require("./routes/friends.route");
const messageRouter = require("./routes/messages.route");

const PORT = 3000;

app.use((req, res, next) => {
  console.log(`${req.method}, ${req.url}`);
  next();
});

app.use(express.json());

app.use("/site", express.static(path.join(__dirname, "public")));

app.use("/friends", friendsRouter);
app.use("/messages", messageRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

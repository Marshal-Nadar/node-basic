const path = require("path");

function getMessages(req, res) {
  const img = path.join(__dirname, "..", "public", "mackbook.jpg");
  res.sendFile(img);
}

function postMessages(req, res) {
  console.log("Updating messages");
}

module.exports = { getMessages, postMessages };

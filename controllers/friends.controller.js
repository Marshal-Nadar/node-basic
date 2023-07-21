const friendsModel = require("../models/friendsmodel");

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friendsModel.push(newFriend);

  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(friendsModel);
}

function getFriend(req, res) {
  // console.log(typeof +req.params.friendsId);
  const friendID = +req.params.friendsId;
  const friend = friendsModel[friendID];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json("Resource Not Found!!!");
  }
}

module.exports = { postFriends, getFriends, getFriend };

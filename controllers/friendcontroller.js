const e = require("express");
const { mygroup } = require("../models/friends");

function getAllFriends(req, res) {
  res.status(200).json(mygroup);
}
function getFriendbyId(req, res) {
  const ID = Number(req.params.id);
  const friend = mygroup.find((friend) => {
    if (friend.id === ID) return friend;
  });

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(400).json({ error: "No friend" });
  }
}
function addFriend(req, res) {
  const id = Number(req.params.id);
  const check = mygroup.find((friend) => friend.id === id);
  console.log(check);
  if (check) {
    return res.status(400).json({ error: "Not valid" });
  } else if (!req.body.name) {
    return res.status(400).json({
      error: "must have username",
    });
  } else {
    const friend = { name: req.body.name, id: id };
    mygroup.push(friend);

    res.status(200).json(friend);
  }
}

function getMessagesById(req, res) {
  const id = Number(req.params.id);
  const check = mygroup.find((friend) => friend.id === id);
  if (check) {
    const friend = mygroup.find((member) => {
      if (member.id === id) return member;
    });
    const htmlResponse = `<html><body><ul><li>${friend.name}</li></ul></body></html>`;
    return res.send(htmlResponse);
  } else {
    return res.status(400).json({ error: "Not Valid" });
  }
}
function getAllMessages(req, res) {
  const studentNames = mygroup.map((student) => student.name);
  if (studentNames) {
    const htmlResponse = `<html><body><ul>${studentNames
      .map((name) => `<li>${name}</li>`)
      .join("")}</ul></body></html>`;

    res.send(htmlResponse);
    // res.render("index.html", { studentNames: studentNames });
  } else {
    res.status(400).json({ error: "Not valid" });
  }
}
module.exports = {
  getFriendbyId,
  getAllFriends,
  addFriend,
  getAllMessages,
  getMessagesById,
};

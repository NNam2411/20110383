const express = require("express");
const {
  getAllFriends,
  getFriendbyId,
  addFriend,
  getAllMessages,
  getMessagesById,
} = require("../controllers/friendcontroller");
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
//http://localhost:5000/20110383/20110010
router.get("/20110383/:id", getFriendbyId);
// define the about route
// http://localhost:5000/
router.get("/", getAllFriends);
// http://localhost:5000/20110383/20110030
router.post("/20110383/:id", addFriend);
// http:localhost:5000/message
router.get("/message", getAllMessages);
// http:localhost:5000/message/20110383
router.get("/message/:id", getMessagesById);
module.exports = router;

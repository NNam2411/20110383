const express = require("express");
// const path = require("path");
const app = express();
const PORT = 5000;

// // Đặt thư mục chứa các tệp view
// app.set("views", path.join(__dirname, "views"));
const {} = require("./controllers/friendcontroller");
const friendReq = require("./routes/friendsRouter");

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/", friendReq);
app.listen(PORT);

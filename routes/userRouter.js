// routes/userRouter.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { pageTitle: "Home Page" });
});

module.exports = router;

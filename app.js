const express = require("express");
const cors = require("cors");
const app = express();
const support_groupsController = require("./controllers/support_groupsController");

app.use(cors());
app.use(express.json());
app.use("/support_groups", support_groupsController);

app.get("/", (req, res) => {
  res.send("Welcome to Aisha's support_group app.");
});

app.get("*", (req, res) => {
  res
    .status(404)
    .json({ success: false, data: { error: "Sorry page could not be found" } });
});
module.exports = app;

const express = require("express");

const {
  getAllSupportGroups,
  getOneSupportGroup,
  createSupportGroup,
  deleteSupportGroup,
  updateSupportGroup,
} = require("../queries/support_groups.js");

const { checkGroupName, checkBoolean } = require("../validations/checkGroups");
const support_groups = express.Router();

support_groups.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneSupportGroup = await getOneSupportGroup(id);
  if (oneSupportGroup) {
    res.json(oneSupportGroup);
  } else {
    res.status(404).json({ error: "Page not found." });
  }
});

support_groups.get("/", async (req, res) => {
  const allSupportGroups = await getAllSupportGroups();
  if (allSupportGroups[0]) {
    res
      .status(200)
      .json({ success: true, data: { payload: allSupportGroups } });
  } else {
    res
      .status(500)
      .json({ success: false, data: { error: "Server Error - try again!" } });
  }
});

support_groups.post("/", checkGroupName, checkBoolean, async (req, res) => {
  try {
    const createdSupportGroup = await createSupportGroup(req.body);
    res.json(createdSupportGroup);
  } catch (error) {
    console.error("Error creating support group:", error);
    res.status(400).json({ error: "Sorry, an error has occured" });
  }
});

support_groups.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSupportGroup = await deleteSupportGroup(id);
    if (deletedSupportGroup) {
      res
        .status(200)
        .json({ success: true, payload: { data: deletedSupportGroup } });
    } else {
      res.status(404).json("Support group was not found");
    }
  } catch (err) {
    res.send(err);
  }
});

support_groups.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSupportGroup = await updateSupportGroup(id, req.body);
  if (updatedSupportGroup.id) {
    res.status(200).json(updatedSupportGroup);
  } else res.status(400).json("Support group with that id was not found");
});

module.exports = support_groups;

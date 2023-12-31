const db = require("../db/dbConfig");

const getAllSupportGroups = async () => {
  try {
    const allSupportGroups = await db.any("SELECT * FROM support_groups");
    return allSupportGroups;
  } catch (err) {
    return err;
  }
};
const getOneSupportGroup = async (id) => {
  try {
    const oneSupportGroup = await db.one(
      "SELECT * FROM support_groups WHERE id=$1",
      id
    );
    return oneSupportGroup;
  } catch (error) {
    return error;
  }
};

const createSupportGroup = async (support_group) => {
  try {
    const createdSupportGroup = await db.one(
      "INSERT INTO support_groups (group_name, meeting_time, location, description, email, is_favorite, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        support_group.group_name,
        support_group.meeting_time,
        support_group.location,
        support_group.description,
        support_group.email,
        support_group.is_favorite,
        support_group.image,
      ]
    );
    return createdSupportGroup;
  } catch (error) {
    return error;
  }
};

const deleteSupportGroup = async (id) => {
  try {
    const deletedSupportGroup = await db.one(
      "DELETE FROM support_groups WHERE id = $1 RETURNING *",
      id
    );
    return deletedSupportGroup;
  } catch (error) {
    return error;
  }
};

const updateSupportGroup = async (id, support_group) => {
  try {
    const {
      group_name,
      meeting_time,
      location,
      description,
      email,
      is_favorite,
      image,
    } = support_group;
    const updatedSupportGroup = await db.one(
      "UPDATE support_groups SET group_name=$1, meeting_time=$2, location=$3, description=$4, email=$5, is_favorite=$6, image=$7 WHERE id=$8 RETURNING *",
      [
        group_name,
        meeting_time,
        location,
        description,
        email,
        is_favorite,
        image,
        id,
      ]
    );
    return updatedSupportGroup;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllSupportGroups,
  getOneSupportGroup,
  createSupportGroup,
  deleteSupportGroup,
  updateSupportGroup,
};

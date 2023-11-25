const checkGroupName = (req, res, next) => {
  if (req.body.group_name) {
    console.log("group_name is functioning just fine");
    next();
  } else {
    res.status(400).json({ error: "Please provide group name!" });
  }
};

const checkBoolean = (req, res, next) => {
  if (req.body.is_favorite === true || req.body.is_favorite === false) {
    next();
  } else {
    res
      .status(400)
      .json({ error: "is_favorite must be either true or false as a value" });
  }
};

module.exports = {
  checkGroupName,
  checkBoolean,
};

const router = require("express").Router();

const {
  registerUser,
  loginUser,
  updateUser,
  getUsers
} = require("../controllers/users.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.patch("/:id", updateUser);

router.route("/").get(getUsers);

exports.usersRoute = router;


const Router = require("express").Router;
const router = Router();
const fileUpload = require("express-fileupload");

const GroupCtrl = require("../Controller/GroupCtrl");
const auth = require("../Middleware/auth");
const authAdmin = require("../Middleware/authAdmin");

router.use(fileUpload());

//single group
router.route("/:_id").get().put().post(GroupCtrl.AddGroup);

//all users
router.route("/").get();

//single user
router.route("/users/:_id").get(GroupCtrl.GetUserGroup);

module.exports = router;

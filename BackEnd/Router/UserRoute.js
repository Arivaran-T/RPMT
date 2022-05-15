const Router = require("express").Router;
const router = Router();
const fileUpload = require("express-fileupload");

const UserCtrl = require("../Controller/UserCtrl");
const auth = require("../Middleware/auth");
const authAdmin = require("../Middleware/authAdmin");

router.use(fileUpload());

//login
router.post("/auth", UserCtrl.Login);

//single user
router
  .route("/:_id")
  .get(UserCtrl.GetUser)
  .put(UserCtrl.UpdateUser)
  .delete(UserCtrl.DeleteUser);

//dp route
router
  .route("/dp/:_id")
  .put(UserCtrl.UpdateDp)
  .delete(UserCtrl.RemoveDp)
  .get(UserCtrl.GetDp);

//register
router.route("/").post(UserCtrl.Register).get(UserCtrl.GetUsers);

module.exports = router;

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

//forget password
router.route("/password/email").get(UserCtrl.CheckEmail);
router.route("/password/otp").get(UserCtrl.CheckOTP);

//single user password
router
  .route("/password/:_id")
  .patch(UserCtrl.ChangePassword)
  .put(UserCtrl.ResetPassword);

//dp route
router
  .route("/dp/:_id")
  .put(UserCtrl.UpdateDp)
  .delete(UserCtrl.RemoveDp)
  .get(UserCtrl.GetDp);

//register
router.route("/").post(UserCtrl.Register).get(UserCtrl.GetUsers);

//staff related grping
router.route("/staff/:_id/groups").get(UserCtrl.GetGroup).put();

//search any staff
router.route("/staff/:role").get(UserCtrl.GetStaff);

module.exports = router;

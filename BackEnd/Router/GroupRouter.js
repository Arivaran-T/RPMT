const Router = require("express").Router;
const router = Router();
const fileUpload = require("express-fileupload");

const GroupCtrl = require("../Controller/GroupCtrl");
const auth = require("../Middleware/auth");
const authAdmin = require("../Middleware/authAdmin");

router.use(fileUpload());

//admin
//get all grps
router.route("/").get(GroupCtrl.GetGroups);
//get single grp
router.route("/admin/:_id").get(GroupCtrl.GetAdminGroup);
//add & remove pannel
router
  .route("/pannel/:_id/:staff_id")
  .put(GroupCtrl.AddPannel)
  .delete(GroupCtrl.RemovePannel);

//cancel/accept request
router
  .route("/:_id/requests/:id")
  .put(GroupCtrl.UpdateRequest) //for staff
  .patch(); //for groups

//single group
router.route("/:_id").get(GroupCtrl.GetGroup).put().post(GroupCtrl.AddGroup);

//grp requests
router.route("/:_id/:role/:user_id").put(GroupCtrl.Request);

//single user
router.route("/users/:_id").get(GroupCtrl.GetUserGroup);

module.exports = router;

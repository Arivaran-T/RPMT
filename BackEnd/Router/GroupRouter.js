const Router = require("express").Router;
const router = Router();
const fileUpload = require("express-fileupload");

const GroupCtrl = require("../Controller/GroupCtrl");
const auth = require("../Middleware/auth");
const authAdmin = require("../Middleware/authAdmin");

router.use(fileUpload());

//search group
router.route("/searches/:value").get(GroupCtrl.SearchGroup);

//topic status
router.route("/topics/:_id").get(GroupCtrl.GetStatus).put().patch();

//admin
router.route("/").get(GroupCtrl.GetGroups); //get all grps
router.route("/admin/:_id").get(GroupCtrl.GetAdminGroup); //get single grp

//add & remove pannel
router
  .route("/pannel/:_id/:staff_id")
  .put(GroupCtrl.AddPannel)
  .delete(GroupCtrl.RemovePannel);

//cancel/accept request
router
  .route("/:user_id/requests/:grp_id")
  .put(GroupCtrl.UpdateRequest) //for staff
  .patch(GroupCtrl.HandleRequest) //for groups
  .delete(GroupCtrl.LeftGroup); //remove from group

//get group requests data
router.route("/requests/:_id").get(GroupCtrl.GetRequestedStd);

//single group
router.route("/:_id").get(GroupCtrl.GetGroup).put().post(GroupCtrl.AddGroup);

//grp requests
router.route("/:group_id/:role/:user_id").put(GroupCtrl.Request);

//single user
router.route("/users/:_id").get(GroupCtrl.GetUserGroup);

module.exports = router;

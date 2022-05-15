const Router = require("express").Router;
const router = Router();
const fileUpload = require("express-fileupload");

const SubmissionCtrl = require("../Controller/SubmissionCtrl");
const auth = require("../Middleware/auth");
const authAdmin = require("../Middleware/authAdmin");

router.use(fileUpload());

router.get("/", SubmissionCtrl.GetSubmissions);

router
  .route("/:_id")
  .get(SubmissionCtrl.GetSubmision)
  .post(SubmissionCtrl.AddSubmission)
  .put(SubmissionCtrl.EditSubmission)
  .delete(SubmissionCtrl.DeleteSubmission);

module.exports = router;

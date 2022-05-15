const Router = require("express").Router;
const router = Router();
const fileUpload = require("express-fileupload");

const DocumentCtrl = require("../Controller/DocumentCtrl");
const auth = require("../Middleware/auth");
const authAdmin = require("../Middleware/authAdmin");

router.use(fileUpload());

//single document
router
  .route("/:_id")
  .get(DocumentCtrl.GetDoc)
  .put(DocumentCtrl.EditDoc)
  .delete(DocumentCtrl.DeleteDoc)
  .post(DocumentCtrl.AddDocument);

//all document
router.route("/").get(DocumentCtrl.GetDocs);

module.exports = router;

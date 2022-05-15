const fs = require("fs");
const SubmissionModel = require("../Model/SubmissionModel");

exports.AddSubmission = (req, res) => {
  const { _id: creator_id } = req.params;
  const { title, due_date, visibility, description, max_size } = req.body;
  const date = Date.now();

  if (req.files) {
    //document
    let doc = req.files.doc;
    const docName = "doc" + date + fileToUpload.name;
    const document = "http://localhost:5000/Uploads/" + docName;

    //markingScheme
    let Scheme = req.files.dp;
    const SchemeName = "Scheme" + date + fileToUpload.name;
    const marking_scheme = "http://localhost:5000/Uploads/" + SchemeName;

    //oc upload
    doc.mv("Uploads/" + fileName, (error) => {
      if (error) {
        console.log(error);
        return res.status(404).json({ added: false });
      } else {
        //Scheme upload
        Scheme.mv("Uploads/" + fileName, (error) => {
          if (error) {
            console.log(error);
            return res.status(404).json({ added: false });
          } else {
            const newSubmission = new SubmissionModel({
              title,
              creator_id,
              document,
              description,
              marking_scheme,
              due_date,
              max_size,
              visibility,
            });

            //add
            newSubmission
              .save()
              .then((data) => {
                return res.status(200).json({ added: true });
              })
              .catch((er) => {
                return res.status(404).json({ added: false });
              });
          }
        });
      }
    });
  } else {
    return res.status(404).json({ added: false });
  }
};
exports.EditSubmission = (req, res) => {
  const { _id } = req.params;
};

// delete submission
exports.DeleteSubmission = (req, res) => {
  const { _id } = req.params;

  SubmissionModel.findByIdAndDelete({ _id })
    .then((data) => {
      const doc_path = data.document.split("http://localhost:5000/")[1];
      fs.unlink(doc_path, (er) => {
        if (er) {
          console.log(er);
        }
      });
      const scheme_Path = data.marking_scheme.split(
        "http://localhost:5000/"
      )[1];
      fs.unlink(scheme_Path, (er) => {
        if (er) {
          console.log(er);
        }
      });

      return res.status(200).json({ deleted: true });
    })
    .catch((er) => {
      return res.status(404).json({ deleted: false });
    });
};

//get single data
exports.GetSubmision = (req, res) => {
  const { _id } = req.params;
  SubmissionModel.findById({ _id })
    .then((data) => {
      return res.status(200).json({ data });
    })
    .catch((er) => {
      return res.status(404).json({ fetched: false });
    });
};

//get all submissions
exports.GetSubmissions = (req, res) => {
  const { page } = req.query;
  const skip = (page - 1) * 20;
  const limit = 20;

  SubmissionModel.find({}, { skip, limit })
    .then((data) => {
      if (data) {
        return res.status(200).json({ data });
      } else {
        return res.status(404).json({ fetched: false });
      }
    })
    .catch((er) => {
      return res.status(404).json({ fetched: false });
    });
};

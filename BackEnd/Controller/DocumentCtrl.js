const fs = require("fs");
const DocumentModel = require("../Model/DocumentModel");

//add doc
exports.AddDocument = (req, res) => {
  const { _id: submitted_by } = req.params;
  const { title, group_id, submmited_date, submmited_time, submission_id } =
    req.body;

  if (req.files) {
    let fileToUpload = req.files.doc;
    const fileName = submitted_by + submmited_date + fileToUpload.name;

    //add new
    fileToUpload.mv("Uploads/" + fileName, (error) => {
      if (error) {
        console.log(error);
        return res.status(404).json({ submitted: false });
      } else {
        const link = "http://localhost:5000/Uploads/" + fileName;

        const newDoc = new DocumentModel({
          title,
          submitted_by,
          group_id,
          submmited_date,
          submmited_time,
          submission_id,
          url: link,
        });

        newDoc
          .save()
          .then((data) => {
            return res.status(200).json({ submitted: true });
          })
          .catch((er) => {
            return res.status(404).json({ submitted: false });
          });
      }
    });
  } else {
    return res.status(404).json({ submitted: false });
  }
};

//edit doc
exports.EditDoc = (req, res) => {
  const { _id } = req.params;
  const { title, submmited_date, submmited_time } = req.body;

  if (req.files) {
    let fileToUpload = req.files.doc;
    const fileName = submmited_date + fileToUpload.name;

    DocumentModel.findById({ _id }, { url: 1 }).then((data) => {
      //remove old doc
      if (data.url) {
        const path = data.url.split("http://localhost:5000/")[1];
        fs.unlink(path, (er) => {
          if (er) {
            console.log(er);
          }
        });
      }

      //add new data
      fileToUpload.mv("Uploads/" + fileName, (error) => {
        if (error) {
          console.log(error);
          return res.status(404).json({ submitted: false });
        } else {
          const link = "http://localhost:5000/Uploads/" + fileName;

          DocumentModel.findByIdAndUpdate(
            { _id },
            { title, submmited_date, submmited_time, url: link }
          )
            .then((data) => {
              return res.status(200).json({ updated: true });
            })
            .catch((er) => {
              return res.status(404).json({ updated: false });
            });
        }
      });
    });
  } else {
    return res.status(404).json({ updated: false });
  }
};

//delete doc
exports.DeleteDoc = (req, res) => {
  const { _id } = req.params;
  DocumentModel.findByIdAndUpdate({ _id }, { url: "" })
    .then((data) => {
      if (data.url) {
        const path = data.url.split("http://localhost:5000/")[1];
        fs.unlink(path, (er) => {
          if (er) {
            console.log(er);
          }
        });
        return res.status(200).json({ deleted: true });
      } else {
        return res.status(200).json({ deleted: true });
      }
    })
    .catch((er) => {
      return res.status(404).json({ deleted: false });
    });
};

//get doc
exports.GetDoc = (req, res) => {
  const { _id } = req.params;

  DocumentModel.findById({ _id })
    .then((data) => {
      if (data._id) {
        return res.status(200).json({ data });
      } else {
        return res.status(404).json({ fetched: false });
      }
    })
    .catch((er) => {
      return res.status(404).json({ fetched: false });
    });
};

//get all doc by submission id
exports.GetDocs = (req, res) => {
  const { page, submission_id } = req.query;
  const skip = (page - 1) * 20;
  const limit = 20;

  DocumentModel.find({ submission_id }, { skip, limit })
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

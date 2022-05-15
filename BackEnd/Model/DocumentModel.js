const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    submitted_by: {
      type: String,
      required: true,
    },
    group_id: {
      type: String,
      required: true,
    },
    submmited_date: {
      type: String,
      required: true,
    },
    submmited_time: {
      type: String,
      required: true,
    },
    submission_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      default: "",
    },
    comments: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "submitted",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Documents", documentSchema);

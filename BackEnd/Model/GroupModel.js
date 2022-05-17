const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  research_Field: {
    type: String,
    required: true,
  },
  research_Topic: {
    name: { type: String, required: true },
    status: { type: Boolean, default: false },
  },
  leader: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  supervisor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  coSupervisor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
  requested: {
    supervisor: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    coSupervisor: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  },
  pannel: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
});

module.exports = mongoose.model("Groups", GroupSchema);
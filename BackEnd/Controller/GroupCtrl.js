const GroupModel = require("../Model/GroupModel");
const UserModel = require("../Model/UserModel");

//new group
exports.AddGroup = (req, res) => {
  const { research_Field, research_Topic, name } = req.body;

  const { _id } = req.params;

  const newGroup = new GroupModel({
    research_Field,
    research_Topic: { name: research_Topic },
    name,
    leader: _id,
  });
  newGroup.members.push(_id);

  newGroup
    .save()
    .then((data) => {
      UserModel.updateOne(
        { _id },
        { $set: { group_id: data._id } },
        { upsert: true }
      ).then((data) => {
        return res.status(200).json({ added: true });
      });
    })
    .catch((er) => {
      return res.status(404).json({ added: false });
    });
};

//update group
exports.UpdateGroup = (req, res) => {};

//get group by grp id
exports.GetGroup = (req, res) => {};

//get group by user id
exports.GetUserGroup = (req, res) => {
  const { _id } = req.params;

  UserModel.findById({ _id }, { group_id: 1 })
    .then((data) => {
      const grpID = data.group_id;
      GroupModel.findById({ _id: grpID })
        .populate({ path: "leader", select: "name" })
        .populate({ path: "supervisor", select: "name" })
        .populate({ path: "coSupervisor", select: "name" })
        .populate({ path: "members", select: "name" })
        .then((data) => {
          if (data) {
            return res.status(200).json({ data: data });
          } else {
            return res.status(404).json({ exist: false });
          }
        })
        .catch((er) => {
          console.log(er);
          return res.status(404).json({ exist: false });
        });
    })
    .catch((er) => {
      return res.status(404).json({ exist: false });
    });
};

//request supervisor

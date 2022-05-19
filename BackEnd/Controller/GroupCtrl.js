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
exports.GetGroup = (req, res) => {
  const { supervisor, cosupervisor } = req.query;
  const { _id } = req.params;
  const filter = supervisor ? "supervisor" : "cosupervisor";

  if (filter) {
    GroupModel.findById({ _id }, { filter: 1, requested: 1 })
      .then((data) => {
        if (data[filter]) {
          return res.status(200).json({ filter: true });
        } else if (data.requested && data.requested[filter]) {
          return res.status(200).json({ Requested: true });
        } else {
          return res.status(200).json({ isRequestable: true });
        }
      })
      .catch((er) => {});
  }
};

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
exports.Request = (req, res) => {
  //prrameters
  const { _id, role, user_id } = req.params;

  GroupModel.findByIdAndUpdate(
    { _id },
    { $set: { [`requested.${role}`]: user_id } },
    { upsert: true }
  )
    .then((data) => {
      //update user model
      UserModel.findByIdAndUpdate(
        { _id: user_id },
        { $push: { requests: { id: _id, role: role } } }
      )
        .then((data) => {
          return res.status(200).json({ requested: true });
        })
        .catch((er) => {
          return res.status(404).json({ requested: false });
        });
    })
    .catch((er) => {
      return res.status(404).json({ requested: false });
      console.log(er);
    });
};

//accept or reject request
exports.UpdateRequest = (req, res) => {
  const { _id, id } = req.params;
  const { status, role } = req.body;

  console.log("here");

  if (status === "accept") {
    UserModel.findByIdAndUpdate(
      { _id },
      { $pull: { requests: { id, role } }, $push: { groups: id } }
    )
      .then((data) => {
        GroupModel.findByIdAndUpdate(
          { _id: id },
          { $set: { [role]: _id, [`requested.${role}`]: null } }
        )
          .then((data) => {
            return res.status(200).json({ [status]: true });
          })
          .catch((er) => {
            return res.status(404).json({ [status]: false });
          });
      })
      .catch((er) => {
        return res.status(404).json({ [status]: false });
      });
  } else if (status === "reject") {
    UserModel.findByIdAndUpdate({ _id }, { $pull: { requests: id } })
      .then((data) => {
        GroupModel.findByIdAndUpdate(
          { _id: id },
          { $set: { [`requested.${role}`]: null } }
        )
          .then((data) => {
            return res.status(200).json({ [status]: true });
          })
          .catch((er) => {
            return res.status(404).json({ [status]: false });
          });
      })
      .catch((er) => {
        return res.status(404).json({ [status]: false });
      });
  }
};

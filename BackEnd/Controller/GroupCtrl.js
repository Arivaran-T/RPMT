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
    GroupModel.findById({ _id }, { [filter]: 1, requested: 1 })
      .then((data) => {
        if (data[filter]) {
          return res.status(200).json({ [filter]: true });
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
  const { group_id: _id, role, user_id } = req.params;

  if (role === "Student") {
    GroupModel.findByIdAndUpdate({ _id }, { $push: { requests: user_id } })
      .then((data) => {
        return res.status(200).json({ requested: true });
      })
      .catch((er) => {
        return res.status(404).json({ requested: false });
      });
  } else {
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
  }
};

//accept or reject request
exports.UpdateRequest = (req, res) => {
  const { user_id: _id, grp_id: id } = req.params;
  const { status, role } = req.body;

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
    UserModel.findByIdAndUpdate({ _id }, { $pull: { requests: { id: id } } })
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

//get all group
exports.GetGroups = (req, res) => {
  GroupModel.find({})
    .populate({ path: "leader", select: "name" })
    .populate({ path: "supervisor", select: "name" })
    .populate({ path: "coSupervisor", select: "name" })
    .populate({ path: "members", select: "name" })
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((er) => {
      console.log(er);
    });
};

//admin get single group
exports.GetAdminGroup = (req, res) => {
  const { _id } = req.params;

  GroupModel.findById({ _id })
    .populate({ path: "leader", select: "name" })
    .populate({ path: "supervisor", select: "name" })
    .populate({ path: "coSupervisor", select: "name" })
    .populate({ path: "members", select: "name" })
    .populate({ path: "pannel", select: "name" })
    .then((data) => {
      if (data) {
        return res.status(200).json(data);
      } else {
        return res.status(404).json({ fetched: false });
      }
    })
    .catch((er) => {
      return res.status(404).json({ fetched: false });
    });
};

//add pannel
exports.AddPannel = (req, res) => {
  const { _id, staff_id } = req.params;

  GroupModel.findByIdAndUpdate({ _id }, { $push: { pannel: staff_id } })
    .then((data) => {
      UserModel.findByIdAndUpdate(
        { _id: staff_id },
        { $push: { pannel: _id } },
        { upsert: true }
      )
        .then((data1) => {
          return res.status(200).json({ added: true });
        })
        .catch((er) => {
          return res.status(404).json({ added: false });
        });
    })
    .catch((er) => {
      return res.status(404).json({ added: false });
    });
};

//remove from pannel
exports.RemovePannel = (req, res) => {
  const { _id, staff_id } = req.params;

  GroupModel.findByIdAndUpdate({ _id }, { $pull: { pannel: staff_id } })
    .then((data) => {
      UserModel.findByIdAndUpdate({ _id: staff_id }, { $pull: { pannel: _id } })
        .then((data1) => {
          return res.status(200).json({ removed: true });
        })
        .catch((er) => {
          console.log(er);
          return res.status(404).json({ removed: false });
        });
    })
    .catch((er) => {
      console.log(er);
      return res.status(404).json({ removed: false });
    });
};

//remove from grp
exports.LeftGroup = (req, res) => {
  const { user_id, grp_id } = req.params;

  UserModel.findByIdAndUpdate({ _id: user_id }, { $pull: { groups: grp_id } })
    .then((data) => {
      //grp
      GroupModel.findByIdAndUpdate({ _id: grp_id })
        .then((data) => {
          if (data.supervisor == user_id) {
            GroupModel.findByIdAndUpdate({ _id: grp_id }, { supervisor: null })
              .then((data) => {
                return res.status(200).json({ left: true });
              })
              .catch((er) => {
                return res.status(404).json({ left: false });
              });
          } else if (data.coSupervisor == user_id) {
            GroupModel.findByIdAndUpdate(
              { _id: grp_id },
              { coSupervisor: null }
            )
              .then((data) => {
                return res.status(200).json({ left: true });
              })
              .catch((er) => {
                return res.status(404).json({ left: false });
              });
          }
        })
        .catch((er) => {
          return res.status(404).json({ left: false });
        });
    })
    .catch((er) => {
      return res.status(404).json({ left: false });
    });
};

//get topic status
exports.GetStatus = (req, res) => {
  const { _id } = req.params;

  GroupModel.findById({ _id }, { research_Topic: 1 })
    .then((data) => {
      return res.status(200).json({ status: data.research_Topic.status });
    })
    .catch((er) => {
      console.log(er);
      return res.status(404).json({ fetched: false });
    });
};

//search group
exports.SearchGroup = (req, res) => {
  const { value } = req.params;

  GroupModel.find({ name: { $regex: "^" + value } })
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((er) => {
      return res.status(404).json({ fetched: false });
    });
};

//get all requested students
exports.GetRequestedStd = (req, res) => {
  const { _id } = req.params;

  GroupModel.findById({ _id })
    .populate({
      path: "requests",
      select: "name mobile_number email gender dp",
    })
    .then((data) => {
      return res.status(200).json(data.requests);
    })
    .catch((er) => {
      return res.status(404).json({ fetched: false });
    });
};

//handle student request
exports.HandleRequest = (req, res) => {
  const { user_id, grp_id } = req.params;
  const { action } = req.body;

  if (action === "accept") {
    GroupModel.findByIdAndUpdate(
      { _id: grp_id },
      { $pull: { requests: user_id }, $push: { members: user_id } }
    )
      .then((data) => {
        //handle user
        UserModel.findByIdAndUpdate({ _id: user_id }, { group_id: grp_id })
          .then((data) => {
            return res.status(200).json({ updated: true });
          })
          .catch((er) => {
            return res.status(404).json({ updated: false });
          });
      })
      .catch((er) => {
        return res.status(404).json({ updated: false });
      });
  } else if (action === "reject") {
    GroupModel.findByIdAndUpdate(
      { _id: grp_id },
      { $pull: { requests: user_id } }
    )
      .then((data) => {
        return res.status(200).json({ updated: true });
      })
      .catch((er) => {
        return res.status(404).json({ updated: false });
      });
  }
};

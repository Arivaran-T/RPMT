exports.authAdmin = (req, res, next) => {
  if (req.role !== "admin") {
    res.status(400).json({ auth: "fail" });
    return;
  }
  next();
};

exports.authSupervisor = (req, res, next) => {
  if (req.role !== "supervisor" && req.role !== "co-supervisor") {
    res.status(400).json({ auth: "fail" });
    return;
  }
  next();
};


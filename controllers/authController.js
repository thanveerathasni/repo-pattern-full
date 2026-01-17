const service = require("../services/authService");

exports.signup = (req, res) => {
  const user = service.signup(req.body);
  if (!user) return res.status(400).send("User already exists");
  res.json(user);
};

exports.login = (req, res) => {
  const user = service.login(req.body);
  if (!user) return res.status(400).send("Invalid login");
  res.json(user);
};

const service = require("../services/authService");

exports.signup = async (req, res) => {
  try {
    const user = await service.signup(req.body);
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await service.login(req.body);
    res.json({ token });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

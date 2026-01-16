const repo = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (data) => {
  const exists = repo.findByEmail(data.email);
  if (exists) throw "User already exists";

  const hashed = await bcrypt.hash(data.password, 10);
  return repo.createUser({
    id: Date.now().toString(),
    email: data.email,
    password: hashed
  });
};

const login = async (data) => {
  const user = repo.findByEmail(data.email);
  if (!user) throw "User not found";

  const ok = await bcrypt.compare(data.password, user.password);
  if (!ok) throw "Wrong password";

  return jwt.sign({ id: user.id }, "secret");
};

module.exports = { signup, login };

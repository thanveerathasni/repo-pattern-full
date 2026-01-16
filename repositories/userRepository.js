const users = require("../models/userModel");

const createUser = (user) => {
  users.push(user);
  return user;
};

const findByEmail = (email) => {
  return users.find(u => u.email === email);
};

module.exports = { createUser, findByEmail };

const users = require("../models/userModel");

exports.createUser = (user) => {
  users.push(user);
  return user;
};

exports.findByEmail = (email) => {
  return users.find(u => u.email === email);
};

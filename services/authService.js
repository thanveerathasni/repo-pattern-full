const repo = require("../repositories/userRepository");

exports.signup = (data) => {
  const exists = repo.findByEmail(data.email);
  if (exists) return null;

  const user = {
    id: Date.now().toString(),
    email: data.email,
    password: data.password
  };

  return repo.createUser(user);
};

exports.login = (data) => {
  const user = repo.findByEmail(data.email);
  if (!user) return null;
  if (user.password !== data.password) return null;
  return user;
};

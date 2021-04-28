const bcrypt = require('bcrypt');

module.exports = (reqPassword, dbPassword) => {
  return bcrypt.compare(reqPassword, dbPassword);
};

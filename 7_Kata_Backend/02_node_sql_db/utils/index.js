const createKnexModel = require('./createKnexModel');
const hashPassword = require('./hashPassword');
const comparePasswords = require('./comparePasswords.js');

module.exports = {
  createKnexModel,
  hashPassword,
  comparePasswords,
} 
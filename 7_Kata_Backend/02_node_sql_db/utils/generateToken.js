const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

module.exports = ({ user_id, first_name, last_name, email, role }) => {
  return jwt.sign({
    // exp: Math.floor(Date.now() / 1000) + (60 * 60), // Expira en una hora
    data: { user_id, first_name, last_name, email, role },
  }, JWT_SECRET, { expiresIn: '48h' });
};

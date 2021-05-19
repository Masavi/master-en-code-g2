module.exports = {
  create: (req, res) => {
    res.status(201).json({ message: 'user created' });
  },
  findAll: (req, res) => {
    res.status(200).json({ message: 'users list obtained', users: [] });
  },
}
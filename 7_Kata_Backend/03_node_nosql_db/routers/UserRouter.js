const express = require('express');

const router = express.Router();

router.post('/users', (req, res) => {
  res.status(201).json({ message: 'user created' });
});

router.get('/users', (req, res) => {
  res.status(200).json({ message: 'users list obtained', users: [] });
});

module.exports = router;

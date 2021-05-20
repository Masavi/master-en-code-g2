const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Create
router.post('/users', UserController.create);

// Read (All)
router.get('/users', UserController.findAll);

// Read (One)
router.get('/users/:idUser', UserController.findOne);

// Upddate (One)

// Delete (Logical, One)

// Delete (Physical, One)

module.exports = router;

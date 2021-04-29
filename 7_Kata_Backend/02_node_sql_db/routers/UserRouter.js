const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middlewares');
const { UserController } = require('../controllers');

// Create
router.post('/users', UserController.create);

// Read All
router.get('/users', UserController.findAll);

// Read One
router.get('/users/:idUser', verifyToken, UserController.findOneById);

// Update One
router.patch('/users/:idUser', verifyToken, UserController.updateOneById);

// Delete One (borrado lógico)
router.delete('/users/:idUser', verifyToken, UserController.deleteOneById);

// Destroy One (borrado físico)

// Login
router.post('/login', UserController.login);

module.exports = router;
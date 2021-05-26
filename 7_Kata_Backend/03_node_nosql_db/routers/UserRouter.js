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
router.patch('/users/:idUser', UserController.updateOne);

// Delete (Logical, One)
router.delete('/users/:idUser', UserController.deleteOne);

// Delete (Physical, One)
router.delete('/users/:idUser/destroy', UserController.destroyOne);

/**
 * User Posts
 */

// Create
router.post('/users/:idUser/posts', UserController.createPost);

// Read (One)

// Read (All)

// Update

// Delete

module.exports = router;

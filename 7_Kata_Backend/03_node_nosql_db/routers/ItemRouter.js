const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/ItemController');

// Create
router.post('/items', ItemController.create);

// Read (All)
router.get('/items', ItemController.findAll);

// Read (One)
router.get('/items/:idItem', ItemController.findOne);

// Upddate (One)
router.patch('/items/:idItem', ItemController.updateOne);

// Delete (Logical, One)
router.delete('/items/:idItem', ItemController.deleteOne);

// Delete (Physical, One)
router.delete('/items/:idItem/destroy', ItemController.destroyOne);

module.exports = router;

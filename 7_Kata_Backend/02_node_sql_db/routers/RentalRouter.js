const express = require('express');
const router = express.Router();

const { RentalController } = require('../controllers');

// Create
router.post('/rentals', RentalController.create);

// Read All
router.get('/rentals', RentalController.findAll);

// Read One

// Update One

// Delete One (borrado lógico)

// Destroy One (borrado físico)

module.exports = router;
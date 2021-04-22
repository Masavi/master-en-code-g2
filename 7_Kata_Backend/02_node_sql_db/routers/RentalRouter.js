const express = require('express');
const router = express.Router();

const { RentalController } = require('../controllers');

// Create
router.post('/rentals', RentalController.create);

// Read All
router.get('/rentals', RentalController.findAll);

// Read One
router.get('/rentals/:idRental', RentalController.findOneById);

// Update One
router.patch('/rentals/:idRental', RentalController.updateOneById);

// Delete One (borrado lógico)
router.delete('/rentals/:idRental', RentalController.deleteOneById);

// Destroy One (borrado físico)

module.exports = router;
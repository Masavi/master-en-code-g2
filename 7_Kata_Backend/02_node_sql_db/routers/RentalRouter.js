const express = require('express');
const router = express.Router();

const { RentalController } = require('../controllers');

router.post('/rental', RentalController.create);
router.get('/rental', (req, res) => res.status(200).json({ rentals: [] }));

module.exports = router;
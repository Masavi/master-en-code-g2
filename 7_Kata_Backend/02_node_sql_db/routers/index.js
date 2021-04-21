const express = require('express');
const router = express.Router();

router.get('/rental', (req, res) => res.status(200).json({ rentals: [] }));

module.exports = router;
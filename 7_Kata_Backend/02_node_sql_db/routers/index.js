const express = require('express');
const router = express.Router();

router.use(require('./RentalRouter'));
router.use(require('./UserRouter'));

module.exports = router;
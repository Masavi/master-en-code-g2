const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/TicketController');

// Create
router.post('/tickets', TicketController.create);

// Read (All)
router.get('/tickets', TicketController.findAll);

// Read (One)
router.get('/tickets/:idTicket', TicketController.findOne);

// Upddate (One)
router.patch('/tickets/:idTicket', TicketController.updateOne);

// Delete (Logical, One)
router.delete('/tickets/:idTicket', TicketController.deleteOne);

// Delete (Physical, One)
router.delete('/tickets/:idTicket/destroy', TicketController.destroyOne);

// Calcular subtotal, iva y total
router.put('/tickets/:idTicket/checkout', TicketController.checkout);

module.exports = router;

const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  total: {
    type: Number,
    default: 0,
  },
  subtotal: {
    type: Number,
    default: 0,
  },
  tax: {
    type: Number,
    default: 0,
  },
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  is_active: {
    type: Boolean,
    default: true,
  },
}, {
  collection: 'tickets',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = { Ticket };

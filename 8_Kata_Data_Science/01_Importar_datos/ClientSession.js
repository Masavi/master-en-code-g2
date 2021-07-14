const mongoose = require('mongoose');

const clientSessionSchema = new mongoose.Schema({
  device_mac: {
    type: String,
    required: true,
  },
  branch_office: {
    type: Number,
    required: true,
  },
  month_tz: {
    type: Number,
    required: true,
  },
  day_tz: {
    type: Number,
    required: true,
  },
  day_of_week_tz: {
    type: String,
    required: true,
  },
  hour_tz: {
    type: Number,
    required: true,
  },
  date_tz: {
    type: Date,
  },
  is_visitor: {
    type: Boolean,
    required: true,
  },
  session_duration: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const ClientSession = mongoose.model('Session', clientSessionSchema);

module.exports = ClientSession;

const Ticket = require('../models/Ticket');

module.exports = {
  create: async (req, res) => {
    /*
      Opción 1: Generar una instancia con "new"
    */
    // const newTicket = new Ticket(req.body);
    // const response = await newTicket.save();

    try {
      console.log(req.body)
      const newTicket = await Ticket.create(req.body);
      res.status(201).json({ message: 'ticket created', ticket: newTicket }); 
    } catch (error) {
      res.status(400).json({ message: 'error creating ticket', error });
    }
  },
  findAll: async (req, res) => {
    try {
      const tickets = await Ticket.find({ is_active: true });
      if (tickets.length === 0) return res.status(404).json({ message: 'tickets not found' });
      res.status(200).json({ message: 'tickets list obtained', tickets });
    } catch (error) {
      res.status(400).json({ message: 'error fetching tickets', error });
    }
  },
  findOne: async (req, res) => {
    // const { idTicket } = req.params;
    const id = req.params.idTicket;
    try {
      const ticket = await Ticket.findOne({ _id: id, is_active: true });
      if (!ticket) return res.status(404).json({ message: 'ticket not found' });
      return res.status(200).json({ message: 'ticket found', ticket }) 
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  updateOne: async (req, res) => {
    const id = req.params.idTicket;
    try {
      const updatedTicket = await Ticket.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).json({ message: 'ticket updated', ticket: updatedTicket });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  deleteOne: async (req, res) => {
    const id = req.params.idTicket;
    try {
      await Ticket.findByIdAndUpdate(id, { is_active: false }, { new: true });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  destroyOne: async (req, res) => {
    const id = req.params.idTicket;
    try {
      await Ticket.findByIdAndRemove(id);
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}
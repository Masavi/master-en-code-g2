const { Item } = require('../models/Item');

module.exports = {
  create: async (req, res) => {
    try {
      console.log(req.body)
      const newItem = await Item.create(req.body);
      res.status(201).json({ message: 'item created', item: newItem }); 
    } catch (error) {
      res.status(400).json({ message: 'error creating item', error });
    }
  },
  findAll: async (req, res) => {
    try {
      const items = await Item.find({ is_active: true });
      if (items.length === 0) return res.status(404).json({ message: 'items not found' });
      res.status(200).json({ message: 'items list obtained', items });
    } catch (error) {
      res.status(400).json({ message: 'error fetching items', error });
    }
  },
  findOne: async (req, res) => {
    // const { idItem } = req.params;
    const id = req.params.idItem;
    try {
      const item = await Item.findOne({ _id: id, is_active: true });
      if (!item) return res.status(404).json({ message: 'item not found' });
      return res.status(200).json({ message: 'item found', item }) 
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  updateOne: async (req, res) => {
    const id = req.params.idItem;
    try {
      const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).json({ message: 'item updated', item: updatedItem });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  deleteOne: async (req, res) => {
    const id = req.params.idItem;
    try {
      await Item.findByIdAndUpdate(id, { is_active: false }, { new: true });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  destroyOne: async (req, res) => {
    const id = req.params.idItem;
    try {
      await Item.findByIdAndRemove(id);
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}
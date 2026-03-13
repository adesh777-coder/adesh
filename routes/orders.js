const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Place a new order
router.post('/', async (req, res) => {
  const { customerName, address, items, total } = req.body;
  if (!customerName || !address || !Array.isArray(items) || items.length === 0 || total == null) {
    return res.status(400).json({ error: 'customerName, address, items (non-empty array), and total are required' });
  }
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get order status by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

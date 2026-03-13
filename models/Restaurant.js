const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  rating: { type: Number, default: 0 },
  priceLevel: { type: String, enum: ['$', '$$', '$$$'], default: '$' },
  menu: [
    {
      item: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model('Restaurant', restaurantSchema);

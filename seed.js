require('dotenv').config();
const connectDB = require('./db');
const Restaurant = require('./models/Restaurant');

const seedData = [
  {
    name: 'Italian Bistro',
    cuisine: 'Italian',
    rating: 4.3,
    priceLevel: '$$',
    menu: [
      { item: 'Margherita Pizza', price: 12 },
      { item: 'Pasta Carbonara', price: 15 },
      { item: 'Tiramisu', price: 8 },
    ],
  },
  {
    name: 'Burger Palace',
    cuisine: 'American',
    rating: 4.5,
    priceLevel: '$',
    menu: [
      { item: 'Classic Burger', price: 10 },
      { item: 'Cheese Fries', price: 6 },
      { item: 'Milkshake', price: 5 },
    ],
  },
];

async function seed() {
  await connectDB();
  await Restaurant.deleteMany({});
  await Restaurant.insertMany(seedData);
  console.log('Database seeded with sample restaurants');
  process.exit(0);
}

seed();

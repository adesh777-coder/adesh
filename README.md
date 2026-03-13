# adesh

FoodHub — a food delivery web application backed by MongoDB.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file (see `.env.example`):
   ```bash
   cp .env.example .env
   ```
   Update `MONGODB_URI` with your MongoDB connection string.
3. Seed the database with sample restaurants:
   ```bash
   npm run seed
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open `http://localhost:3000` in your browser.

## API Endpoints

| Method | Path                  | Description             |
|--------|-----------------------|-------------------------|
| GET    | /api/restaurants      | List all restaurants    |
| GET    | /api/restaurants/:id  | Get a restaurant        |
| POST   | /api/restaurants      | Create a restaurant     |
| POST   | /api/orders           | Place an order          |
| GET    | /api/orders/:id       | Get order status        |
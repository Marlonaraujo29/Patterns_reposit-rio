const Customer = require('./Customer');
const Restaurant = require('./Restaurant');

// Example orders
const order1 = { price: 15, foodItem: 'Pizza' };
const order2 = { price: 10, foodItem: 'Burger' };

// Example inventories
const inventory1 = { count: 50, foodItem: 'Soda' };
const inventory2 = { count: 30, foodItem: 'Fries' };

// Create instances
new Customer(order1);
new Customer(order2);

new Restaurant(inventory1);
new Restaurant(inventory2);
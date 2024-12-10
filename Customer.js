const FoodLoggerSingleton = require('./FoodLogger');
const foodLogger = new FoodLoggerSingleton().getFoodLoggerInstance();

class Customer {
  constructor(order) {
    this.price = order.price;
    this.food = order.foodItem;
    foodLogger.log(order);
  }
}

module.exports = Customer;
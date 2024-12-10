const FoodLoggerSingleton = require('./FoodLogger');
const foodLogger = new FoodLoggerSingleton().getFoodLoggerInstance();

class Restaurant {
  constructor(inventory) {
    this.quantity = inventory.count;
    this.food = inventory.foodItem;
    foodLogger.log(inventory);
  }
}

module.exports = Restaurant;
class FoodLogger {
  constructor() {
    this.foodLog = [];
  }

  log(order) {
    this.foodLog.push(order.foodItem);
   
    console.log(`Logged: ${order.foodItem}`);
  }
}

class FoodLoggerSingleton {
  constructor() {
    if (!FoodLoggerSingleton.instance) {
      FoodLoggerSingleton.instance = new FoodLogger();
    }
  }

  getFoodLoggerInstance() {
    return FoodLoggerSingleton.instance;
  }
}

module.exports = FoodLoggerSingleton;
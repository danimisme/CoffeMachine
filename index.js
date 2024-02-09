import coffeeStock from "./state.js";

// const { coffeeStock, isCoffeeMachineReady } = require("./state");

const maceCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log(`kopi ${type} berhasil dibuat!`);
  } else {
    console.log(`Biji kopi ${type} tidak cukup!`);
  }
};

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(`${type}: ${stock[type]}`);
  }
};

// maceCoffee("robusta", 80);
// maceCoffee("arabica", 150);

console.log(displayStock(coffeeStock));

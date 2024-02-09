const coffeeStock = require("./state");

const maceCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log(`kopi ${type} berhasil dibuat!`);
  } else {
    console.log(`Biji kopi ${type} tidak cukup!`);
  }
};

maceCoffee("robusta", 80);
maceCoffee("arabica", 150);

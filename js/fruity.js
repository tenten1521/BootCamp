
function runActivity(){
    const fruit = [];
const price = [];

while (true) {
  let fruit_name = prompt("Enter the fruit name (or 'no' to stop):");

  if (fruit_name.toLowerCase() === "no") {
    break;
  }

  let fruit_price = Number(prompt("Enter the fruit price:"));

  if (fruit_price < 0) {
    console.log("Invalid price. Please enter a positive number.");
    continue;
  }

  fruit.push(fruit_name);
  price.push(fruit_price);
}

console.log("Fruit inventory:");

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i] + " | PHP " + price[i]);
}

while (true) {
  let purchase_fruit = prompt("Enter the fruit you want to buy (or 'no' to stop):");

  if (purchase_fruit.toLowerCase() === "no") {
    break;
  }

  let quantity = Number(prompt("Enter the quantity:"));

  if (quantity < 0) {
    console.log("Invalid quantity. Please enter a positive number.");
    continue;
  }

  let index = fruit.indexOf(purchase_fruit);

  if (index === -1) {
    console.log("Invalid fruit name. Please enter a fruit from the inventory.");
    continue;
  }

  let total_price = price[index] * quantity;

  console.log(`Total price for ${quantity} ${fruit[index]}: PHP ${total_price}`);
}
}
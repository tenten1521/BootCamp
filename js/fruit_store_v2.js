function runActivity(){

const storeName = "123";


const inventory = [];


function addItem() {
  const itemName = prompt("Enter the name of the item you would like to sell:");
  const itemPrice = parseFloat(prompt("Enter the selling price of the item:"));

  if (itemPrice <= 0 || isNaN(itemPrice)) {
    console.error("Invalid price. Please enter a positive number for the item price.");
    return;
  }

  inventory.push({ name: itemName, price: itemPrice, stock: 0 });
  console.log(`${itemName} added as an item for sale. Each ${itemName} sells for ${itemPrice}. Stock set to 0.`);
}


function restock() {
  const itemName = prompt("Enter the name of the item to restock:");
  const stockToAdd = parseInt(prompt("Enter the amount of stock to add:"));

  if (stockToAdd <= 0 || isNaN(stockToAdd)) {
    console.error("Invalid amount. Please enter a positive integer for the stock to add.");
    return;
  }

  const item = inventory.find((item) => item.name === itemName);

  if (!item) {
    console.error("Invalid item name. Please add the item before restocking.");
    return;
  }

  item.stock += stockToAdd;
  console.log(`${stockToAdd} stock has been added to ${itemName}. New stock: ${item.stock}`);
}

// Function to check the price of an item
function checkPrice() {
  const itemName = prompt("Enter the name of the item to check the price:");
  const itemAmount = parseInt(prompt("Enter the amount of the item:"));

  const item = inventory.find((item) => item.name === itemName);

  if (!item) {
    console.error("Invalid item name. Please add the item before checking the price.");
    return;
  }

  const totalPrice = item.price * itemAmount;
  console.log(`${itemAmount} of ${itemName} is worth ${totalPrice}.`);
}

// Function to sell an item
function sell() {
  const itemName = prompt("Enter the name of the item to sell:");
  const amountToBuy = parseInt(prompt("Enter the amount to buy:"));

  const item = inventory.find((item) => item.name === itemName);

  if (!item) {
    console.error("Invalid item name. Please enter a valid item to sell.");
    return;
  }

  if (amountToBuy <= 0 || isNaN(amountToBuy)) {
    console.error("Invalid amount. Please enter a positive integer for the amount to buy.");
    return;
  }

  if (amountToBuy > item.stock) {
    console.error("Insufficient stock. Please enter a valid amount to buy.");
    return;
  }

  const totalPrice = item.price * amountToBuy;
  item.stock -= amountToBuy;
  console.log(`Sold ${amountToBuy} ${itemName}(s) for a total of ${totalPrice}. New stock: ${item.stock}`);
}

// Main program loop
let i = 0;
while (i === 0) {
  const choice = parseInt(
    prompt(
      `(1) Add new item (2) Restock (3) Check price (4) Sell (5) Stop\nEnter the number corresponding to your choice:`
    )
  );

  switch (choice) {
    case 1:
      addItem();
      break;
    case 2:
      restock();
      break;
    case 3:
      checkPrice();
      break;
    case 4:
      sell();
      break;
    case 5:
      i = 1;
      break;
    default:
      console.error("Invalid choice. Please");
  }
}
}
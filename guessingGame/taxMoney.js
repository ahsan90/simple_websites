/**
 * Calculating tax program
 * Author: Md Ahsanul Hoque
 * Date: January 2, 2019
 */

//This function calculates tax and return total amount after calculation
function calculateTax(amount) {
  var total;
  if (amount <= 5) {
    total = amount + amount * 0.2;
  }
  if (amount > 5 && amount <= 100) {
    total = amount + amount * 0.15;
  }
  if (amount > 100) {
    total = amount + amount * 0.05;
  }
  if (isNaN(amount)) {
    return "Invalid";
  }
  return total;
}

var amount = prompt("Enter the dolar amount: ");

//This method/function formate currency with comma
function formatMoney(amount, flag) {
  let tempAmount = parseFloat(amount);
  if (flag) {
    return "$" + tempAmount.toLocaleString();
  } else {
    return "$" + tempAmount;
  }
}

let totalAmount = calculateTax(parseFloat(amount));
alert(formatMoney(totalAmount, true));

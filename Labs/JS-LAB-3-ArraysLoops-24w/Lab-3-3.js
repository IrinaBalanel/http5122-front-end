//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var userInput;
var totalFree = 35;
var cart = [];
var total = 0;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
//GET ITEM COST FROM USER
while (total < 35) {
	var userInput = prompt("Please, enter the price for the item:");
	console.log(userInput);
	
	//CONVERT USER INPUT TO A NUMBER
	var userInt = parseInt(userInput);
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	total = userInt + total;
	
	//PUSH ITEM COST TO CART ARRAY
	cart.push (userInt);
}

//SEND POPUP MESSAGE TO USER
alert ("Your shipping for this order will be free! Total: " + total);

//SEND OUTPUT TO CONSOLE
console.log("Item prices: " + cart.join(" | "));
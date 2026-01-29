//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var prices = [];
var threshold = 35
var total =0
var whileTest = false

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.

while (whileTest === false){
	
	

	//GET ITEM COST FROM USER
	itemCost = prompt("insert the price for your item");
	if (total < threshold) {
	
	//CONVERT USER INPUT TO A NUMBER
	var cost = parseInt(itemCost);
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	total += cost;
	
	//PUSH ITEM COST TO CART ARRAY
	prices.push(cost);
}
}
//SEND POPUP MESSAGE TO USER
alert("Your shipping is on us. It's free!!");


//SEND OUTPUT TO CONSOLE
console.log("Your shipping is on us. It's free!!")
console.log("Prices: " + prices.join(" | "))

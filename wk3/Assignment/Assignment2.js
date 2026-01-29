//Assignment2 Arrays&Loop - Kantima Pinthong

//variables

var moviesArrays = ["lord of the ring", "star wars", "Shawshank", "District9", "Interstallar", "The dark Knight", "Toy story2"];
var whileTest = true;
var num1 = 1;

while (whileTest === true) {
    var userInput = prompt("put number?");
    var numMovie = parseInt(userInput);
    pickNum = numMovie - num1
    if (numMovie > 0 | numMovie < 8){
        
    whileTest = false;
    
    };   

};
alert("Number "+ numMovie + " on the list is " + moviesArrays[pickNum]);

for (var i = 0; i < 8 ; i++ ){

    num2 = i + num1
    console.log("Movie " + num2 + " : " + moviesArrays[i])

}
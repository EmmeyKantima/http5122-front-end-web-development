//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.

function averageOfNumbers(num1, num2, num3, num4, num5){
    var sum = num1+num2+num3+num4+num5;
    return ((sum/5).toFixed(1));
    
}
var avg= averageOfNumbers(5, 10, 15, 20, 25);


console.log(avg);

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var http5125 = 85;
var http5114 = 80;
var http5121 = 69;
var http5110 = 90;
var http5126 = 90;



var avgGrade= averageOfNumbers(http5125,http5114,http5121,http5110,http5126)

if(avgGrade >= 70){
    alert("success")
}
else{
    alert("Review Required")
} 


//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION





//This function will return true or false after checking current temperature
//It expect to receive current temperature 
function checkTemp(currentTemp){
    if(currentTemp>30 || currentTemp<=-10){
    var temp = false;
    }
   
    else
    {
        var temp= true;
    }
    return temp;
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS


var userInput = prompt("Please enter current temperature");

var value= checkTemp(userInput);

//It will return the result of the fuction
if (value=== false)
{
    alert("Yikes ! no weather for dog walking ! ")

}
else
{
    alert("You're good, have a nice walk!");
}

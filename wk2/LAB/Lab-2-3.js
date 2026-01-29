//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========



//==== LOGIC =============

var userChoice = confirm("Would you like to join mailing list");

if(userChoice === false){
    alert("Thank you, we will not bother you again")
}

else {

    var userSign = prompt ("Please enter your email" , "me@exemple.com")
    console.log(userSign)
    
    if(userSign === null || userSign === "" || userSign === "me@exemple.com"){
            alert("Thank you, but your email was not valid");
        }else {
            alert("Thank you, our next newletter will be sent to " + userSign)};
    

        }
    

 

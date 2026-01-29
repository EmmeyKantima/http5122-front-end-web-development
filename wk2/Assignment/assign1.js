//====Assignment1 Group Login=====

//===Variables===

var userInput = 5;

//pop up for user to put number of group
var userLogIn = prompt ("Which team are you on?");
var stringToNum = parseInt(userLogIn);


//if number of group correct
if(userLogIn == userInput){
//pop up for user to put first name
var userFirstName = prompt ("What is your first name?");

//answer does not match
    if(userFirstName === "" || userFirstName === null){
        alert("Access Denied");

    } else {
//answer match in team mamber
        switch(userFirstName.toLowerCase()) {
            case "magha" :
                alert("Welcome Megha Ainikunnath Kamalan!");
                break;
            case "spencer" :
                alert("Welcome Spencer Dowie!");
                break;
            case "jursida" :
                alert("Welcome Jursida Hima!");
                break;
            case "taranpreet" :
                alert("Welcome Taranpreet Kaur!");
                break;
//answer not match in team member
            default :
                alert("Access Denied");
            }
    }


//if number of group incorrect
} else {
    alert("Access Denied");

}
//LAB 3 - ARRAYS & LOOPS - PART 2
var num;

//TEAM MEMBER ARRAY
var ourTeam = ["Kantima", "Megha", "Taran", "Jursida", "Spencer"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam);


//REMOVE LAST MEMBER
var remove = ourTeam.pop();
console.log(ourTeam);

//ADD SEAN TO FRONT OF ARRAY
var add = ourTeam.unshift("Sean");
console.log(ourTeam);

//REARRANGE THE ARRAY ALPHABETICALLY
var ourTeamAlpha = ourTeam.sort();
console.log(ourTeamAlpha);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
var length = ourTeamAlpha.length;
console.log("We have " + length + " people in our group");

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

for (var i = 0; i < length; i++)
    {
        num = i+1;
        console.log(ourTeamAlpha[i] + "is # " + num);

    }

/*console.log(ourTeamAlpha[0] + "is # 1");
console.log(ourTeamAlpha[1] + "is # 2");
console.log(ourTeamAlpha[2] + "is # 3");
console.log(ourTeamAlpha[3] + "is # 4");
console.log(ourTeamAlpha[4] + "is # 5");*/
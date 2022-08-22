//Use Alert
confirm("¿Do You Wanna Play?")

let userChooise = parseInt(prompt("Choose Between: \n 1 = Rock, 2 = Paper, 3 = Scissors")); 
alert("Your chooice: " + userChooise); 
console.log("Your chooice: " + userChooise); 

//Machine alert

let machineChooise = parseInt(Math.random()*(3-1)+ 1);
console.log("Machine chooice: " + machineChooise); 
alert("Machine chooice: " + machineChooise);

//Conditional for the game

let rock = 1;
let paper = 2; 
let scissors  = 3;
let winner = ""; 

if (userChooise == 1 && machineChooise == 3) {
    winner = "User" 
} else if (userChooise == 3 && machineChooise == 2) {
     winner = "User"
} else if(userChooise == 2 && machineChooise == 3) {
     winner = "User"
}

//Machine Winner

else if (machineChooise == 1 && userChooise == 3) {
    winner = "Machine" 
} else if (machineChooise == 3 && userChooise == 2) {
     winner = "Machine"
} else if(machineChooise == 2 && userChooise== 3) {
   winner = "Machine"
}

else {winner = "It's a tie"}


alert("las elecciones fueron: " + machineChooise)

// Global Variables
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

let playerWins;
let computerWins;

//Evernt listeners

rockButton.addEventListener("click", () => { alert("Rock");});
paperButton.addEventListener("click", () => { alert("Paper");});
scissorsButton.addEventListener("click", () => { alert("Scissors")});

// Randomly select Rock, Scissor, Stone 
function computerPlay() {
	let randomNumber = Math.random();
	if (randomNumber <= 1/3) {
		return "rock"; 
	} else if (randomNumber > 1/3 && randomNumber<2/3) {
		return "scissors";
	} else {
		return "paper";	
	} 
}

//Validate player input string is rock, paper or stone
function checkStringContents(string) {
	let lowerCase = string.toLowerCase();
	let i=0;
	if (lowerCase == "rock" || lowerCase =="scissors" || lowerCase=="paper") {
		return(lowerCase);
	} else{
		do {
			alert("You did not enter rock, scissor, or paper. Please enter again.");
			lowerCase = prompt("Do you choose rock, paper or scissors?").toLowerCase();
			if (lowerCase != "rock" || lowerCase !="scissors" || lowerCase!="paper") {
			i=1;
			return(lowerCase);
			} else {i=0;}
		} while (i !=1);
	} 		
}

// Play a round
function playRound (playerSelection, computerSelection) {

	player = checkStringContents(playerSelection);
	if ( (player == "rock" && computerSelection == "scissors") ||
		 (player == "scissors" && computerSelection == "paper") ||
		 (player == "paper" && computerSelection == "rock") ) {
		++playerWins;
		return "You win! " + player + " beats " + computerSelection + "!" ; 
	} else if (player == computerSelection) {
		return "It's a draw! You both chose " + player + "." ;
	} else {
		++computerWins;
		return "You loose! " + computerSelection + " beats " + player + "!";
	}
}

// Play x rounds and keep score
function game() { 
	numberOfGames = document.getElementById("numberOfRoundsInput").value
	playerWins = 0;
	computerWins = 0;
	for (let i = numberOfGames; i > 0; i--) {
		console.log("Round " + (numberOfGames-i+1) );
		console.log(
			playRound(
				prompt("Do you choose rock, paper or scissors?"), 
				computerPlay()
			)
		)
	} 
	if (computerWins > playerWins) {
		 console.log("Computer wins " + computerWins + " rounds to " + playerWins + ".");
	} else if (computerWins == playerWins) {
		console.log("It's a draw!");
	}else{ 
		console.log("Player wins " + playerWins + " rounds to " + computerWins + ".");
	}
}

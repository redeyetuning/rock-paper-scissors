// Global Variables;
let pointsToWin;
let playerWins = 0;
let computerWins = 0;

const computerDiv = document.querySelector(".computerDiv");
const playerDiv = document.querySelector(".playerDiv");
const pointsToWinInput = document.querySelector("#pointsToWin");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const playerPoints = document.querySelector("#playerPoints");
const computerPoints = document.querySelector("#computerPoints");
const footer = document.querySelector("#footer");

//Evernt listeners
let playRock = () => playRound("rock", computerPlay());
let playPaper = () => playRound("paper", computerPlay());
let playScissors = () => playRound("scissors", computerPlay());
let input = () => { checkIfNumber(pointsToWinInput.value); 
					playerPoints.textContent = 0; 
					computerPoints.textContent =0;
					playerWins = 0;
					computerWins = 0;
					playerDiv.classList.remove("red", "green");
					computerDiv.classList.remove("green", "red");}

pointsToWinInput.addEventListener("input", input);
rockButton.addEventListener("click", playRock);
paperButton.addEventListener("click", playPaper);
scissorsButton.addEventListener("click", playScissors);

// Check pointsTo Win is Number
function checkIfNumber(input) {
	let i =0;
	let value = input;
	if (!isNaN(value)) {
		pointsToWin = value;
	} else {
		do {
			alert(input + " is not a number. Please enter a number 1-9.");
			if (!isNaN(value = prompt("Please enter number of points to win (1-9).") ) ) {
				i =+ 1;
			}
		} while (i !=1);
		pointsToWin = value;
	}
} 

// Randomly select Rock, Scissor, Stone 
function computerPlay() {
	let randomNumber = Math.random();
	if (randomNumber <= 1/3) {
		return ("rock");
	} else if (randomNumber > 1/3 && randomNumber<2/3) {
		return "scissors";
	} else {
		return "paper";	
	} 
}

// Play a round
function playRound (playerSelection, computerSelection) {
	
	player = playerSelection;
	if ( (player == "rock" && computerSelection == "scissors") ||
		 (player == "scissors" && computerSelection == "paper") ||
		 (player == "paper" && computerSelection == "rock") ) {
		++playerWins;
		footer.textContent = ("You win! " + player + " beats " + computerSelection + "!") ; 
	} else if (player == computerSelection) {
		footer.textContent = ("It's a draw! You both chose " + player + ".") ;
		++computerWins;
		++playerWins;
	} else {
		++computerWins;
		footer.textContent = ("You loose! " + computerSelection + " beats " + player + "!");
	}
	playerPoints.textContent = playerWins;
	computerPoints.textContent = computerWins;
	checkIfWinner(playerWins, computerWins);
	
}

// Keep Score and Announce Winner
function checkIfWinner(playerWins, computerWins) { 
	if (computerWins == pointsToWin && playerWins == pointsToWin){
		alert("The match is drawn!");
	} else if (playerWins == pointsToWin) {
		footer.textContent = ("Player wins the match!");
		playerDiv.classList.add("green");
		computerDiv.classList.add("red");

	} else if (computerWins == pointsToWin) {
		footer.textContent= ("Computer wins the match!");
		playerDiv.classList.add("red");
		computerDiv.classList.add("green");
	}
}

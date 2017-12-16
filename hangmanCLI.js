//var inquirer = require("inquirer");
//require letterConst.js as well, possibly wordConst.js too.
//Note to self: download inquirer package and --save!

/*Pseudocode:

var guessedLetters = [];
var wrongLetters = [];
var correctLetters = [];
var numGuess = 10;

function gameStart () {
	Display: >>>>>>>>>
	"Welcome to Hangman".
		>>>>>>>>>>
	word is chosen, probably from array. (choicesConst.js)
	askForGuess();
}

function askForGuess() {
	if guessedLetters array is empty {
			Display: >>>>>>>>>>>>>>>>>>>>>>>

		Inquirer: "Here is your word, enter your guess:".
		[[_ _ _ _ _] get this from letterConst.js]

		"You have 10 guesses remaining."
			>>>>>>>>>>>>>>>>>>>>>>>
	} else {
			Display:  >>>>>>>>>>>>>>>>>>>>>
		Inquirer: "What is your next guess?"

		[[_ _ _ S _] get this from letterConst.js] 

		"You have 10 guesses remaining."
			>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	
	}		
}

user enters letter (event listener is needed here):

function guessALetter(userInput) {
	toLowerCase();
	push userInput to guessedLetters array.

	Check if letter guessed is in word.
		[Functionality to be handled by letterConst.js:
		if letter in word, 
			letter appears in word]
		Display what is returned from letterConst.js.

			Check for word completion:
				if all letters from correctLetters array from letterConst.js 
				are also in the guessedLetters array, 
					victory();
				else
					askForGuess();

		if letter NOT in word
			letter pushed to wrongLetters array
			numGuesses--;
			Check for numGuesses = 0.
				if numGuesses = 0, 
					gameOver();
				else
					askForGuess();

}			

function gameOver() {
	inquirer
		.prompt {
			Yes/No, 
			message: "Oh, no! The man has been hung!! \nWould you like to try again?"
		}
	if yes, startGame();
	else {
		console.log("Thank you for playing! Come again soon!");
	}
}

function victory() {
	inquirer
		.prompt {
			Yes/No,
			message: "Congratulations! You saved the man! \nWould you like to try again?"
		}
	if yes, startGame();
	else {
		console.log("Thank you for playing! Come again soon!");
	}
}
	

gameStart();
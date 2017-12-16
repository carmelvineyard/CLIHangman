/* import module from wordConst.js

constructor that would create a display to export to hangmanCLI.js:

This will go through the imported object and generate blanks
to begin with, then update the display each round as letters are
guessed. It'll display letters as they are guessed. 

Check each letter in imported object (correctLetters array) against array of guessed letters:
	if letter has not been guessed
		put/leave a _ in place.
	if letter has been guessed
		display that letter.

correctLetters array should be imported from wordConst.js
along with correctObject.

That actual check should be done by hangmanCLI.js, I think. 
This should just be constructing the letters and blanks.


module.export to hangmanCLI.js
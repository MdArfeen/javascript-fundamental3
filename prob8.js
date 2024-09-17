// Basic dowhile loop
/*
let i = 6;
do {
  console.log(i);
  i++;
} while (i <= 5);
 */
//

//input validation using dowhile loop
/*
function validatePassword() {
    let password;
    
    do {
      password = prompt("Enter a password (must be longer than 6 characters):");
      
      if (password.length <= 6) {
        console.log("Password too short, try again.");
      }
      
    } while (password.length <= 6);
    
    console.log("Password accepted!");
  }
  */

  //Random number guessing game
/*
  function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Generates random number between 1 and 10
    let guess;
    let attempts = 0;
  
    do {
      guess = parseInt(prompt("Guess a number between 1 and 10:"));
      attempts++;
      
      if (guess !== randomNumber) {
        console.log("Wrong guess, try again!");
      }
      
    } while (guess !== randomNumber);
  
    console.log(`Correct! You guessed the number ${randomNumber} in ${attempts} attempts.`);
  }
  */
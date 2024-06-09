let randomNumber =parseInt((Math.random()*100)+1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remainig = document.querySelector('.last-result');
const startOver = document.querySelector('.resultpress');
const loworhigh = document.querySelector('.loworhigh');

const p = document.createElement('p');

let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame){
    submit.addEventListener('click', function(e){
       e.preventDefault();
       const guess = parseInt(userInput.value);
       validateGuess(guess); 
    });
}

function validateGuess(guess){

    if (isNaN(guess)){
        alert('please enter a valid number');
    } else if (guess < 1) {
        alert('please enter a number greater than 1!');
    } else if (guess > 100){
       alert('please enter a number less than 500!') 
    } else{
       
        previousGuesses.push(guess);

        if (numGuesses === 11){
           displayGuesses(guess);
           displayMessage('Game Over! Number was ${randomNumber}');
           endGame();  
        } else {
            displayGuesses(guess);
            checkGuess(guess);  
        }
    }
}

function checkGuess(guess){
    if (guess ===randomNumber){
      displayMessage('You guessed correctly');
       endGame(); 
    } else if (guess < randomNumber) {
     displayMessage('Too low! Try again'); 
    } else if (guess > randomNumber) {
        displayMessage('Too High! Try again');
    }
}

function displayGuesses(guess){
    userInput.value = '';
    guessSlot.innerHTML += '${guess} ' ;
    numGuesses ''
    remaining.innerHTML = '${11 -numGuesses}' ;
}

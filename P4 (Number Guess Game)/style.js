let randomNumber = parseInt(( Math.random() * 100 + 1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const GuessSlot = document.querySelector('.Guesses')
const Remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1 

let playGame = true;

if (playGame) { 
  submit.addEventListener('click' ,function(e){
    e.preventDefault()
     const guess = parseInt(userInput.value)
     validateGuess(guess)
  })  
}


//====== Functions =======

function validateGuess(guess){
  if (isNaN(guess)) {
    alert('Please enter a valid number')
  } else if (guess < 1) {
    alert('Please enter a number more then 1')
  } else if (guess > 100) {
   alert('Please enter a less then 100')
  }else {
    prevGuess.push(guess)
    if (numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game id over. Random number was ${randomNumber}`)
      endgame()
    }else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if (guess === randomNumber) {
    displayMessage(`You guessed right`)
    endgame()
  } else if (guess < randomNumber){
    displayMessage(`Number is too low`)
  } else if (guess > randomNumber){
    displayMessage(`Number is too high`)
  }
}

function displayGuess(guess){
 userInput.value = ""
 GuessSlot.innerHTML += `${guess} ,`
 numGuess++; 
 Remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
} 


function endgame(){
  userInput.value = ''
  userInput.setAttribute('disabled' , '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`;
  startOver.appendChild(p)
  playGame = false;
  newGame();
}


function newGame(){
 const newGameButton = document.querySelector('#newGame')
 newGameButton.addEventListener('click' , function(e){
  
  randomNumber = parseInt(( Math.random() * 100 + 1));
  prevGuess = []
  numGuess = 1 
  GuessSlot.innerHTML = ''
  Remaining.innerHTML = `${11 - numGuess}`
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
  playGame = true

 })
}







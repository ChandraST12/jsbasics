let randNumber = parseInt(Math.random() *100 + 1 );

const submit    = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi   = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess  = 1
let playGame  = true
console.log(randNumber)
if(playGame){
    submit.addEventListener('click',function(e){
       e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    
    if(isNaN(guess)){
        alert('Please enter a number')
    }else if(guess < 1 || guess > 100){
        alert('Please enter a number between 1 and 100')
    }else{
        prevGuess.push(guess)
        if(numGuess ===11){
         displayGuess(guess)
         displayMessage(`Game Over random number was ${randNumber}`)
         endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
if(guess=== randNumber){
    displayMessage(`you guessed it right`)
    endGame()
}else if(guess < randNumber){
    displayMessage(`Number is too low`)
}else if(guess > randNumber){
    displayMessage(`Number is too high`)
}
}

function displayGuess(guess){
userInput.value='';
guessSlot.innerHTML += `${guess} `;
numGuess++;
remaining.innerHTML =`${11-numGuess}`
}
function displayMessage(message){
lowOrHi.innerHTML =`<h2>${message}</h2>`
}

function endGame(){
userInput.value =''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML =`<h2 id="newGame"> Start new game</h2>`;
startOver.appendChild(p)
playGame = false
newGame()
}
function newGame(){
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click',function(e){
    randNumber = parseInt(Math.random() *100 + 1 );
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML =`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
});
}


let random_number = Math.floor(Math.random()*100 + 1)


const guessesList = document.querySelector('.guesses-list');
const lastResult = document.querySelector('.last-result');
const lowOrHi = document.querySelector('.low-or-hi');
const guessSubmit = document.querySelector('.guess-submit');
const guessField = document.querySelector('.field-input');
let guess_count =1;
let reset_button;
// Function
function checkGuess() {
// Printing Previous guesses
    const userGuess = Number(guessField.value);
    if (guess_count === 1) {
        guessesList.textContent = 'Previous guess:'
        
    }
    
      guessesList.textContent += userGuess + ',';
       // check if the user  is right
    if (userGuess === random_number) {
        lastResult.innerHTML = "Congratulations ! You got it right";
        lastResult.style.backgroundColor = "green"
        lowOrHi.innerHTML = ''
         startOver()
    }
    // Tell user Guess Count is exhausted
    else if (guess_count === 10){
        lastResult.innerHTML = " !!! GAME OVER "
        lastResult.style.backgroundColor = 'red';
         lowOrHi.innerHTML =""
          startOver()
    }
    // tell user guess is wrong
    else{
        lastResult.innerHTML = "Wrong !!!"
        lastResult.style.backgroundColor = 'red'
        // tell user the frequency of guess
        if (userGuess < random_number) {
            lowOrHi.innerHTML ="Last guess was too low"
            
        }else if (userGuess > random_number) {
             lowOrHi.innerHTML ="Last guess was too High"
        }
    }
    //  Increase counter, reset and make input focus
    guess_count ++;
    guessField.value = ''
    guessField.focus();
}
    // Tell user to start again
    function startOver(){
        guessField.disabled = true;
        guessSubmit.disabled = true;

        reset_button = document.createElement('button');
        reset_button.innerHTML = "Start  new game";
        reset_button.style.backgroundColor = 'green'
        document.querySelector('.wrapper').append(reset_button)
        
        reset_button.addEventListener('click', resetGame)
    }
    // reset game function
    function resetGame() {
        guess_count =1;

         const resetParas = document.querySelectorAll('.result-paras p');
         console.log(resetParas);

       for(resetPara of resetParas){
        resetPara.innerHTML = '';
       }
        // remove the resetButton
         reset_button.parentNode.removeChild(reset_button);
        //  enable guessSubmit and guessField
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = ''
        guessField.focus();
        lastResult.style.backgroundColor = 'white';

    }
    
    
    



    guessSubmit.addEventListener('click', checkGuess)

   

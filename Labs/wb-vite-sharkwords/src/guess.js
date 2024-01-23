const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  alphabet.split('').forEach((letter) => { // getting each of the letters in the alphabet
    const btn = document.createElement('button'); // creating a button 
    btn.innerText = letter; // setting the buttons text to the letter of the alphabet the loop is on
    btn.addEventListener('click', (e) => handleGuess(e, letter)); // adds a listener to call the handleGuess function if the button is clicked.
    btn.className = "letterButton"
    element.append(btn); // appends the button to the parent element
  });
}

export default setupGuesses;

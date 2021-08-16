import { countsAsAYes } from './utils.js';
// import functions and grab DOM elements
const buttonEl = document.getElementById('button');
const resultsEl = document.getElementById('results');
// initialize state
// set event listeners 
buttonEl.addEventListener('click', () => {
    let correctResponses = 0;
    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');
    const wantsToQuiz = confirm(`${firstName} ${lastName} , Do you want to continue to the quiz?`);
    if (!wantsToQuiz) return;
// get user input
    const answer1 = prompt('Is the Aardvark a nocturnal animal?');
    if (countsAsAYes(answer1)) correctResponses++;// use user input to update state
    const answer2 = prompt('Is the Aardvark closely related to the pig?');
    if (!countsAsAYes(answer2)) correctResponses++;
    const answer3 = prompt('Are Aardvarks related to Elephants?');
    if (countsAsAYes(answer3)) correctResponses++;
    resultsEl.textContent = `Hey ${firstName} ${lastName} you got ${correctResponses} correct out of 3!`;
    resultsEl.style.display = 'inline'; // update DOM to reflect the new state
});
  
   
  

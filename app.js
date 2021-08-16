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


});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

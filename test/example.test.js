// IMPORT MODULES under test here:
import { countsAsAYes } from '../utils';
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (countsAsAYes) => {
    //Arrange
    // Set up your arguments and expectations
    const answerOne = 'Yes';
    const answerTwo = 'No';
    
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    if (countsAsAYes(answerOne)) actual;
    if (!countsAsAYes(answerTwo)) expected;
});

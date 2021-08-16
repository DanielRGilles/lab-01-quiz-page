import { countsAsAYes } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const valOne = 'y';
    const expectedResult = true;
    //Act 
    // const expected = 'true';
    // Call the function you're testing and set the result to a const
    //Expect
    const actualResult = countsAsAYes(valOne);
    // Make assertions about what is expected versus the actual result
    expect.equal(actualResult, expectedResult);
    
});

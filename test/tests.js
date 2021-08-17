import { countsAsAYes } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const valOne = 'y';
    const expectedResult = true;
    const expectedResult2 = true;
    const valTwo = 'No';
    //Act 

    // const expected = 'true';
    // Call the function you're testing and set the result to a const
    //Expect
    const actualResult = countsAsAYes(valOne);
    const actualResult2 = !countsAsAYes(valTwo);
    // Make assertions about what is expected versus the actual result
    expect.equal(actualResult, expectedResult);
    expect.equal(actualResult2, expectedResult2);
    
});

// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("fibonacciSequence", () => {
  it("function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
      expect(fibonacciSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibonacciSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// b) Create the function that makes the test pass.
// Pseudocode
// Input: number greater than 2
// Output: array that length containing the numbers of the Fibonacci sequence.
//
function fibonacciSequence(length) {
  const fib = [1, 1];
  if (length <= 2) {
    return fib.slice(0, length);
  }
  for (let i = 2; i < length; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe("sortObjectValues", () => {
  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60
  };
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
  };
  it("returns an array of the values sorted from least to greatest", () => {
    expect(sortObjectValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
    expect(sortObjectValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100]);
  });
});

// b) Create the function that makes the test pass.
function sortObjectValues(obj) {
  const values = Object.values(obj);
  return values.sort((a, b) => a - b);
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe('accumulatingSum', () => {
  it('returns an array of the accumulating sum', () => {
    const accountTransactions1 = [100, -17, -23, -9]
    const accountTransactions2 = [250, -89, 100, -96]
    const accountTransactions3 = []
    expect(accumulatingSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accumulatingSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accumulatingSum(accountTransactions3)).toEqual([])
  })
})

// b) Create the function that makes the test pass.
function accumulatingSum(arr) {
  let sum = 0
  return arr.map(num => sum += num)
}
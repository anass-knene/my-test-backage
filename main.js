// fix bug (patch release)
function sum(a, b) {
  console.log(`sum of these tow numbers are : ${a + b}`);
}
module.exports = sum;

// add new feature (minor release)
function multiply(a, b) {
  console.log(`product of these tow numbers are : ${a * b}`);
}
module.exports = { sum, multiply };

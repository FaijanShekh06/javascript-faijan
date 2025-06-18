function add(a, b) {
  console.log(`Addition: ${a} + ${b}`, `Result: ${a + b}`);
}

function subtract(a, b) {
  console.log(`Subtraction: ${a} - ${b}`, `Result: ${a - b}`);
}

function multiply(a, b) {
  console.log(`Multiplication: ${a} * ${b}`, `Result: ${a * b}`);
}

function divide(a, b) {
  if (b === 0) {
    console.log(`Error: Division by zero is not allowed.`);
  } else {
    console.log(`Division: ${a} / ${b}`, `Result: ${a / b}`);
  }
}

module.exports = {
  addition: add,
  subtraction: subtract,
  multiplication: multiply,
  division: divide,
};

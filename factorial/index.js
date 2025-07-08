// let arr = [1, 2, 3, 4, 5];
// const fact = (a, b) => {
//   return a * b;
// };
// console.log(arr.reduce(fact));
function factorial(n) {
  if (n < 0) {
    return "number has to be positive.";
  }
  // base case
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

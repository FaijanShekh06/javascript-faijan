// let arr = [1, 2, 3, 4, 5];
// const fact = (a, b) => {
//   return a * b;
// };
// console.log(arr.reduce(fact));
// function factorial(n) {
//   if (n < 0) {
//     return "number has to be positive.";
//   }
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5));

function fac(num) {
  let fact = 1;
  for (let index = 1; index <= num; index++) {
    fact = fact * index;
  }
  return fact;
}
console.log(fac(5));

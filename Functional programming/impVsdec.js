//we will be gien a no and we have to check that if the square of the number is even or not

//imperative programming approach
const a = 4;
let isEven;

if ((a * a) % 2 == 0) {
  isEven = true;
} else {
  isEven = false;
}
console.log(isEven);

//declarative programming approach
const checkForSquare = (a) => ((a * a) % 2 === 0 ? true : false);
console.log(checkForSquare(4)); // true
console.log(checkForSquare(5)); // false

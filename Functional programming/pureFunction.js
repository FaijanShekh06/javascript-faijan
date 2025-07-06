// let b = 2;
// // This is a inpure function example
// function addInpure(a) {
//   console.log(a + b);
//   b++;
// }
// add(2);
// add(2);
// add(2);
// The output will be 4, 5, 6

// This is a pure function example
function addPure(x, y) {
  return x + y; // The function always returns the same output for the same inputs
  // and does not modify any external state.
}
console.log(addPure(2, 3)); // 5

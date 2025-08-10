// First Class Function
//!A function said to have first classs function when the function in that language are treated as variables,you can save them,you can pass them as arguments,to another function.

let a = function () {
  console.log("hello");
}
a()

setTimeout(() => {
  console.log("hello after 1s");
}, 1000);


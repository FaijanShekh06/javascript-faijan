function sayMyName() {
  console.log("f");
  console.log("a");
  console.log("i");
  console.log("j");
  console.log("a");
  console.log("n");
}
//sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result;
  return number1 + number2;
}
const result = addTwoNumbers(2, 3);
// console.log("Result:", result);

function loginUserMessage(username = "b2") {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just looged in`;
}
// console.log(loginUserMessage("Faijan"));
// console.log(loginUserMessage("faijan"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
//
//console.log(calculateCartPrice(2, 3, 4, 5));

const user = {
  username: "faijan",
  price: "266",
};

function handelObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handelObject(user);
// handelObject({
//   username: "bittu",
//   price: "2999",
// });

const myNewArray = [200, 3000, 500, 400];

function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2000, 4146, 564, 6451]));

const user = {
  username: "faijan",
  price: "322",
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "faijan";
//   console.log(this.username);
// }
// chai();

// const chai = function () {
//   let username = "faijan";
//   console.log(this.username);
// };
// chai();

///ARROE FUNCTION
const chai = () => {
  let username = "faijan";
  console.log(this);
};
// chai();

// const addTwo = (number1, number2) => {
//   return number1 + number2;
// };

// const addTwo = (number1, number2) => number1 + number2;

// const addTwo = (number1, number2) => (number1 + number2);

const addTwo = (number1, number2) => ({ username: "faijan" }); //for object

console.log(addTwo(343, 434));

// const MyArray = [342, 34, 343];
// MyArray.forEach();

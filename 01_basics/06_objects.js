//singleton

//object literals
// Object.create
// const mySym = Symbol("key1");
// const JsUser = {
//   name: "Faijan",
//   "Full Name": "Faijan Shekh",
//   [mySym]: "mykey1",
//   age: 22,
//   location: "Vasad",
//   email: "fajan@gmail.com",
// };

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "faijan123@gmail.com";
// Object.freeze(JsUser);

// JsUser.email = "faijan@gmail.com";
// console.log(JsUser);

// JsUser.greeting = function () {
//   console.log("hello js user");
// };

// JsUser.greetingTwo = function () {
//   console.log(`hello js user, ${this.name}`);
// };

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//const tinderUser = new Object(); //singleton object
const tinderUser = {}; //non singleton object
tinderUser.id = "123abc";
tinderUser.name = "Faijan";
tinderUser.isLoggedIn = false;

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "faijan",
      lastname: "shekh",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };

const obj2 = { 3: "a", 4: "b" };

// const obj3 = Object.assign({}, obj1, obj2);
//const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

const users = [
  {
    id: 1,
    email: "jhgvs@gmail.com",
  },
  {
    id: 1,
    email: "jhgvs@gmail.com",
  },
  {
    id: 1,
    email: "jhgvs@gmail.com",
  },
];

users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "js in hindi",
  price: "399",
};
const { coursename : cnm } = course;
console.log(cnm);

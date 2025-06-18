// primitive

// 7 types : String , Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValues = 10.3;
const isLoggedIne = false;
const outsideTem = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNum = 2398634523489756n; //last me put karne se bigint ho jata hai

//refrence(non primitive) type : Array objects, function

const heros = ["shaktiman", "naaagarajk", "doa"];
let obj = { name: "faijan", age: 22 };

const myfunction = function () {
  console.log("hello world");
};

console.log(typeof obj);

//stack(make copy) and heap(reference) memory

let Email1 = "kdfk@gamil.com";
let myEmail = Email1;
myEmail = "kjdfh@!gmail.com";
console.log([Email1, myEmail]);

let userOne = { email: "abc@gmail.com", age: 22 };
let userTwo = userOne;
userTwo.email = "ABC1@gmail.com";
console.log([userOne, userTwo]);

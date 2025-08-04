"use strict"
//this is global space
console.log(this);//globalObject, window,global
//this inside a function
function x() {
  console.log(this);//in strict mode=> undefined and non strict mode=> become window
}
x();

// this keyword value depends on how the function is called(window)
// x();//undefined
// window.x();//window

//this inside a object method

// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this);

//   }

// }
// obj.x();  // become this obj object

const student = {
  name: "faijan",
  printName: function () {
    console.log(this.name);

  },

}
student.printName();//faijan

const student2 = {
  name: "salman"
}

student.printName.call(student2);//salman the value of this => student2

//call 
let name = {
  firstName: "faijan",
  lastName: "Shekh"
}
let printName = function (homeTown, city) {
  console.log(this.firstName + " " + this.lastName + " from " + homeTown + " , " + city);
}

printName.call(name, "Vasad", "Anand")

let name2 = {
  firstName: "salmam",
  lastName: "Shekh"
}

//function borrowing 
printName.call(name2, "Ambav", "Anand")

//in apply pass argument in list[]
printName.apply(name2, ["Ambav", "Anand"])

//bind method return new function

let printMyName = printName.bind(name2, "Ambav", "Anand");
console.log(printMyName);
printMyName()

//Purpose of the methods: All three allow you to explicitly set the value of this when invoking a function.

// call(): Invokes a function with a given this value and arguments passed individually.

// apply(): Similar to call(), but arguments are passed as an array.

// bind(): Returns a new function with a bound this value and optional preset arguments—useful for delayed execution.
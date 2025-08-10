//iife => immediately invoked function expression
//iife hai function ko turant chalane ki kala, is tareeke se ki hum log koi private variable bana paaye

let ans = (function () {
  let privateVal = 12//in iife variable are automatic privated
  return {
    getter: function () {
      console.log(privateVal);
    },
    setter: function (val) {
      privateVal = val
    }
  }
})()

//Prototype
let obj = {
  name: "faijan"
}
obj.name

//protypal inheritance
//Inheritance is basically passing parent's features properties to their childrens, to do same thing in js with the help of prototype is called prototypal inheritnce.

let human = {
  canFly: false,
  canTalk: true,
  willDie: true
};

let svitStudent = {
  SolveJSQue: true,
  createModernWebsite: true
};

svitStudent.__proto__ = human; // this a way to inherit


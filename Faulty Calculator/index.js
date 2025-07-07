let random = Math.random();
console.log(random);
let a = prompt("Enter Number 1");
let c = prompt("Enter Operator");
let b = prompt("Enter Number 2");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

c = obj[c];
if (random > 0.1) {
  console.log(`The Result is ${a} ${c} ${b} `);
  alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
}

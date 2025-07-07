function nice(name) {
  console.log("Hey " + name + " you are nice");
  console.log("Hey " + name + " you are good!");
  console.log("Hey " + name + " you are Smart!");
}
nice("faijan");
nice("Salman");

function sum(a, b, grace = 3) {
  console.log("The sum of  a + b : ", a + b + grace);
}
sum(9, 1);

const func1 = (x) => {
  console.log("I am a Arrow Function", x);
};
func1(2);

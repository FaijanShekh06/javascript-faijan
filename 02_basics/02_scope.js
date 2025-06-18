let b = 34;
if (true) {
  let a = 23;
  const b = 27;
  // console.log("Inneer:", b);
}

// console.log(a);
// console.log(b);

function one() {
  const username = "Faijan";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}
// one();

if (true) {
  const username = "faijan";
  if (username === "faijan") {
    const website = " youtude";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

//++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++
console.log(addone(5));

function addone(num) {
  return num + 1;
}

console.log(addtwo(5));
const addtwo = function (num) {
  return num + 2;
};

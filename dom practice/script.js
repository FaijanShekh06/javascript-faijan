// let random = Math.random();
// if (random < 0.33) {
//   document.querySelectorAll(".box").forEach((e) => {
//     e.style.backgroundColor = "red";
//   });
// } else if (random > 0.66 && random > 0.33) {
//   document.querySelectorAll(".box").forEach((e) => {
//     e.style.backgroundColor = "blue";
//   });
// } else {
//   document.querySelectorAll(".box").forEach((e) => {
//     e.style.backgroundColor = "yellow";
//   });
// }

// random = Math.random();
// if (random < 0.33) {
//   document.querySelectorAll(".box").forEach((e) => {
//     e.style.color = "black";
//   });
// } else if (random < 0.66 && random > 0.33) {
//   document.querySelectorAll(".box").forEach((e) => {
//     e.style.color = "white";
//   });
// } else {
//   document.querySelectorAll(".box").forEach((e) => {
//     e.style.color = "green";
//   });
// }

console.log("Script.js Initializing.");
let boxes = document.querySelector(".container").children;
function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 2555);
  let val2 = Math.ceil(0 + Math.random() * 2555);
  let val3 = Math.ceil(0 + Math.random() * 2555);
  return `rgb(${val1},${val2},${val3})`;
}
Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
});

console.log("Faijan is a hacker");
console.log("binod is a hacker");
setTimeout(() => {
  console.log("hey i am inside a settimeout");
}, 1000);
console.log("the end");

// callback Function => function passed as arguments inside function
const cb = (arg) => {
  console.log(arg);
};
const loadScript = (src, cb) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = cb("Faijan");
  document.head.append(sc);
};
loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  cb
);

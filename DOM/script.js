// 4 piller of DOm
//1)Selection of elements
//2)Changing HTML
//3)Changing CSS
//4)Event Listener

// // 1)Selection of elements
// let a = document.querySelector("h1")
// console.log(a);

// // 2)Changing HTML
// let b = document.querySelector("h1")
// b.innerHTML = "Changed HTML"

// // 3)Changing CSS
// b.style.color = "red"
// b.style.backgroundColor = "black"

// // 4)Event Listener
// b.addEventListener("click", function () {
//   // console.log("Hey");
//   b.innerHTML = "Clicked"
//   b.style.color = "yellow"
// })

// //bulb on off
// let bulb = document.querySelector("#bulb")
// let btn = document.querySelector("#btn")
// let flag = 0
// btn.addEventListener("click", function () {
//   if (flag == 0) {
//     bulb.style.backgroundColor = "yellow";
//     btn.innerHTML = "OFF"
//     flag = 1
//   } else {
//     bulb.style.backgroundColor = "transparent";
//     btn.innerHTML = "ON"
//     flag = 0
//   }
// })

// Select Multiple Event same time
let h1 = document.querySelectorAll("h1")
h1.forEach(element => {
  console.log(element);
});

//SELECT ELEMENTS
// document.getElementById("box")
// document.getElementsByClassName("box2")

//different btw innerHTML and textContent
document.querySelector(".box").innerHTML = "<h1>Hello inside a Box</h1>"
document.querySelector(".box2").textContent = "<h1>Hello inside a Box</h1>"
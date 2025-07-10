let boxs = document.getElementsByClassName("box");
console.log(boxs);

document.querySelector(".box").style.backgroundColor = "red";

document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "red";
});



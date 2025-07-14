let button = document.getElementById("btn");
button.addEventListener("click", () => {
  // alert("Yayyy..! Button Clicked");
  document.querySelector(".container").innerHTML =
    "<b>You were clicked</b> Enjoy youre Clicks";
});
button.addEventListener("contextmenu", () => {
  alert("Dont hack us by Right Click Please");
});
button.addEventListener("keyup", () => {
  alert("You press the key-up");
});



let con = document.querySelector("#container")
let love = document.querySelector("svg")

con.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(1)"
  love.style.opacity = 0.7

  setTimeout(() => {
    love.style.opacity = 0
  }, 1000);
  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)"
  }, 2000);
})

setTimeout(() => {
  love.style.transform = "translate(-50%, -50%) scale(0)"
}, 2000);
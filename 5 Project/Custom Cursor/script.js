let main = document.querySelector("#main")
let crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 5 + "px"
  crsr.style.top = dets.y + 5 + "px"

})
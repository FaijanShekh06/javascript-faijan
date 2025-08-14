let arr = [
  {
    db: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1529680459049-bf0340fa0755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
  }, {
    db: "https://images.unsplash.com/photo-1646553747733-38b001866380?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1646554399276-52261643a93d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
  }, {
    db: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1727107044939-6c9f6ba6d147?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8"
  }, {
    db: "https://images.unsplash.com/photo-1541519481457-763224276691?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1552420027-689b3830de47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8"
  },
]

let storys = document.querySelector("#storys")
let clutter = ""
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
        <img id="${idx}"
          src="${elem.db} "
          alt="">
      </div>`

})

storys.innerHTML = clutter

storys.addEventListener("click", function (dets) {
  document.querySelector("#full-screen").style.display = "block"
  document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
  setTimeout(() => {
    document.querySelector("#full-screen").style.display = "none"
  }, 2000);
})
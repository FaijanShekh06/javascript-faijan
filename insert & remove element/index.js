console.log(document.querySelector(".box"));
console.log(document.querySelector(".container"));
console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".box").innerText);
console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").nodeName);
console.log(document.querySelector(".container").textContent);
// console.log(document.querySelector(".container").hidden);
// console.log((document.querySelector(".container").hidden = true));
console.log((document.querySelector(".box").innerHTML = "Hey I am Faijan"));
console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(
  document
    .querySelector(".box")
    .setAttribute("style", "background-Color:yellow")
);
console.log(document.querySelector(".box").removeAttribute("style"));
console.log((document.designMode = "on"));

console.log(document.querySelector(".box").dataset);

let div = document.createElement("div");
div.innerHTML = "I have been Inserted <b>By Faijan</b>";
div.setAttribute("class", "created");
document.querySelector(".container").append(div);

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("beforeend", "<b>Insert Adjacent </b>");

console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").classList.add("bg-green"));
console.log(document.querySelector(".container").classList.add("red"));
console.log(document.querySelector(".container").classList.remove("red"));
console.log(document.querySelector(".container").classList.toggle("faijan"));

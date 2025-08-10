//this keyword is special keyword in js which change its value in differernt context

//jab bhi koi cheej {} brackets ke andar nahi hoti to hum use global scop kahte hai

console.log(this);// window

function abcd() {
  console.log(this);//window
}
abcd()

//ek fnc jo object ke ander ho useee hum method kahte hai
let obj = {
  name: "faijan",
  someMethod: function () {
    console.log(this); //object obj note: in any method this keyword alwats refers to parents object
  }
}
obj.someMethod()

let button = document.querySelector("button")
button.addEventListener("click", function () {
  console.log(this);//button Element
})

//call apply bind => agr tumare pass koi fnc hai and koi object hain and tu,mhe fnc chalana hai us ibject par aur by defaukt this ki nvalue window hai use window naa rakh kar point karvaana hai kisi obj ki taraf

function getName(v1, v2, v3) {
  console.log(this, v1, v2, v3);
}
let obj1 = {
  name: "faijan"
}

getName.call(obj1, 1, 2, 3)

function getName(v1, v2, v3) {
  console.log(this, v1, v2, v3);
}
let obj2 = {
  name: "faijan"
}

getName.apply(obj1, [1, 2, 3])

function abcd() {
  console.log(this);

}
let obj3 = {
  name: "faijan"
}
let bindedefnc = abcd.bind(obj); bindedefnc();
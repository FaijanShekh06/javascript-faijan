//constructure funcs
//!a function whenever invoked with new keyword,return an object,if we use This keyword inside that function,it returns an object of the properties and methods mentioned inside a that functionis called constructure fnc
//normal fnc jismein this ka use ho and app fnc ko call karte waqt new keyword na use karein
//jab apke pass aisa koi asa moka ho ke apko ek jaisi properties wale bahut sare elemnts banane hai us waqt app constructure fnc ka use karte ho

function saanchaOfBiscuit() {
  this.width = 12
  this.height = 22
  this.color = "brown"
  this.taste = "Sugary"
}

let bis1 = new saanchaOfBiscuit()
let bis2 = new saanchaOfBiscuit()
let bis3 = new saanchaOfBiscuit()


function circulBtn(color) {
  this.raduis = 2;
  this.color = color;
  this.icon = false;
  this.preessole = true;
}

let redBtn = new circulBtn("red")
let blueBtn = new circulBtn("blue")
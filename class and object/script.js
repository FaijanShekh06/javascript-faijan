// // let animal = {
// //   eats: true,
// // };
// // let dog = {
// //   jumps: true,
// // };
// // dog.__proto__ = animal;

// class animal {
//   constructor(name) {
//     this.name = name;
//     console.log("Object Are Created...");
//   }
//   eats() {
//     console.log("Kha raha hu");
//   }
//   jumps() {
//     console.log("Kud raha hu");
//   }
// }
// class lion extends animal {
//   constructor(name) {
//     super(name);
//     console.log("Object Are Created and He is a lion...");
//   }
//   eats() {
//     super.eats();
//     console.log("Kha raha hoon");
//   }
// }

// let a = new animal("Bunnny");
// console.log(a);
// let l = new lion("Shera");
// console.log(l);

// * getter and setter
class User {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log("Name is Too Short..");
      return;
    }
    this._name = value;
  }
}
let user = new User("faijan");
console.log(user.name);
user.name = "jerry";
console.log(user.name);

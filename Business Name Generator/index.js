let random = Math.random();
console.log(random);

let Adjectives = {
  a1: "Crazy",
  a2: "Amazing",
  a3: "Fire",
};
let ShopName = {
  s1: "Engine",
  s2: "Foods",
  s3: "Garments",
};
let AnotherWord = {
  an1: "Bros",
  an2: "Limited",
  an3: "Hub",
};

// if (random > 0.6) {
//   console.log(
//     `Business Name Generated : ${Adjectives.a1} ${ShopName.s1} ${AnotherWord.an1}`
//   );
// } else if (random > 0.4) {
//   console.log(
//     `Business Name Generated : ${Adjectives.a2} ${ShopName.s2} ${AnotherWord.an2}`
//   );
// } else {
//   console.log(
//     `Business Name Generated : ${Adjectives.a3} ${ShopName.s3} ${AnotherWord.an3}`
//   );
// }

if (random > 0.33) {
  first = Adjectives.a1;
} else if (random > 0.66 && random < 0.33) {
  first = Adjectives.a2;
} else {
  first = Adjectives.a3;
}

random = Math.random();
if (random > 0.33) {
  second = ShopName.s1;
} else if (random > 0.66 && random < 0.33) {
  second = ShopName.s2;
} else {
  second = ShopName.s3;
}

random = Math.random();
if (random > 0.33) {
  third = AnotherWord.an1;
} else if (random > 0.66 && random < 0.33) {
  third = AnotherWord.an2;
} else {
  third = AnotherWord.an3;
}

console.log(`Business Name Generated : ${first} ${second} ${third}`);

console.log("i am a tutorial on loop");

let a = 1;
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let Student = {
  name: "faijan",
  phone: 6565465231,
  marks: 66,
};

for (const key in Student) {
  // const element = Student[key];
  // console.log(key, element);
  console.log(key);
}

for (const c of "Faijan") {
  console.log(c);
}

// let i = 1;
// while (i < 6) {
//   console.log(i);
//   i++;
// }

// it's run one time if the condition are false
let i = 1;
do {
  console.log(i);
  i++;
} while (i < 5);

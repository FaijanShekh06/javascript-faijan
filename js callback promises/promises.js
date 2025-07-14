console.log("This is promises");
let prom1 = new Promise((resolve, reject) => {
  let r = Math.random();
  if (r < 0.5) {
    reject("No Random number no support you");
  } else {
    setTimeout(() => {
      console.log("Yes I am Done.");
      resolve("FAIJAN");
    }, 2000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let r = Math.random();
  if (r < 0.5) {
    reject("No Random number no support you 2");
  } else {
    setTimeout(() => {
      console.log("Yes I am Done. 2");
      resolve("FAIJAN 2");
    }, 1000);
  }
});

let p = Promise.allSettled([prom1, prom2]);
p.then((e) => {
  console.log(e);
}).catch((e) => {
  console.log(e);
});

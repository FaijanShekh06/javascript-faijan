
console.log("Promise.all example with failure scenario");

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 Success");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve("p2 Success");
  // }, 1000);

  //promise.all() in failure scenario
  setTimeout(() => {
    reject("p2 Failure");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 Success");
  }, 2000);
});

Promise.all([p1, p2, p3]).then((result) => {
  console.log("All promises resolved:", result);
}).catch((error) => {
  console.error(error);
})
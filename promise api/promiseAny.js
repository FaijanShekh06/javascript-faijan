console.log("Promise any example with multiple promises");


const p111 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p111 Success");
  }, 3000);
});

const p211 = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve("p2 Success");
  // }, 1000);

  //promise.all() in failure scenario
  setTimeout(() => {
    reject("p211 Failure");
  }, 1000);
});

const p311 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p311 Success");
  }, 2000);
});

Promise.any([p111, p211, p311]).then((result) => {
  console.log("All promises resolved:", result);
}).catch((error) => {
  console.error(error);
})

console.log("Promise.allSettled example with multiple promises");

const p11 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p11 Success");
  }, 3000);
});

const p21 = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve("p2 Success");
  // }, 1000);

  //promise.all() in failure scenario
  setTimeout(() => {
    reject("p21 Failure");
  }, 1000);
});

const p31 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p31 Success");
  }, 2000);
});

Promise.allSettled([p11, p21, p31]).then((result) => {
  console.log("All promises resolved:", result);
}).catch((error) => {
  console.error(error);
})
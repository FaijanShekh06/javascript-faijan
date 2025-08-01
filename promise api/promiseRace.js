console.log("Promise Race API Example");


const p12 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p12 Success");
  }, 3000);

});

const p22 = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve("p2 Success");
  // }, 1000);

  //promise.all() in failure scenario
  setTimeout(() => {
    reject("p22 Failure");
  }, 1000);
});

const p32 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p32 Success");
  }, 2000);
});

Promise.race([p12, p22, p32]).then((result) => {
  console.log("All promises resolved:", result);
}).catch((error) => {
  console.error(error);
})
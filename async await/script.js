
const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value!!")
})

// async function getData() {
//   // return "Namaste"
//   return p;
// }

// const dataPromise = getData()
// //console.log(dataPromise); //it will return promise

// dataPromise.then(res => {
//   console.log(res);
// })

// ! let used await with async to handle a promises

async function handlePromise() {
  // * await can only be used inside a async function
  const val = await p; // !using await keyword in a front of on promise (p) tha has to be resolves
  console.log(val);

}
handlePromise()
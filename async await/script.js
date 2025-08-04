
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!")
//   }, 2000);

// })

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!")
//   }, 5000);

// })

// // async function getData() {
// //   // return "Namaste"
// //   return p;
// // }

// // const dataPromise = getData()
// // //console.log(dataPromise); //it will return promise

// // dataPromise.then(res => {
// //   console.log(res);
// // })

// // ! let used await with async to handle a promises

// async function handlePromise() {
//   // * await can only be used inside a async function
//   console.log("hello");

//   // js engine was wait for promise to be sresolved
//   const val = await p; // !using await keyword in a front of on promise (p) tha has to be resolves
//   console.log("namaste js");
//   console.log(val);

//   const val1 = await p1; // !using await keyword in a front of on promise (p) tha has to be resolves
//   console.log("namaste js 1");
//   console.log(val1);

// }
// handlePromise()


// function getData() {
//   p.then((res) => {
//     // js engine will not wait for promise to be sresolved
//     console.log(res);
//   })
//   console.log("Namsate JS");
// }
// getData()

// !Real-World Example Shows a practical use case of async / await to fetch data and handle multiple asynchronous tasks in a clean, readable way.

const API_URL = "https://api.github.com/users/FaijanShekh06"
async function handlePromise() {
  //how fetch work => fetch() => response.json() => result 
  try {
    const data = await fetch(API_URL)
    const jsonValue = await data.json()
    console.log(jsonValue);
  } catch (error) {
    console.log(error);

  }


}
//Also you can used like this
// handlePromise().catch((err) => {
//   console.log(err);
// })
handlePromise()
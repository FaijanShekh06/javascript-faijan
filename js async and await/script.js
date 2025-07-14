// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3000);
//   });
// }
// async function getData() {
//   let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let data = await x.text();
//   console.log(data);
// }
async function getData() {
  let x = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "I am in love with someone.",
      userId: 5,
      /* other post data */
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.json();
  console.log(data);
}

async function main() {
  console.log("load module");
  console.log("Do someting else");
  console.log("Load Data");
  let data = await getData();
  // console.log(data);
  console.log("process Data");
  console.log("Task 1");
}
main();

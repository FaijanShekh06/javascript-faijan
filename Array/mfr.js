let arr = [1, 2, 3, 4, 5, 6];
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   newArr.push(element ** 2);
// }
// console.log(`Square of arr : ${newArr}`);

let newArr = arr.map((e) => {
  return e ** 2;
});
console.log(newArr);

let greaterthanseven = arr.filter((e) => {
  if (e > 4) {
    return true;
  }
  return false;
});
console.log(greaterthanseven);

let arr1 = [1, 2, 3, 4, 5, 6];
const sum = (a, b) => {
  return a + b;
};
console.log(arr1.reduce(sum));

console.log(Array.from("FAIJAN"));

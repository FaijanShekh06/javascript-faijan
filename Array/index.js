let arr = [2, 4, 34, 54];
// Index   0, 1,  2,  3

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[1]);
console.log(arr.length);

arr[1] = 67; // array is mutable so we can change the array
console.log(arr);

console.log(arr.toString()); //toString function: It's used to convert array to string

console.log(arr.join(" And ")); // join all the elements of all by using seperator

console.log(arr.pop()); //remove the last elements of array
console.log(arr);

console.log(arr.push(87)); //add or append at the last elements of array
console.log(arr);

console.log(arr.push("alsoaddstring")); //add or append at the last elements of array
console.log(arr);

console.log(arr.shift()); // remove the first elements of array
console.log(arr);

console.log(arr.unshift("Faijan")); //add or append at the first elements of array
console.log(arr);

console.log(delete arr[1]); //array element can be deleted using delete note only deleted it's elements but there is might memory allowcation
console.log(arr);
let arr2 = [3, 4, 234, 34];
let arr3 = [234, 234, 342];

console.log(arr.concat(arr2, arr3));

console.log(arr.sort());

let num = [1, 2, 3, 4, 5];
console.log(num.splice(0, 2, 23, 24));
console.log(num);

console.log(num.slice(2));
console.log(num.slice(0, 3));

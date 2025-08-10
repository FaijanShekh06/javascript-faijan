//pure fnc is  any fnc which has these 2 features: 1) itb should always return same output for same input 2) it will never chnage/update the value of a global variable


//pure function
function abcd(a, b) {
  return (a * b);
}
let ans1 = abcd(1, 2)//output 2
let ans2 = abcd(1, 2)//output 2

//inpure function
let aa = 23
function abcd(a, b) {
  aa = 24
  return (a * b);
}
let ans3 = abcd(1, 2)//output 2
let ans4 = abcd(1, 2)//output 2
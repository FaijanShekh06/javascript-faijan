//higher order function
//!=> Higher order function are the function which accept a function in a parameters or return a function or both.

function abcd(val) {

}
abcd(function () {
})

function abcd(val) {
  return function () { }
}
abcd()

//!aisa func jo accept karleek aur fnc ya fir wo return karde ek aur fnc

//*for example forEach

let arr = [1, 2, 3]
arr.forEach(element => {
  console.log(element);
});

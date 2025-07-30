const cart = ["shoes", "shirt", "pants"];

// Callback-based functions
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance()
    });
  });
})

// Using Promises
createOrder(cart).then(function (orderId) {
  return proceedToPayment(orderId);
}).then(function (paymentInfo) {
  return showOrderSummary(paymentInfo);
}).then(function (paymentInfo) {
  return updateWalletBalance(paymentInfo);
})

// const GITHUB_API = "https://api.github.com/users/FaijanShekh06";

// const user = fetch(GITHUB_API)

// console.log(user);

// user.then(function (data) {
//   console.log(data);

// })

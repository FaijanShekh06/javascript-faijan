const cart = ["shoes", "shirt", "pants"];


createOrder(cart).then(function (orderId) {
  console.log("Order ID:", orderId);
  return orderId; // Return orderId to the next then
}).then(function (orderId) {
  return proceedToPayment(orderId);
}).then(function (paymentInfo) {
  console.log("Payment Info:", paymentInfo);
}).catch(function (err) {
  console.log("Error creating order:", err.message);
})

//production code

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //create order logic
    //validate cart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("Invalid Cart");
      reject(err)
    }
    //logic to create order
    const orderId = "12345"; // Simulated order ID
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);

    }
  })

  return pr
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    // Simulated payment processing logic
    setTimeout(() => {
      const paymentInfo = { orderId: orderId, status: "Paid" }; // Simulated payment info
      resolve(paymentInfo);
    }, 3000);
  });
}

function validateCart(cart) {
  // Simulated cart validation logic
  return true // or false based on actual validation

}
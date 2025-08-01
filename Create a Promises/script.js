const cart = ["shoes", "shirt", "pants"];

createOrder(cart)
  .then(function (orderId) {
    console.log("Order ID:", orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("Payment Info:", paymentInfo);
    // You need to return the orderId from here so the next .then() can receive it.
    // The paymentInfo object contains the orderId.
    return paymentInfo.orderId;
  })
  .then(function (orderId) {
    return showOrderSummary(orderId);
  })
  .then(function () { // The return value of showOrderSummary is not used, so you can leave the parameter empty.
    return updateWallatBalance(); // You don't need the orderId for this function in the provided implementation.
  })
  .then(function (updatedBalance) {
    console.log("Wallet balance updated. New balance:", updatedBalance);
  })
  .catch(function (err) {
    console.log("Error:", err.message);
  })
  .finally(function () {
    console.log("Order process completed.");
  });

// ... (rest of your production code remains the same)

//production code

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //create order logic
    //validate cart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("Invalid Cart");
      reject(err);
    }
    //logic to create order
    const orderId = "12345"; // Simulated order ID
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
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

function showOrderSummary(orderId) {
  console.log("Order Summary for Order ID:", orderId);
  // Simulated order summary display logic
  console.log("Items in your order: ", cart.join(", "));
  console.log("Thank you for your purchase!");
  return orderId; // Return orderId for further processing if needed
  // You can also return a Promise if you want to chain further actions
}

function updateWallatBalance() { // Removed the orderId parameter as it's not used
  return new Promise(function (resolve, reject) {
    // Simulated wallet balance update logic
    setTimeout(() => {
      const updatedBalance = 100; // Simulated updated balance
      resolve(updatedBalance);
    }, 2000);
  });
}

function validateCart(cart) {
  // Simulated cart validation logic
  return true; // or false based on actual validation
}
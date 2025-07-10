let random = Math.random();
if (random < 0.33) {
  document.querySelectorAll(".box").forEach((e) => {
    e.style.backgroundColor = "red";
  });
} else if (random > 0.66 && random > 0.33) {
  document.querySelectorAll(".box").forEach((e) => {
    e.style.backgroundColor = "blue";
  });
} else {
  document.querySelectorAll(".box").forEach((e) => {
    e.style.backgroundColor = "yellow";
  });
}

random = Math.random();
if (random < 0.33) {
  document.querySelectorAll(".box").forEach((e) => {
    e.style.color = "black";
  });
} else if (random < 0.66 && random > 0.33) {
  document.querySelectorAll(".box").forEach((e) => {
    e.style.color = "white";
  });
} else {
  document.querySelectorAll(".box").forEach((e) => {
    e.style.color = "green";
  });
}

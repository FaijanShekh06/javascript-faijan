function createCard(thumnail, duration, title, cname, view, old) {
  let html = `<div class="card">
        <div class="image">
          <img src="${thumnail}" alt="" />
          <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h1>
            ${title}
          </h1>
          <p>${cname} . ${view} views . ${old} ago</p>
        </div>  
      </div>`;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}
createCard(
  "image.png",
  "28.34",
  "JavaScript Exercise 14 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77",
  "CodeWithHarry",
  "5.2M",
  "1 year"
);

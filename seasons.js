const url = "https://kea-alt-del.dk/t7/api/seasons";



//First part

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleCategories(data);
  });

function handleCategories(data) {
  // console.log(data);
  data.forEach(showSeasons);
}

function showSeasons(sea) {
  console.log(sea);
  const catCard = document.querySelector(".category-template").content;
  const clone = catCard.cloneNode(true);
  clone
    .querySelector(".category-card")
    .setAttribute("href", "product-list2.html?season=" + sea.season);
  clone.querySelector(".category-title").textContent = sea.season;
//   clone.querySelector(".category-card").style.backgroundImage =  `url("https://kea-alt-del.dk/t7/images/webp/1000/1531.webp")` ;
  const parent = document.querySelector("section");
  parent.appendChild(clone);
}


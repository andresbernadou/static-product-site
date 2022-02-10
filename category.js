const url = "https://kea-alt-del.dk/t7/api/categories";



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
  data.forEach(showCategories);
}

function showCategories(cat) {
  console.log(cat);
  const catCard = document.querySelector(".category-template").content;
  const clone = catCard.cloneNode(true);
  clone
    .querySelector(".category-card")
    .setAttribute("href", "product-list.html?categories=" + cat.category);
  clone.querySelector(".category-title").textContent = cat.category;
//   clone.querySelector(".category-card").style.backgroundImage =  `url("https://kea-alt-del.dk/t7/images/webp/1000/1531.webp")` ;
  const parent = document.querySelector("section");
  parent.appendChild(clone);
}


const url = "https://kea-alt-del.dk/t7/api/brands";



//First part

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleBrands(data);
  });

function handleBrands(data) {
  // console.log(data);
  data.forEach(showBrands);
}

function showBrands(brand) {
  console.log(brand);
  const brandCard = document.querySelector(".brand-template").content;
  const clone = brandCard.cloneNode(true);
  clone
    .querySelector(".brand-card")
    .setAttribute("href", "product-list3.html?brandname=" +brand.brandname);
  clone.querySelector(".brand-title").textContent = brand.brandname;
  clone.querySelector(".brand-description").textContent = brand.brandbio;
//   clone.querySelector(".category-card").style.backgroundImage =  `url("https://kea-alt-del.dk/t7/images/webp/1000/1531.webp")` ;
  const parent = document.querySelector("section");
  parent.appendChild(clone);
}


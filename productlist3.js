const urlParams = new URLSearchParams(window.location.search);
const brand = urlParams.get("brandname");
url = "https://kea-alt-del.dk/t7/api/products?brandname=" + brand;


fetch (url)
 .then(function(res){
     return res.json();
 })

 .then(function(data){
 handleProductList(data);

 })

 function handleProductList(data){

data.forEach(showProduct);
 }
//  <template id="smallProductTemplate">
//  <article class="smallProduct">
//  <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="Sahara t-shirt">
//  <h3>Sahara Team India Fanwear Round Neck Jersey</h3>

//  <p class="price">DKK 1595</p>
//  <div class="discounted">
// <p>Now DKK 1400</p>
// <p class="showDiscount">-34%</p>

//  </div>
//  <a href="product.html">Read more</a>
// </article>
// </template>

 function showProduct(product){
console.log(product); 
//grab the template

const template = document.querySelector("#smallProductTemplate").content;


//clone it
const copy = template.cloneNode(true);

//change content
copy.querySelector (" .smallProduct a").setAttribute("href",`product.html?id=${product.id}`);
copy.querySelector (".subTitle").textContent = `${product.articletype} - ${product.brandname} `;
copy.querySelector ("h3").textContent = product.productdisplayname;
document.querySelector("#prod-list-title").textContent = brand;
copy.querySelector (".smallProduct img").src= `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`
copy.querySelector (".showDiscount").textContent = "- %" + product.discount + " OFF";
copy.querySelector(".price").textContent = "Price: Dkk " + product.price;
//showDiscount

if(product.soldout){
copy.querySelector("article").classList.add("soldOut"); 

}
if(product.discount){
    copy.querySelector("article").classList.add("onSale"); 

}
let finalPrice =  product.price - product.price * product.discount / 100 ;
// * (1-(product.discount / 100)
copy.querySelector(".discounted p").textContent = "Now Dkk " + Math.ceil(finalPrice)  ;
//grab parent
const parent = document.querySelector("main"); 

//append
parent.appendChild(copy);

 }
//


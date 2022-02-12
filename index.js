
url = "https://kea-alt-del.dk/t7/api/products?limit=8";


fetch (url)
 .then(function (res){
     return res.json();
 })
 .then(function (data){
     handleProductList(data);

 });
function handleProductList(data){
    
   data.forEach(showProduct);}

   function showProduct(product){
       const template = document.querySelector(".template").content;
       const copy = template.cloneNode(true);
       copy.querySelector (".firstPic").src= `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
       if(product.discount){ copy.querySelector (".productDiscount").textContent = "- %" + product.discount + " OFF"} else {copy.querySelector (".productDiscount").textContent = ""};
  copy.querySelector (".productName").textContent = product.productdisplayname + " - See more ";
  let finalPrice =  product.price - product.price * product.discount / 100 ;
  copy.querySelector (".productPrice").textContent = "Dkk " + Math.ceil(finalPrice);
  copy.querySelector (" .productName").setAttribute("href",`product.html?id=${product.id}`);
    const parent = document.querySelector("#slider figure");
    parent.appendChild(copy);

   }
   



 

// function showProduct(product){
//     console.log(product); 
//     copy.querySelector (".firstPic").src= `https://kea-alt-del.dk/t7/images/webp/1000/1531.webp`
// }

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

 
//grab the template



 
// var x = document.getElementById("btn0");
// function change(){
//     x.style.background = "blue";
// }
// x.addEventListener("click", change);
// console.log(2+2);
let carts = document.querySelectorAll('.add-cart');
const cartValue = document.getElementById("cartgreen")
var n = carts.length
let products = [
    {
        name: 'Mi 10i',
        price: 20000,
        inCart: 0,
    },
    {
        name: 'Mi 11X 5G',
        price: 35000,
        inCart: 0,
    },
    {
        name: 'Samsung Galaxy F62',
        price: 20000,
        inCart: 0,
    },
    {
        name: 'Samsung Galaxy M51',
        price: 18000,
        inCart: 0,
    },
    {
        name: 'Vivo X60 pro+',
        price: 69999,
        inCart: 0,
    },
    {
        name: 'Airpodes',
        price: 1299,
        inCart: 0,
    },
    {
        name: 'Refrigerator',
        price: 32999,
        inCart: 0,
    },
    {
        name: 'Bluetooth Speaker',
        price: 7999,
        inCart: 0,
    },
    {
        name: 'Hair Dryer',
        price: 740,
        inCart: 0,
    },
    {
        name: 'Graphic Tablet',
        price: 4299,
        inCart: 0,
    },
    {
        name: 'Analog Watch',
        price: 449,
        inCart: 0,
    },
    {
        name: 'Cap',
        price: 549,
        inCart: 0,
    },
    {
        name: 'T-Shirt',
        price: 349,
        inCart: 0,
    },
    {
        name: 'Sunglasses',
        price: 1299,
        inCart: 0,
    },
    {
        name: 'Handheld Bag',
        price: 1150,
        inCart: 0,
    },
    {
        name: 'Mix Pulses',
        price: 130,
        inCart: 0,
    },
    {
        name: 'Almonds',
        price: 549,
        inCart: 0,
    },
    {
        name: 'Turmeric Powder',
        price: 290,
        inCart: 0,
    },
    {
        name: 'Cadbury Dairy Milk',
        price: 111,
        inCart: 0,
    },
    {
        name: 'Bournvita',
        price: 279,
        inCart: 0,
    },
    {
        name: 'Shoes',
        price: 539,
        inCart: 0,
    },
    {
        name: 'Slippers',
        price: 229,
        inCart: 0,
    },
    {
        name: 'Sandal',
        price: 290,
        inCart: 0,
    },
    {
        name: 'Slides',
        price: 120,
        inCart: 0,
    },
    {
        name: 'Crocs',
        price: 679,
        inCart: 0,
    }
];





console.log(carts);
for(let i=0; i<carts.length; i++){
   carts[i].addEventListener('click', () =>{
       cartNumbers(products[i]);
   })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cartNav a span').textContent = productNumbers;
    }

        if(productNumbers >= 1)
        {cartValue.style.color = "white";
        cartValue.style.border = "solid 1px black";
        cartValue.style.borderRadius = "50%";
        cartValue.style.padding = "5px";
        cartValue.style.color = "white";
        cartValue.style.border = "solid 1px black";
        cartValue.style.borderRadius = "50%";
        cartValue.style.padding = "5px 15px";
        cartValue.style.backgroundColor = "green";
        cartValue.style.marginLeft = "5px";}
}

function cartNumbers(product){
    // console.log(product);
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers);
    // console.log(productNumbers);

    if(productNumbers >= 1){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cartNav a span').textContent = productNumbers + 1; 

        

    }
    else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cartNav a span').textContent = 1;
        cartValue.style.color = "white";
        cartValue.style.border = "solid 1px black";
        cartValue.style.borderRadius = "50%";
        cartValue.style.padding = "5px";
        cartValue.style.color = "white";
        cartValue.style.border = "solid 1px black";
        cartValue.style.borderRadius = "50%";
        cartValue.style.padding = "5px 15px";
        cartValue.style.backgroundColor = "green";
        cartValue.style.marginLeft = "5px";

                




    }

    setItems(product);
 }



function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    // console.log(cartItems);
    if(cartItems != null){

        if(cartItems[product.name] == undefined){
            cartItems = {
                ...cartItems,
                [product.name] : product
            }
        }
        cartItems[product.name].inCart += 1;

    }else{
        product.inCart = 1;
        cartItems = {
        [product.name] : product
        }
    }
  
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}






onLoadCartNumbers();













//Carousel JS

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

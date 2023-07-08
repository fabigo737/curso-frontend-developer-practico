const menushort = document.querySelector('.desktop-menu')
const navbaremail = document.querySelector('.navbar-email')
const menuHamburgesa = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')
const carritoIcon = document.querySelector('.navbar-shopping-cart')
const cesta = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')



navbaremail.addEventListener('click', toggleMenuShort)
menuHamburgesa.addEventListener('click', toggleMenuMobile)
carritoIcon.addEventListener('click', toggleCesta)

function toggleMenuShort() {menushort.classList.toggle('inactive')}
function toggleMenuMobile() { menuMobile.classList.toggle('inactive')}
function toggleCesta() {
    if(menuMobile.classList.contains('inactive')){
         cesta.classList.toggle('inactive')

     }else{
        menuMobile.classList.add('inactive')
        cesta.classList.toggle('inactive')
     }
    }


const productList = []

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

for (product of productList){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    const img = document.createElement('img')
    img.setAttribute('src', product.image)
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
    
    const productInfoDiv = document.createElement('div')
    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price
    const productName = document.createElement('p')
    productName.innerHTML = product.name
   
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
    
    const productFigure = document.createElement('figure')
    const figureImg = document.createElement('img')
    figureImg.setAttribute('src', './icons/bt_add_to_cart.svg')
    
    productFigure.appendChild(figureImg)
    
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productFigure)

    productCard.appendChild(img)
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard)
}
const menus = [{
    image: 'coffee-bg.jpg', 
    name: 'tasty and healthy',
    price: {
        prices: 1599,
        cancelledPrice: 2099
    }
},
{
image: 'cofee-bg(2).jpg',
name:  'tasty and healthy',
price: {
    prices: 1888,
    cancelledPrice: 2590,
}

},
{
image: 'coffee.bg(3).jpg',
name:  'tasty and healthy',
price: {
prices: 3044,
cancelledPrice: 5565,
}

},
{
image: 'coffee.bg(4).jpg',
name:  'tasty and healthy',
price: {
prices: 1043,
cancelledPrice: 2090,
}

},
{
image: 'coffee.bg(4).jpg',
name:  'tasty and healthy',
price: {
prices: 1035,
cancelledPrice: 1999,
}

},
{
image: 'coffee.bg(4).jpg',
name:  'tasty and healthy',
price: {
    prices: 1299,
    cancelledPrice: 2799,
}

},

{
    image: 'cofee-bg(2).jpg',
    name:  'tasty and healthy',
    price: {
        prices: 1888,
        cancelledPrice: 2590,
    }
    },
    {
        image: 'cofee-bg(2).jpg',
        name:  'tasty and healthy',
        price: {
            prices: 1888,
            cancelledPrice: 2590,
        }  
    },
{
    image: 'cofee-bg(2).jpg',
    name:  'tasty and healthy',
    price: {
        prices: 1888,
        cancelledPrice: 2590,
    }
}
    
];
let menuHTML = '';
menus.forEach((menu) => {
    menuHTML += `
    <div class="box">
            <img src="${menu.image}" alt="">
            <h3>${menu.name}</h3>
            <div class="price"> $${(menu.price.prices / 100).toFixed(2)} <span>$${(menu.price.cancelledPrice / 100).toFixed(2)}</span></div>
            <a href="#" class="btn js-add-to-cart">add to cart</a>
                </div>
    `;
    
})
console.log(menuHTML);

document.querySelector('.js-menu-grid').innerHTML = menuHTML;

document.querySelector('.js-add-to-cart')
.forEach((button) )


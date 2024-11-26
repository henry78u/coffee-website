let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

let navbar = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    navbar.classList.toggle('active');
}

let cartitems = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartitems.classList.toggle('active')
}
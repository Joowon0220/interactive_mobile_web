window.addEventListener('DOMContentLoaded', function(){
    Motion();
})

var swiper1 = new Swiper(".swiper-container",{
    slidesPerView: 'auto',
    spaceBetween: -180,
});

var tabEarly = document.querySelector('.tab_early');
var tabPremium = document.querySelector('.tab_premium');
var imgEarly = document.querySelector('.early');
var imgPremium = document.querySelector('.premium');
var tabCustomer = document.querySelector('.tab_customer');
var tabShop = document.querySelector('.tab_shop');
var imgCustomer = document.querySelector('.customer');
var imgShop = document.querySelector('.shop');

tabEarly.addEventListener('click', function(){
    tabPremium.classList.remove('on');
    this.classList.add('on');
    imgEarly.classList.remove('op');
    imgPremium.classList.add('op');
})
tabPremium.addEventListener('click', function(){
    tabEarly.classList.remove('on');
    this.classList.add('on');
    imgEarly.classList.add('op');
    imgPremium.classList.remove('op');
})
tabCustomer.addEventListener('click', function(){
    tabShop.classList.remove('on');
    this.classList.add('on');
    imgCustomer.classList.remove('op');
    imgShop.classList.add('op');
})
tabShop.addEventListener('click', function(){
    tabCustomer.classList.remove('on');
    this.classList.add('on');
    imgCustomer.classList.add('op');
    imgShop.classList.remove('op');
})
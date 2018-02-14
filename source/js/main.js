/*МОБИЛЬНОЕ МЕНЮ*/
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

/*МОДАЛЬНОЕ ОКНО*/
var item_button = document.querySelector('.item__cart-link');
var order_button = document.querySelector('.hit__order');
var modal = document.querySelector('.modal');
var modal_bck = document.querySelector('.modal__bck');
var modal_button = document.querySelector('.modal__button');

item_button.addEventListener('click', function() {
  modal.style.display = 'block';
});


order_button.addEventListener('click', function() {
  modal.style.display = 'block';
});

modal_bck.addEventListener('click', function() {
  modal.style.display = 'none';
});

modal_button.addEventListener('click', function() {
  modal.style.display = 'none';
});

/*КАРТА*/
var map_iframe = document.querySelector('.contacts__map iframe');
var map_img = document.querySelector('.contacts__map-pic');

map_iframe.classList.remove("contacts__map-iframe--hidden");
map_img.classList.add("contacts__map-pic--hidden");

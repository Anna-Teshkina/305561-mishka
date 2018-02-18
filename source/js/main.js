/*МОБИЛЬНОЕ МЕНЮ*/
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

/*navMain.classList.remove('main-nav--opened');*/
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
var item_buttons = document.querySelectorAll('.item__cart-link');
var order_buttons = document.querySelectorAll('.hit__order');
var modal = document.querySelector('.modal');
var modal_bck = document.querySelector('.modal__bck');
var modal_button = document.querySelector('.modal__button');

function showModal(){
  document.querySelector('.modal').style.display = 'block';
}

modal_bck.onclick = function() {
  modal.style.display = 'none';
};

modal_button.onclick = function() {
  modal.style.display = 'none';
};

/*КАРТА*/
var map_iframe = document.querySelector('.contacts__map iframe');
var map_img = document.querySelector('.contacts__map-pic');

if (map_iframe != null) map_iframe.classList.remove("contacts__map-iframe--hidden");
if (map_img != null) map_img.classList.add("contacts__map-pic--hidden");

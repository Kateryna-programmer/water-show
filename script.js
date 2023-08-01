// открыть попап (любая форма)
$('.open-popup').click(function (event) {
  event.preventDefault();
  $('.popup-bg').fadeIn(600);
});
$('.close-popup').click(function () {
  $('.popup-bg').fadeOut(600);
});
// попап для моб
$('.close-mobile-popup').click(function () {
  $('header').css('display', 'flex');
  $('.header-button-div').css('.display', 'none');
  $('.burger').css('display', 'none');
});
// открыть гамбургер вместо хедера
$('.hamburger').click(function () {
  $('.burger').css('display', 'flex');
  $('header').css('display', 'none');
  $('.header-button-div-mobile').css('display', 'flex');
});
// открыть попап ШОУ
$('.to-popup-1').click(function () {
  $('.hotel-show-popup ').css('display', 'flex');
});
$('.to-popup-2').click(function () {
  $('.family-friends-popup ').css('display', 'flex');
});
$('.to-popup-3').click(function () {
  $('.corporate-events-popup ').css('display', 'flex');
});
$('.to-popup-4').click(function () {
  $('.municipal-events-popup ').css('display', 'flex');
});
// закрыть попап УСЛУГИ
$('.close-popup-service-1').click(function () {
  $('.hotel-show-popup').fadeOut(600);
});
$('.close-popup-service-2').click(function () {
  $('.family-friends-popup').fadeOut(500);
});
$('.close-popup-service-3').click(function () {
  $('.corporate-events-popup').fadeOut(600);
});
$('.close-popup-service-4').click(function () {
  $('.municipal-events-popup').fadeOut(600);
});
// возможность закрыть окно без клика на крестие

let btn1 = $('.to-popup-1');
let popup1 = $('.hotel-show-popup');
$(document).click(function (e) {
  if (
    !btn1.is(e.target) &&
    btn1.has(e.target).length === 0 &&
    !popup1.is(e.target) &&
    popup1.has(e.target).length === 0
  ) {
    popup1.fadeOut();
  }
});

let btn2 = $('.to-popup-2');
let popup2 = $('.family-friends-popup');
$(document).click(function (e) {
  if (
    !btn2.is(e.target) &&
    btn2.has(e.target).length === 0 &&
    !popup2.is(e.target) &&
    popup2.has(e.target).length === 0
  ) {
    popup2.fadeOut();
  }
});
let btn3 = $('.to-popup-3');
let popup3 = $('.corporate-events-popup');
$(document).click(function (e) {
  if (
    !btn3.is(e.target) &&
    btn3.has(e.target).length === 0 &&
    !popup3.is(e.target) &&
    popup3.has(e.target).length === 0
  ) {
    popup3.fadeOut();
  }
});
let btn4 = $('.to-popup-4');
let popup4 = $('.municipal-events-popup');
$(document).click(function (e) {
  if (
    !btn4.is(e.target) &&
    btn4.has(e.target).length === 0 &&
    !popup4.is(e.target) &&
    popup4.has(e.target).length === 0
  ) {
    popup4.fadeOut();
  }
});

// Виды шоу
$('.exclusive-nav').click(function () {
  $('.exclusive-show').css('display', 'flex');
  $('.day-show').hide(0);
  $('.night-show').hide(0);
});
$('.night-nav').click(function () {
  $('.exclusive-show').hide(0);
  $('.day-show').hide(0);
  $('.night-show').css('display', 'flex');
});
$('.day-nav').click(function () {
  $('.exclusive-show').hide(0);
  $('.night-show').hide(0);
  $('.day-show').css('display', 'flex');
});
// Меняю текст в форме для ШОУ
$('.open-popup-after-shows').click(function () {
  $('.popup h3').html('Fill your contact e-mail');
  $('.popup p').html('and our specialist will contact you within 24 hours');
  $('.popup input').attr({ type: 'email', placeholder: 'enter e-mail' });
});

// Слайдер
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  dotsClass: 'my-dots',
  autoplay: true,
  paddingCenter: 0,
  autoSpeed: 2000,
  prevArrow: $('.button-left '),
  nextArrow: $('.button-right'),
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});
// Открыть галерею
$('.wrapper p').click(function () {
  $('.container-gallery').fadeIn(300);
});
// закрыть не по клику
let btn = $('.wrapper p');
let gallery = $('.container-gallery');
$(document).click(function (e) {
  if (
    !btn.is(e.target) &&
    btn.has(e.target).length === 0 &&
    !gallery.is(e.target) &&
    gallery.has(e.target).length === 0
  ) {
    gallery.fadeOut();
  }
});
// слайдер только при мобилке
$(document).ready(function () {
  $('.wow-slider').slick({
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 619,
        settings: 'unslick',
        slidesToShow: 1,
        arrows: false,
      },
    ],
  });
});
// кнопка вверх
$(document).ready(function () {
  let btn = $('.button-up');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      btn.css('display', 'flex');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '100');
  });
});

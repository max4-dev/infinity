$(function () {

  $('.header__btn').on('click', function () {
    $('.menu').addClass('menu--active');
  });
  $('.menu__btn').on('click', function () {
    $('.menu').removeClass('menu--active');
  });

  $('.slider__inner').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button class="slider__prev" type="button"><svg width="42" height="21" viewBox="0 0 42 21" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="0.684754" transform="matrix(-1 0 0 1 42 10.1472)" fill="black"/><rect width="14.7991" height="0.704721" transform="matrix(-0.72659 -0.687072 0.72659 -0.687072 10.7529 21)" fill="black"/><rect width="14.7991" height="0.704721" transform="matrix(-0.72659 0.687072 0.72659 0.687072 10.7529 0)" fill="black"/></svg></button>',
    nextArrow: '<button class="slider__next" type="button"><svg width="42" height="21" viewBox="0 0 42 21" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="10.1472" width="42" height="0.684754" fill="black"/><rect width="14.7991" height="0.704721" transform="matrix(0.72659 -0.687072 -0.72659 -0.687072 31.2471 21)" fill="black"/><rect width="14.7991" height="0.704721" transform="matrix(0.72659 0.687072 -0.72659 0.687072 31.2471 0)" fill="black"/></svg></button>',
    responsive: [
    {
      breakpoint: 1420,
      settings: {
        arrows: false
      }
    }
  ]
  });

  $('.specifications-item').on('click', function() {
    $(this).toggleClass('specifications-item--active');
    $(this).find('.specifications-item__text-box').slideToggle();
  });

  $('.photo-slider__items').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: '<div class="container"><button class="photo-slider__next" type="button"><svg width="42" height="21" viewBox="0 0 42 21" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="10.1472" width="42" height="0.684754" fill="black"/><rect width="14.7991" height="0.704721" transform="matrix(0.72659 -0.687072 -0.72659 -0.687072 31.2471 21)" fill="black"/><rect width="14.7991" height="0.704721" transform="matrix(0.72659 0.687072 -0.72659 0.687072 31.2471 0)" fill="black"/></svg></button></div>',
    prevArrow: false,
    dots: true,
    responsive: [
    {
      breakpoint: 640,
      settings: {
        arrows: false
      }
    }
  ]
  });
  $(".menu a, .logo, .addres, .header__contacts-btn").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    /*Если сделали скролл на 100px задаём новый класс для header*/
    if (height > 90) {
      $('.header__top').addClass('header-fixed');
    } else {
      /*Если меньше 100px удаляем класс для header*/
      $('.header__top').removeClass('header-fixed');
    }
  });
  
});
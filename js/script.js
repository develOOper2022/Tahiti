window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__menu'),
    menuItem = document.querySelectorAll('.nav__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav__menu_active');
        })
    })
})

$(document).ready(function(){
    $('.carousel__main-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
    //   speed: 2000,
    //   autoplay: true,
    //   autoplaySpeed: 4000,
      asNavFor: '.carousel__nav-carousel',
      draggable: false
    });
    $('.carousel__nav-carousel').slick({
        slidesToShow: 4,
        // slidesToScroll: 1,
        asNavFor: '.carousel__main-carousel',
        dots: false,
        // centerMode: false,
        focusOnSelect: true,
        // variableWidth: true,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                arrows: false,
                // slidesToScroll: 3,
                // infinite: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
});
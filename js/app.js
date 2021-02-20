var lastScroll = 0;

jQuery(document).ready(function($) {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > lastScroll) {
            $(".top-navbar").addClass("sticky");
        } else if (scrollY < 20) {
            $(".top-navbar").removeClass("sticky");
        }
        lastScroll = scroll;
    });

    $(".menu-toggler-btn").click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    // $("#home").click()(function(){
    //     $(".menu-toggler-btn").removeClass("active");
    //     $(".navbar-menu").removeClass("active");
    // });
});

$('.click').on('click', function(){
    $('.menu-toggler-btn').removeClass('active');
    $('.navbar-menu').removeClass('active');
});

$('.navbar-menu a').on('click', function(){
    $('.menu-toggler-btn').removeClass('active');
    $('.navbar-menu').removeClass('active');
});


var swiper = new Swiper('.swiper-container', {
    effect: 'flip',
    grabCursor: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
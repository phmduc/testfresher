
$(document).ready(function(){
  $('.w-banner .bannerSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.w-listItem .list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    dots: true,
    infinite: true,
    speed: 300,
    responsive: [
          {
          breakpoint: 991,
          settings: 'unslick'
          }
    ]
  });

  $('.w-relatedItem .list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 300,
    responsive: [
      {
      breakpoint: 541,
      settings: {
        slidesToShow: 1,
      }
      }
]
  });

  $('.w-productDetail .content .count .minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.w-productDetail .content .count .plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  headerHeight = $('header').outerHeight(true)
  $(window).resize(function() {
    if (window.matchMedia('(max-width: 991px)').matches) {
      $('main').css("margin-top",`${headerHeight}px`);
    }
});

$('.hamburger-menu').click(function(){
  $('.hamburger-menu').toggleClass('active')
  $('#header .navbar .m-menu').slideToggle('slow');
})

$('#header .navbar .m-menu .hasSub a i').click(function(){
  $('#header .navbar .m-menu .hasSub .subMenu').slideToggle('slow');
})


  //  $(window).resize(function() {
  //   var width = $(window).width();
  //   if (width < 991){
  //     $('main').css("margin-top",`${headerHeight}px`);
  //   }
  // });
   });
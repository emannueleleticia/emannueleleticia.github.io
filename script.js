$('.hamburger').click (function(){
  $(this).toggleClass('open');
  $('.mobile-menu').toggleClass('menu-open');
});

$('a').click (function() {
    $('.hamburger').toggleClass('open');
    $('.mobile-menu').toggleClass('menu-open');
});

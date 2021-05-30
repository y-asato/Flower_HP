$('.hamburger').on('click',function(){
    $('.hamburger').toggleClass('close');
    $('.hero__nav').fadeToggle(500);
    $('body').toggleClass('noscroll');
});
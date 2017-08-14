$(document).ready(function(){

  $('.owl-banner').owlCarousel({
    loop: false,
    margin: 15,
    nav: true,
    navText: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });


});//end ready

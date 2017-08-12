$(document).ready(function(){

  $('.owl-banner').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    navText: false,
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

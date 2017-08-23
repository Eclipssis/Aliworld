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
    },
    responsiveRefreshRate: 50
  });

  $('.owl-images').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: false,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 5
      }
    },
    responsiveRefreshRate: 50
  });

  $('.owl-complaints').owlCarousel({
    loop: true,
    margin: 1,
    nav: true,
    navText: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    },
    responsiveRefreshRate: 50
  });

  

  function close_menu(argument) {
    $('.aside-nav').toggleClass('open');
    $('.fade-bg').toggleClass('active');
  }

  $('.js-toggle-menu').click(function () {
    close_menu()
  })

  $('.fade-bg').click(function () {
    close_menu()
  })

  $('.article__favorite').click(function () {
    $(this).toggleClass('active')
  })

  // Силизованый скролл
  $(".js-custom-scroll").mCustomScrollbar({
    theme:"dark"
  });


  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('.js-pasteSelected').attr('src', e.target.result);
        $('.js-pasteSelected').addClass('showing')
      }

      reader.readAsDataURL(input.files[0]);
    }
  }


  $('.js-showSelectedImage').on('change', function(){
    readURL(this);
  });

  $('.js-uploadImage').on('change', function(){
    readURL( this );
  });

});//end ready
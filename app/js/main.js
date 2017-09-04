$(document).ready(function(){

  $( document ).tooltip();

  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });

  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });

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
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      },
      1281: {
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
        $(input).parent(".item").find('img').attr('src', e.target.result);
        $(input).parent(".item").find('img').addClass('showing');
        $(input).parent(".item").find('.extra-images__close').addClass('active')
      }

      reader.readAsDataURL(input.files[0]);

      $('.extra-images').append("<div class='item'><div class='extra-images__close'></div><div class='extra-images__image'><img class='js-pasteSelected'></div><span class='chose_file'></span><input type='file' class='chose_file_input js-uploadImage'></div>");
    }
  }

  function readAvatar(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('.js-pasteSelected').attr('src', e.target.result);
        $('.js-pasteSelected').addClass('showing')
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  function readSingleImage(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('.js-pasteSingleImage').attr('src', e.target.result);
        $('.js-pasteSingleImage').addClass('showing')
        $('.js-delete-single-image').addClass('active')
        $('.single-image-upload').addClass('showing')
      }

      reader.readAsDataURL(input.files[0]);
    }
  }


  $(document).on('change', '.js-uploadAvatar', function () {
    readAvatar(this);
  });   


  $(document).on('change', '.js-uploadImage', function () {
    readURL(this);
  });

  $(document).on('change', '.js-uploadSingleImage', function () {
    readSingleImage(this);
  });



  $(document).on('click', '.extra-images__close', function () {
    $(this).parent().remove()
  });

  $(document).on('click', '.js-delete-single-image', function () {
    $('.js-pasteSingleImage').attr('src', '');
    $(this).removeClass('active')
    $('.single-image-upload').removeClass('showing')
  });

  $(document).on('click', '.chose_file', function (event) {
    var parent = $(event.target).parent();
    $(parent).find('.chose_file_input').click();
    return (false);
  });




  $('.adding-form .rating span').click(function () {
    var starValue = $(this).attr('data-number');
    var setRating = starValue * 20;
    $('.adding-form .rating li.active').css('width', setRating + '%');
  })

});//end ready

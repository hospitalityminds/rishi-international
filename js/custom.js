/* 
* ===========================================================
* MAIN SCRIPT- MESTER THEMES
* ===========================================================
* This script manage all the js functions and the 3r party plugins.
* 1- COUNTDOWN  SCRIPT START
* 2- DATEPICKER SCRIPT START
* 3- CHOOSE US SLIDER SCRIPT
* 4- SERVICES SLIDER SCRIPT
* 5- BLOG SLIDER JAVASCRIPT
* 6- MAIN BANNER JAVASCRIPT
* 7- FIXED HEADER ON - OFF
* 8- JS NOT FOR MOBILE (PARALLAX, OPACITY SCROLL)
* 9- TESTIMONIAL SLIDER SCRIPT
* 10- EVENT SLIDER SCRIPT
* 11- SLICK SLIDER ANIMATION JAVASCRIPT START
* 12- POPUP JAVASCRIPT
* 13- MASONRY GALLERY JAVASCRIPT
* 14- DLL RESPONSIVE MENU
* 15- NEWSLETTER JAVASCRIPT START
* 16- MAP JAVASCRIPT
* 17- MAP CUSTOM JAVASCRIPT
*/
$(document).ready(function(){
  "use strict";
  /*
  ==============================================================
  COUNTDOWN  SCRIPT START
  ==============================================================
  */
  if($('.countdown').length){
    $('.countdown').downCount({ date: '5/9/2018 12:00:00', offset: +1 });
    //$('.countdown').downCount({ date: 'Month/Date/Year 12:00:00', offset: +1 });
  }
  /*
  ==============================================================
  DATEPICKER SCRIPT START
  ==============================================================
  */
  if ( $('[data-toggle="datepicker"').length ){
    $('[data-toggle="datepicker"]').datepicker();
  }
  /*
  ==============================================================
  CHOOSE US SLIDER SCRIPT
  ==============================================================
  */
  if($('.why-choosus-slider').length){
    $('.why-choosus-slider').slick({
        draggable: true,
        arrows: true,
        dots: false,
        fade: true,
        speed: 900,
        infinite: true
    });
  }
  /*
  ==============================================================
  SERVICES SLIDER SCRIPT
  ==============================================================
  */
  if($('.services-slider').length){
    $('.services-slider').slick({
      draggable: true,
      arrows: false,
      dots: true,
      fade: true,
      speed: 900,
      autoplay: true,
      infinite: true,
      touchThreshold: 100
    });
  }
  /*
  ============================================================
  BLOG SLIDER JAVASCRIPT
  ============================================================
  */
  if($('.blog-slider').length){
    $('.blog-slider').slick({
      draggable: true,
      arrows: false,
      dots: true,
      fade: true,
      speed: 900,
      autoplay: true,
      infinite: true,
      touchThreshold: 100
    });
  }
  /*
  ============================================================
  MAIN BANNER JAVASCRIPT
  ============================================================
  */
  if($('.slider').length){
    $('.slider').slick({
      draggable: true,
      arrows: false,
      dots: true,
      fade: true,
      speed: 900,
      autoplay: true,
      infinite: true,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      touchThreshold: 100
    });
  }
  /*
  =======================================================================
  FIXED HEADER ON - OFF
  =======================================================================
  */
  if ($('.sticky-header').length) {
    if (window.matchMedia("(min-width: 768px)").matches) {
      $(function() {
          var header = $(".sticky-header");
          $(window).scroll(function() {
              var scroll = $(window).scrollTop();
              if (scroll >= 10) {
                  header.removeClass('affix-top').addClass("affix");
              } else {
                  header.removeClass("affix").addClass('affix-top');
              }
          });
      });
    }
  }
  /*
  ============================================================
  JS NOT FOR MOBILE (PARALLAX, OPACITY SCROLL)
  ============================================================
  */
  if( mobileDetect == false ) {
    /*
    =======================================================================
      PARALLAX
     =======================================================================
    */
    if ( $('.parallax-section').length ){
      $.stellar({
        horizontalScrolling: true,
        responsive: true
      }); 
    }; 
  
  }//END JS NOT FOR MOBILE
  /*
  ==============================================================
  TESTIMONIAL SLIDER SCRIPT
  ==============================================================
  */
  if($('.testimonial').length){
    $('.testimonial').slick({
       slidesToShow: 2,
        dots: false,
        autoplay: true,
        centerMode: true,
        arrows: true,
        centerPadding: "0px",
        responsive: [
        {
          breakpoint: 992,
          settings: {
              arrows: false,
              slidesToShow: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
              arrows: false,
              slidesToShow: 1
          }
        }, 
        {
          breakpoint: 670,
          settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 1
          }
        }]
    });
  }
  /*
  ==============================================================
  BRAND SLIDER SCRIPT
  ==============================================================
  */
  if($('.brand-slider').length){
    $('.brand-slider').slick({
       slidesToShow: 6,
        dots: false,
        autoplay: true,
        centerMode: true,
        arrows: true,
        centerPadding: "0px",
        responsive: [
        {
          breakpoint: 992,
          settings: {
              arrows: false,
              slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
              arrows: false,
              slidesToShow: 3
          }
        }, 
        {
          breakpoint: 670,
          settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 1
          }
        }]
    });
  }
  /*
  ==============================================================
  EVENT SLIDER SCRIPT
  ==============================================================
  */
  if($('.event-slider').length){
    $('.event-slider').slick({
       slidesToShow: 3,
        dots: true,
        autoplay: true,
        centerMode: true,
        arrows: false,
        vertical:true,
        centerPadding: "0px",
        responsive: [
        {
          breakpoint: 992,
          settings: {
              arrows: false,
              slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
              arrows: false,
              slidesToShow: 3
          }
        }, 
        {
          breakpoint: 670,
          settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 1
          }
        }]
    });
  }
  /*
  ============================================================
  SLICK SLIDER ANIMATION JAVASCRIPT START
  ============================================================
  */
  if($('.slick-slider').length){
    $('.slick-slider').on('init', function(e, slick) {
        var $firstAnimatingElements = $('.slick-slide:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    $('.slick-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
  }
  /*
  ============================================================
  POPUP JAVASCRIPT
  ============================================================
  */
  if($('.popup-gallery').length) {
    $('.popup-gallery').magnificPopup({
      delegate: '.popup-icon,.pop-icon',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-3d-unfold',
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup 
         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        // this.st.mainClass = this.st.el.attr('data-effect');
      }
      },
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        /*titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }*/
      }
    });
  }
  if($('.popup-youtube, .popup-vimeo, .popup-gmaps').length) {
    //VIDEO GMAPS POPUP
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      //disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
  }
  /*
  ============================================================
  MASONRY GALLERY JAVASCRIPT
  ============================================================
  */
  if ($('.masonry').length) {
      $(".masonry").imagesLoaded(function() {
          $(".masonry").masonry();
      });
  }
  if ($('.items-grid').length) {
      var fselector = 0,
          itemsGrid = $(".items-grid");
      (function($) {
          "use strict";
          var isotopeMode;
          if (itemsGrid.hasClass("masonry")) {
              isotopeMode = "masonry";
          } else {
              isotopeMode = "fitRows"
          }
          itemsGrid.imagesLoaded(function() {
              itemsGrid.isotope({
                  itemSelector: '.mix',
                  layoutMode: isotopeMode,
                  filter: fselector
              });
          });
          $(".port-filter").on('click', '.filter', function() {
              $(".filter").removeClass("active");
              $(this).addClass("active");
              fselector = $(this).attr('data-filter');
              itemsGrid.isotope({
                  itemSelector: '.mix',
                  layoutMode: isotopeMode,
                  filter: fselector
              });
              return false;
          });
      })(jQuery);
  }
  if ($('#items-grid2,#items-grid3').length) {
      var fselector = 0,
          itemsGrid = $("#items-grid2,#items-grid3");
      (function($) {
          "use strict";
          var isotopeMode;
          if (itemsGrid.hasClass("masonry")) {
              isotopeMode = "masonry";
          } else {
              isotopeMode = "fitRows"
          }
          itemsGrid.imagesLoaded(function() {
              itemsGrid.isotope({
                  itemSelector: '.mix',
                  layoutMode: isotopeMode,
                  filter: fselector
              });
          });
          $(".port-filter").on('click', '.filter', function() {
              $(".filter").removeClass("active");
              $(this).addClass("active");
              fselector = $(this).attr('data-filter');
              itemsGrid.isotope({
                  itemSelector: '.mix',
                  layoutMode: isotopeMode,
                  filter: fselector
              });
              return false;
          });
      })(jQuery);
  }
  if ($('js-height-fullscr').length) {
      $(".js-height-fullscr").height($(window).height());
  }
  /*
  ============================================================== 
  DLL RESPONSIVE MENU
  ============================================================== 
  */
  if(typeof($.fn.dlmenu) == 'function'){
    $('#responsive-navigation').each(function(){
      $(this).find('.dl-submenu').each(function(){
      if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
        var parent_nav = $('<li class="menu-item parent-menu"></li>');
        parent_nav.append($(this).siblings('a').clone());
        
        $(this).prepend(parent_nav);
      }
      });
      $(this).dlmenu();
    });
  }
  /*
  =======================================================================
  NEWSLETTER JAVASCRIPT
  =======================================================================
  */
  $(function () {
    'use strict';
      var $form = $('#mc-embedded-subscribe-form');

      $('#mc-embedded-subscribe').on('click', function(event) {
      if(event) event.preventDefault();
      register($form);
      });
    });

    function register($form) {
      $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
      cache       : false,
      dataType    : 'json',
      contentType: "application/json; charset=utf-8",
      error       : function(err) { $('#notification_container').html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>Could not connect to server. Please try again later.</div>'); },
      success     : function(data) {
       
        if (data.result != "success") {
        var message = data.msg;
        $('#notification_container').html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+message+'</div>');
        } 

        else {
        var message = data.msg;
        $('#notification_container').html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+message+'</div>');
        }
      }
    });
  }
  /*
  =======================================================================
  MAP JAVASCRIPT
  =======================================================================
  */
  if ( $('#map-canvas').length ){
    initMap();
  }
  /*
  =======================================================================
  MAP CUSTOM JAVASCRIPT
  =======================================================================
  */
  var gmMapDiv = $("#map-canvas");
  function initMap(){
    (function($){
        var gmCenterAddress = gmMapDiv.attr("data-address");
        var gmMarkerAddress = gmMapDiv.attr("data-address");
        gmMapDiv.gmap3({
            action: "init",
            marker: {
                address: gmMarkerAddress,
                options: {
                    icon: "images/loc-marker.png" /* Location marker */
                }
            },
            map: {
              options: {
                  zoom: 17,
                  zoomControl: true,
                  zoomControlOptions: {
                      style: google.maps.ZoomControlStyle.SMALL
                  },
                  mapTypeControl: false, /* hide/show (false/true) mapTypeControl*/
                  scaleControl: false, /*hide/show (false/true) scaleControl */
                  scrollwheel: false, /*hide/show (false/true) scrollwheel*/
                  streetViewControl: false, /*hide/show (false/true) streetViewControl*/
                  draggable: true,
                  styles:[ { stylers: [{ invert_lightness: true }, { saturation: -100 }, { lightness: 10 }] } ] /*CHANGE STYLE (colors and etc.) */
              }
            }
        });
    })(jQuery);
  }
});









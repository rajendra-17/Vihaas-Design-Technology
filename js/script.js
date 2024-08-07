/* ----------------- Start JS Document ----------------- */


/* ----------------- Start JS Document ----------------- */

// Page Loader
$(window).load(function () {
    "use strict";    
  $('#loader').fadeOut();
});

$(document).ready(function ($) {
  "use strict"; 
 
     /*---------------------------------------------------*/
    /* Progress Bar
    /*---------------------------------------------------*/    
    $('.skill-shortcode').appear(function() {
      $('.progress').each(function(){ 
        $('.progress-bar').css('width',  function(){ 
          return ($(this).attr('data-percentage')+'%')});
      });
  },{accY: -100});  
  
  
    /*--------------------------------------------------*/
    /* Counter
    /*--------------------------------------------------*/   
        
    $('.timer').countTo();
    $('.counter-item').appear(function() {
        $('.timer').countTo();
    },{
      accY: -100
    });    
  
  /*----------------------------------------------------*/
  /*  Nav Menu & Search
  /*----------------------------------------------------*/
  
  $(".nav > li:has(ul)").addClass("drop");
  $(".nav > li.drop > ul").addClass("dropdown");
  $(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");
  
  $('.show-search').click(function() {
    $('.search-form').fadeIn(300);
    $('.search-form input').focus();
  });
  $('.search-form input').blur(function() {
    $('.search-form').fadeOut(300);
  });
        
  /*----------------------------------------------------*/
  /*  Back Top Link
  /*----------------------------------------------------*/

    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    })
    
  /*----------------------------------------------------*/
  /*  Sliders & Carousel
  /*----------------------------------------------------*/
  
  ////------- Touch Slider
  var time = 4.4,
    $progressBar,
    $bar,
    $elem,
    isPause,
    tick,
    percentTime;
  $('.touch-slider').each(function(){
    var owl = jQuery(this),
      sliderNav = $(this).attr('data-slider-navigation'),
      sliderPag = $(this).attr('data-slider-pagination'),
      sliderProgressBar = $(this).attr('data-slider-progress-bar');
      
    if ( sliderNav == 'false' || sliderNav == '0' ) {
      var returnSliderNav = false
    }else {
      var returnSliderNav = true
    }
    
    if ( sliderPag == 'true' || sliderPag == '1' ) {
      var returnSliderPag = true
    }else {
      var returnSliderPag = false
    }
    
    if ( sliderProgressBar == 'true' || sliderProgressBar == '1' ) {
      var returnSliderProgressBar = progressBar
      var returnAutoPlay = false
    }else {
      var returnSliderProgressBar = false
      var returnAutoPlay = true
    }
    
    owl.owlCarousel({
      navigation : returnSliderNav,
      pagination: returnSliderPag,
      slideSpeed : 400,
      paginationSpeed : 400,
      lazyLoad : true,
      singleItem: true,
      autoHeight : true,
      autoPlay: returnAutoPlay,
      stopOnHover: returnAutoPlay,
      transitionStyle : "fade",
      afterInit : returnSliderProgressBar,
      startDragging : pauseOnDragging
    });
    
  });

    function progressBar(elem){
    $elem = elem;
    buildProgressBar();
    start();
    }
  
    function buildProgressBar(){
    $progressBar = $("<div>",{
      id:"progressBar"
    });
    $bar = $("<div>",{
      id:"bar"
    });
    $progressBar.append($bar).prependTo($elem);
    }
  
    function pauseOnDragging(){
      isPause = true;
    }
  
  ////------- Projects Carousel
  $(".projects-carousel").owlCarousel({
    navigation : true,
    pagination: false,
    slideSpeed : 400,
    stopOnHover: true,
      autoPlay: 3000,
      items : 4,
      itemsDesktopSmall : [900,3],
    itemsTablet: [600,2],
    itemsMobile : [479, 1]
  });
   
  
  ////------- Testimonials Carousel
  $(".testimonials-carousel").owlCarousel({
    navigation : true,
    pagination: false,
    slideSpeed : 2500,
    stopOnHover: true,
      autoPlay: 3000,
      singleItem:true,
    autoHeight : true,
    transitionStyle : "fade"
  });
  
    
  ////------- Custom Carousel
  $('.custom-carousel').each(function(){
    var owl = jQuery(this),
      itemsNum = $(this).attr('data-appeared-items'),
      sliderNavigation = $(this).attr('data-navigation');
      
    if ( sliderNavigation == 'false' || sliderNavigation == '0' ) {
      var returnSliderNavigation = false
    }else {
      var returnSliderNavigation = true
    }
    if( itemsNum == 1) {
      var deskitemsNum = 1;
      var desksmallitemsNum = 1;
      var tabletitemsNum = 1;
    } 
    else if (itemsNum >= 2 && itemsNum < 4) {
      var deskitemsNum = itemsNum;
      var desksmallitemsNum = itemsNum - 1;
      var tabletitemsNum = itemsNum - 1;
    } 
    else if (itemsNum >= 4 && itemsNum < 8) {
      var deskitemsNum = itemsNum -1;
      var desksmallitemsNum = itemsNum - 2;
      var tabletitemsNum = itemsNum - 3;
    } 
    else {
      var deskitemsNum = itemsNum -3;
      var desksmallitemsNum = itemsNum - 6;
      var tabletitemsNum = itemsNum - 8;
    }
    owl.owlCarousel({
      slideSpeed : 300,
      stopOnHover: true,
      autoPlay: false,
      navigation : returnSliderNavigation,
      pagination: false,
      lazyLoad : true,
      items : itemsNum,
      itemsDesktop : [1000,deskitemsNum],
      itemsDesktopSmall : [900,desksmallitemsNum],
      itemsTablet: [600,tabletitemsNum],
      itemsMobile : false,
      transitionStyle : "goDown",
    });
  });
      
    ////------- Testimonials Carousel
  $(".fullwidth-projects-carousel").owlCarousel({
    navigation : false,
    pagination: false,
    slideSpeed : 400,
    stopOnHover: true,
      autoPlay: 3000,
      items : 5,
      itemsDesktopSmall : [900,3],
    itemsTablet: [600,2],
    itemsMobile : [479, 1]
  });
    
  /*----------------------------------------------------*/
  /*  Tabs
  /*----------------------------------------------------*/
  
  $('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  
  
  /*----------------------------------------------------*/
  /*  Css3 Transition
  /*----------------------------------------------------*/
  
  $('*').each(function(){
    if($(this).attr('data-animation')) {
      var $animationName = $(this).attr('data-animation'),
        $animationDelay = "delay-"+$(this).attr('data-animation-delay');
      $(this).appear(function() {
        $(this).addClass('animated').addClass($animationName);
        $(this).addClass('animated').addClass($animationDelay);
      });
    }
  });
  
  
    
  /*----------------------------------------------------*/
  /*  Animation Progress Bars
  /*----------------------------------------------------*/
  
  $("[data-progress-animation]").each(function() {
    
    var $this = $(this);
    
    $this.appear(function() {
      
      var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
      
      if(delay > 1) $this.css("animation-delay", delay + "ms");
      
      setTimeout(function() { $this.animate({width: $this.attr("data-progress-animation")}, 800);}, delay);

    }, {accX: 0, accY: -50});

  });
  
  /*----------------------------------------------------*/
  /*  Milestone Counter
  /*----------------------------------------------------*/
  
  jQuery('.milestone-block').each(function() {
    jQuery(this).appear(function() {
      var $endNum = parseInt(jQuery(this).find('.milestone-number').text());
      jQuery(this).find('.milestone-number').countTo({
        from: 0,
        to: $endNum,
        speed: 4000,
        refreshInterval: 60,
      });
    },{accX: 0, accY: 0});
  });
  
  /*----------------------------------------------------*/
  /*  Nivo Lightbox
  /*----------------------------------------------------*/
  
  $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
    errorMessage: 'The requested content cannot be loaded. Please try again later.'
  });
  
  
  /*----------------------------------------------------*/
  /*  Change Slider Nav Icons
  /*----------------------------------------------------*/
  
  $('.touch-slider').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
  $('.touch-slider').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
  $('.touch-carousel, .testimonials-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
  $('.touch-carousel, .testimonials-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
  $('.read-more').append('<i class="fa fa-angle-right"></i>');
  
  /*----------------------------------------------------*/
  /*  Tooltips & Fit Vids & Parallax & Text Animations
  /*----------------------------------------------------*/
  
  $("body").fitVids();
  
  $('.itl-tooltip').tooltip();
  
  $('.bg-parallax').each(function() {
    $(this).parallax("30%", 0.2);
  });
  
  $('.tlt').textillate({
    loop: true,
    in: {
      effect: 'fadeInUp',
      delayScale: 2,
      delay: 50,
      sync: false,
      shuffle: false,
      reverse: true,
    },
    out: {
      effect: 'fadeOutUp',
      delayScale: 2,
      delay: 50,
      sync: false,
      shuffle: false,
      reverse: true,
    },
  });
 
});

/*----------------------------------------------------*/
/*  Portfolio Isotope
/*----------------------------------------------------*/

jQuery(window).load(function(){
  
  var $container = $('#portfolio');
  $container.isotope({
    layoutMode : 'masonry',
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false,
    }
  });

  $('.portfolio-filter ul a').click(function(){
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      }
    });
    return false;
  });

  var $optionSets = $('.portfolio-filter ul'),
      $optionLinks = $optionSets.find('a');
  $optionLinks.click(function(){
    var $this = $(this);
    if ( $this.hasClass('selected') ) { return false; }
    var $optionSet = $this.parents('.portfolio-filter ul');
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected'); 
  });
  
});


/**
 * Slick Nav 
 */

$('.wpb-mobile-menu').slicknav({
  prependTo: '.navbar-header',
  parentTag: 'margo',
  allowParentLinks: true,
  duplicate: false,
  label: '',
  closedSymbol: '<i class="fa fa-angle-right"></i>',
  openedSymbol: '<i class="fa fa-angle-down"></i>',
});

/**
 * stellar js
 */
$.stellar({
   horizontalOffset: 80,
    verticalOffset: 150
});
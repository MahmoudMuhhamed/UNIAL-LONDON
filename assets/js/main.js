(function ($) {
  "use strict";
  
  // ==========================================
  //      Start Document Ready function
  // ==========================================
  $(document).ready(function () {



    // ============= Student dashbord sidebar js start=================
    // ========================== Course List filter bar btn start ================================
  $('.toggle-student-dashbord-button').on('click', function () {
    $('.student-dashboard-sidebar').addClass('active');
    $('.student-overlay-sidebar').addClass('show');
  });

  $('.sidebar-close, .student-overlay-sidebar').on('click', function () {
    $('.student-dashboard-sidebar').removeClass('active');
    $('.student-overlay-sidebar').removeClass('show');
  });
  // ========================== Course List filter bar btn End ================================
    // ============= Student dashbord sidebar js end=================


    // ========================= Our Popular Tutors Slider Js Start ==============
 $('.tastimonial-six-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1500,
  dots: false,
  pauseOnHover: true,
  arrows: true,
  draggable: true,
  rtl: $('html').attr('dir') === 'rtl' ? true : false,
  speed: 900,
  infinite: true,
  nextArrow: '#tastimonial-six-next',
  prevArrow: '#tastimonial-six-prev',
  responsive: [
    {
      breakpoint: 1299,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    },
  ]
});  
// ========================= Our Popular Tutors Slider Js end ===================




 // ========================= Our Popular Tutors Slider Js Start ==============
 $('.our-popular-tutors-six-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1500,
  dots: false,
  pauseOnHover: true,
  arrows: true,
  draggable: true,
  rtl: $('html').attr('dir') === 'rtl' ? true : false,
  speed: 900,
  infinite: true,
  nextArrow: '#our-popular-tutors-six-next',
  prevArrow: '#our-popular-tutors-six-prev',
  responsive: [
    {
      breakpoint: 1299,
      settings: {
        slidesToShow: 3,
        arrows: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    },
  ]
});  
// ========================= Our Popular Tutors Slider Js end ===================




// ================admin dashbord start========================  


  // ========================== Course List filter bar btn start ================================
  $('.toggle-dashbord-button').on('click', function () {
    $('.dashboard-sidebar').addClass('active');
    $('.side-overlay').addClass('show');
  });

  $('.sidebar-close, .side-overlay').on('click', function () {
    $('.dashboard-sidebar').removeClass('active');
    $('.side-overlay').removeClass('show');
  });
  // ========================== Course List filter bar btn End ================================

  

  // ================== Password Show Hide Js Start ==========
  // $(".toggle-password").on('click', function() {
  //   $(this).toggleClass("active");
  //   var input = $($(this).attr("id"));
  //   if (input.attr("type") == "password") {
  //     input.attr("type", "text");
  //     $(this).removeClass('ph ph-eye-closed');
  //     $(this).addClass('ph ph-eye');
  //   } else {
  //     input.attr("type", "password");
  //       $(this).addClass('ph ph-eye-closed');
  //   }
  // });

  $(".toggle-password").on('click', function() {
    $(this).toggleClass("active");
    
    // Get the target input field
    var input = $("#" + $(this).attr("id").replace("toggle-", ""));
    
    if (input.attr("type") === "password") {
        input.attr("type", "text");
        $(this).removeClass('ph-bold ph-eye-closed').addClass('ph-bold ph-eye');
    } else {
        input.attr("type", "password");
        $(this).removeClass('ph-bold ph-eye').addClass('ph-bold ph-eye-closed');
    }
});

  // ========================= Password Show Hide Js End ===========================

// ==============react charts end===================

new DataTable('#example', {
  scrollX: true,
  autoWidth: false,
  info: false,
  paging: false,
  searching: false,
});

new DataTable('#example-two', {
  scrollX: true,
  autoWidth: false,
  info: false,
  paging: false,
  searching: false,
});

new DataTable('#example-three', {
  scrollX: true,
  autoWidth: false,
  info: false,
  paging: false,
  searching: false,
});

new DataTable('#example-four', {
  scrollX: true,
  autoWidth: false,
  info: false,
  paging: false,
  searching: false,
});

new DataTable('#example-five', {
  info: false,
  paging: false,
  searching: false,
  scrollX: true,
});




// ================admin dashbord end========================  



 // ========================= Text Rotation Js Start ==========================
    const text = document.querySelector(".circle__text");

    if(text) {
      text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) => `<span style="transform:rotate(${i * 11.5}deg)">${char}</span>`
        )
      .join("");
    }

    // Text Two
    const textTwo = document.querySelector(".circle__desc");

    if(textTwo) {
      textTwo.innerHTML = textTwo.innerText
      .split("")
      .map(
        (char, i) => `<span style="transform:rotate(${i * 11.5}deg)">${char}</span>`
        )
      .join("");
    }
  // ========================= Text Rotation Js End ==========================


// ============about us five js start==============
 // Floating progress bar
 $(".progress-wrapper").each(function(){
  var percentage = $(this).attr("data-perc");
  var floatingLabel = $(this).find(".floating-label");

  // Set CSS variable to be used in keyframes
  floatingLabel.css("--left-percentage", percentage);
  
  // Trigger reflow to restart animation
  floatingLabel[0].offsetWidth; // Force reflow
  floatingLabel.css("animation-name", "none");
  floatingLabel.css("inset-inline-start", percentage); // Ensure final position is correct
  floatingLabel.css("left", ""); // If 'left' was explicitly used
  floatingLabel.css("animation-name", "animateFloatingLabel");
});



// Semi Circle progress bar
$(".progressBar").each(function(){
  var $bar = $(this).find(".circleBar");
  var $val = $(this).find(".barNumber");
  var perc = parseInt( $val.text(), 10);

  $({p:0}).animate({p:perc}, {
      duration: 3000,
      easing: "swing",
      step: function(p) {
      $bar.css({
          transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
          // 45 is to add the needed rotation to have the green borders at the bottom
      });
      $val.text(p|0);
      }
  });
});
// ===========about us five js end===============




    // ========================= Brand Slider Js Start ==============
    $('.faq-brand-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      centerPadding: '100px',
      autoplaySpeed: 2000,
      speed: 1500,
      dots: false,
      pauseOnHover: true,
      arrows: false,
      draggable: true,
      rtl: $('html').attr('dir') === 'rtl' ? true : false,
      speed: 900,
      infinite: true,
      nextArrow: '#brand-next',
      prevArrow: '#brand-prev',
      responsive: [
        {
          breakpoint: 1399,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 424,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 359,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    });  
    // ========================= Brand Slider Js End ===================
      


 // ========================= testimonial-five Slider Js Start ==============
 $('.testimonial-five-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1500,
  dots: false,
  pauseOnHover: true,
  arrows: true,
  draggable: true,
  rtl: $('html').attr('dir') === 'rtl' ? true : false,
  speed: 900,
  infinite: true,
  nextArrow: '#testimonial-five-next',
  prevArrow: '#testimonial-five-prev',
  responsive: [
    {
      breakpoint: 1299,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    },
  ]
});  
// ========================= testimonial-five-slider Js End ===================


 // ========================= our-popular-five Slider Js Start ==============
 $('.our-popular-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1500,
  dots: false,
  pauseOnHover: true,
  arrows: true,
  draggable: true,
  rtl: $('html').attr('dir') === 'rtl' ? true : false,
  speed: 900,
  infinite: true,
  nextArrow: '#our-popular-next',
  prevArrow: '#our-popular-prev',
  responsive: [
    {
      breakpoint: 1299,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    },
  ]
});  
// ========================= our-popular-five-slider Js End ===================


      /*===========================================
	=         Marquee Active         =
    =============================================*/
    if ($(".marquee_mode").length) {
      $('.marquee_mode').marquee({
          speed: 100,
          gap: 0,
          delayBeforeStart: 0,
          direction: $('html').attr('dir') === 'rtl' ? 'right' : 'left',
          duplicated: true,
          pauseOnHover: true,
          startVisible:true,
      });
  }


  // ============== Mobile Menu Sidebar & Offcanvas Js Start ========
  $('.toggle-mobileMenu').on('click', function () {
    $('.mobile-menu').addClass('active');
    $('.side-overlay').addClass('show');
    $('body').addClass('scroll-hide-sm');
  }); 

  $('.close-button, .side-overlay').on('click', function () {
    $('.mobile-menu').removeClass('active');
    $('.side-overlay').removeClass('show');
    $('body').removeClass('scroll-hide-sm');
  }); 
  // ============== Mobile Menu Sidebar & Offcanvas Js End ========
  
  // ============== Mobile Nav Menu Dropdown Js Start =======================
  var windowWidth = $(window).width(); 
  
  $('.has-submenu').on('click', function () {
    var thisItem = $(this); 
    
    if(windowWidth < 992) {
      if(thisItem.hasClass('active')) {
        thisItem.removeClass('active')
      } else {
        $('.has-submenu').removeClass('active')
        $(thisItem).addClass('active')
      }
      
      var submenu = thisItem.find('.nav-submenu');
      
      $('.nav-submenu').not(submenu).slideUp(300);
      submenu.slideToggle(300);
    }
    
  });
  // ============== Mobile Nav Menu Dropdown Js End =======================
    
  // ===================== Scroll Back to Top Js Start ======================
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on('scroll', function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.progress-wrap').addClass('active-progress');
    } else {
      jQuery('.progress-wrap').removeClass('active-progress');
    }
  });
  jQuery('.progress-wrap').on('click', function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
  // ===================== Scroll Back to Top Js End ======================

  // ========================== add active class to ul>li top Active current page Js Start =====================
function dynamicActiveMenuClass(selector) {
  let FileName = window.location.pathname.split("/").reverse()[0];

  // If we are at the root path ("/" or no file name), keep the activePage class on the Home item
  if (FileName === "" || FileName === "index.html") {
    // Keep the activePage class on the Home link
    selector.find("li.nav-menu__item.has-submenu").eq(0).addClass("activePage");
  } else {
    // Remove activePage class from all items first
    selector.find("li").removeClass("activePage");

    // Add activePage class to the correct li based on the current URL
    selector.find("li").each(function () {
      let anchor = $(this).find("a");
      if ($(anchor).attr("href") == FileName) {
        $(this).addClass("activePage");
      }
    });

    // If any li has activePage element, add class to its parent li
    selector.children("li").each(function () {
      if ($(this).find(".activePage").length) {
        $(this).addClass("activePage");
      }
    });
  }
}

if ($('ul').length) {
  dynamicActiveMenuClass($('ul'));
}
  // ========================== add active class to ul>li top Active current page Js End =====================

    
  // ========================== Select2 Js Start =================================
  $(document).ready(function() {
    $('.js-example-basic-single').select2();
  });
  // ========================== Select2 Js End =================================
  
  // ========================= Brand Slider Js Start ==============
  $('.brand-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,
    nextArrow: '#brand-next',
    prevArrow: '#brand-prev',
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 6,
          arrows: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          arrows: false,
        }
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
    ]
  });  
  // ========================= Brand Slider Js End ===================
  
  // ========================= Brand Slider Js Start ==============
  $('.features-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,
    nextArrow: '#features-next',
    prevArrow: '#features-prev',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });  
  // ========================= Brand Slider Js End ===================

  // ========================= Wishlist Button Js Start ===================
  $('.wishlist-btn').on('click', function () {
    $(this).removeClass('text-main-two-600'); 
    $(this).toggleClass('text-white bg-main-two-600'); 
  })
  // ========================= Wishlist Button Js End ===================
  
  // ========================= Instructor Button Js Start ===================
  $('.social-infos .social-infos__button').on('click', function () {
    $('.social-list').not($(this).siblings('.social-list')).removeClass('d-flex'); 
    $('.social-infos .social-infos__button').not($(this)).removeClass('active'); 
    $(this).siblings('.social-list').toggleClass('d-flex'); 
    $(this).toggleClass('active'); 
  });
  // ========================= Instructor Button Js End ===================


  // ========================= Instructor Button Js Start ===================
  $('.our-popular-five .our-popular-five__button').on('click', function () {
    $('.social-list').not($(this).siblings('.social-list')).removeClass('d-flex'); 
    $('.our-popular-five .our-popular-five__button').not($(this)).removeClass('active'); 
    $(this).siblings('.social-list').toggleClass('d-flex'); 
    $(this).toggleClass('active'); 
  });
  // ========================= Instructor Button Js End ===================

  // ========================= Brand Slider Js Start ==============
  $('.instructor-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,
    nextArrow: '#instructor-next',
    prevArrow: '#instructor-prev',
    responsive: [
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });  
  // ========================= Brand Slider Js End ===================

   // =========================Testimonials Slider Js Start ===================
   $('.testimonials__thumbs-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    asNavFor: '.testimonials__slider'
  });

  $('.testimonials__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonials__thumbs-slider',
    dots: false,
    arrows: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    focusOnSelect: true,
    nextArrow: '#testimonials-next',
    prevArrow: '#testimonials-prev',
  });
  // =========================Testimonials Slider Js End ===================

  
  // ========================= magnific Popup Js Start =====================
  $('.play-button').magnificPopup({
    type:'iframe',
    removalDelay: 300,
    mainClass: 'mfp-fade',
  });
  // ========================= magnific Popup Js End =====================
  

   // ========================= Counter Up Js End ===================
   const counterUp = window.counterUp.default;

   const callback = (entries) => {
     entries.forEach((entry) => {
       const el = entry.target;
       if (entry.isIntersecting && !el.classList.contains('is-visible')) {
         counterUp(el, {
           duration: 2000,
           delay: 16,
         });
         el.classList.add('is-visible');
       }
     });
   };
 
   const IO = new IntersectionObserver(callback, { threshold: 1 });
 
   // Counter Two for each
   const counterNumbers = document.querySelectorAll('.counter');
   if (counterNumbers.length > 0) {
     counterNumbers.forEach((counterNumber) => {
       IO.observe(counterNumber);
     });
   }

  // ========================= Brand Slider Js Start ==============
  $('.category-item-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,
    nextArrow: '#category-next',
    prevArrow: '#category-prev',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });  
  // ========================= Brand Slider Js End ===================

  // ========================= Testimonials Slider Two Js Start ==============
  $('.testimonials-two-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,
    nextArrow: '#testimonials-two-next',
    prevArrow: '#testimonials-two-prev',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });  
  // ========================= Testimonials Slider Two Js End ===================
  
  // ========================= Background Image Js Start ===================
    $(".background-img").css('background-image', function () {
      var bg = 'url(' + $(this).data("background-image") + ')';
      return bg;
    });
  // ========================= Background Image Js End ===================
  
  // ========================= Testimonials Slider Two Js Start ==============
  $('.banner-three__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,
    fade: true,
    nextArrow: '#banner-three-next',
    prevArrow: '#banner-three-prev',
  });

  $('.banner-three__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.wow').css('visibility', 'hidden').removeClass('animated'); 
  });

  $('.banner-three__slider').on('afterChange', function(event, slick, currentSlide) {
    new WOW().init();
    $('.wow').css('visibility', 'visible'); 
  });
// ========================= Testimonials Slider Two Js End ===================

  // ========================= Testimonials Slider Two Js End ===================
  
  // ========================= Testimonials Slider Two Js Start ==============
  $('.testimonials-three-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: '#testimonials-three-next',
    prevArrow: '#testimonials-three-prev',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });  
  // ========================= Testimonials Slider Two Js End ===================

  // ========================= Brand Slider Js Start ==============
  $('.blog-two-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,
    nextArrow: '#blog-two-next',
    prevArrow: '#blog-two-prev',
    responsive: [
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });  
  // ========================= Brand Slider Js End ===================

  // ========================== Range Slider Js Start =====================
   $(function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 1000,
        values: [ 100, 1000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  });
  
  // ========================== Course List filter bar btn start ================================
  $('.list-bar-btn').on('click', function () {
    $('.sidebar').addClass('active');
    $('.side-overlay').addClass('show');
  });

  $('.sidebar-close, .side-overlay').on('click', function () {
    $('.sidebar').removeClass('active');
    $('.side-overlay').removeClass('show');
  });
  // ========================== Course List filter bar btn End ================================

  // ========================== Tooltip Start ================================
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  // ========================== Tooltip Start End ================================

  // ================== Password Show Hide Js Start ==========
  $(".toggle-password").on('click', function() {
    $(this).toggleClass("active");
    var input = $($(this).attr("id"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
      $(this).removeClass('ph-bold ph-eye-closed');
      $(this).addClass('ph-bold ph-eye');
    } else {
      input.attr("type", "password");
        $(this).addClass('ph-bold ph-eye-closed');
    }
  });
  // ========================= Password Show Hide Js End ===========================
  
  // ========================= Player Js Start ===========================
    const player = new Plyr('#player');
    const featuredPlayer = new Plyr('#featuredPlayer');
  // ========================= Player Js End ===========================
  
  // ========================= Brand Slider Js Start ==============
  $('.tutor-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,
    nextArrow: '#tutor-next',
    prevArrow: '#tutor-prev',
    responsive: [
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });  
  // ========================= Brand Slider Js End ===================

  // ========================= Increment & Decrement Js Start ===================
  var minus = $('.quantity__minus');
  var plus = $('.quantity__plus');

  $(plus).on('click', function () {
    var input = $(this).siblings('.quantity__input');
    var value = input.val(); 
    value++;
    input.val(value); 
  }); 

  $(minus).on('click', function () {
    var input = $(this).siblings('.quantity__input');
    var value = input.val(); 
    if(value > 1) {
      value--;
    }
    input.val(value); 
  }); 
  // ========================= Increment & Decrement Js End ===================
  
  // ========================= Review Js Start ==============
  $('.review-slider, .review-slider-two').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: true,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,
    nextArrow: '#review-slider-next',
    prevArrow: '#review-slider-prev',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });  
  // ========================= Review Js End ===================

  // ========================= Wow Js Start ===================
  new WOW().init();
  // ========================= Wow Js End ===================

  // ========================= AOS Animation Js Start ===================
  AOS.init({
    offset: 40,
    duration: 1000,
    // once: true,
    easing: 'ease',
  });
  // ========================= AOS Animation Js End ===================

  $('.masonry__image').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery:{
      enabled:true
    }
  });

    // ========================= Color List Js Start ===================
    $('.color-list__button').on('click', function () {
      $('.color-list__button').removeClass('active'); 
  
      if(!$(this).hasClass('active')) {
        $(this).addClass('active');
        $(this).removeClass('border-neutral-50');
      } else {
        $(this).removeClass('active');
        $(this).addClass('border-neutral-50');
      };
    }); 
    // ========================= Color List Js End ===================
    
    // ========================= Product Details Slider Js Start ===================
    
    $('.product-big-thumbs').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      rtl: $('html').attr('dir') === 'rtl' ? true : false,
      fade: true,
      asNavFor: '.product-small-thumbs'
    });
    $('.product-small-thumbs').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.product-big-thumbs',
      arrows: false,
      dots: false,
      rtl: $('html').attr('dir') === 'rtl' ? true : false,
      autoplay: false,
      centerMode: true,
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 424,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
    });
    // ========================= Product Details Slider Js End ===================

    // ========================= Add To Cart Js Start ===================
    $('.add-to-cart').on('click', function () {
      $(this).toggleClass('active')
    });
    // ========================= Add To Cart Js End ===================
  

  });
  // ==========================================
  //      End Document Ready function
  // ==========================================

  // ========================= Preloader Js Start =====================
    $(window).on("load", function(){
      $('.preloader').fadeOut(); 
    })
    // ========================= Preloader Js End=====================

    // ========================= Header Sticky Js Start ==============
    $(window).on('scroll', function() {
      if ($(window).scrollTop() >= 260) {
        $('.header').addClass('fixed-header');
      }
      else {
          $('.header').removeClass('fixed-header');
      }
    }); 
    // ========================= Header Sticky Js End===================

// ========================= Eduall Dynamic CRUD Layer ===========================
(function () {
  "use strict";

  if (!window.EduallData) return;

  var fileName = (window.location.pathname.split("/").pop() || "").toLowerCase();
  var deleteTarget = null;

  function q(selector, root) { return (root || document).querySelector(selector); }
  function qa(selector, root) { return Array.prototype.slice.call((root || document).querySelectorAll(selector)); }

  function ensureModal(id, title, bodyHtml, submitLabel) {
    var modal = document.getElementById(id);
    if (modal) return modal;
    modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = id;
    modal.tabIndex = -1;
    modal.innerHTML = '<div class="modal-dialog modal-lg modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">' + title + '</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><form class="eduall-modal-form"><div class="modal-body">' + bodyHtml + '</div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button><button type="submit" class="btn btn-primary">' + submitLabel + '</button></div></form></div></div>';
    document.body.appendChild(modal);
    return modal;
  }

  function ensureDeleteModal() {
    var modal = document.getElementById("eduallDeleteModal");
    if (modal) return modal;
    modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = "eduallDeleteModal";
    modal.tabIndex = -1;
    modal.innerHTML = '<div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Confirm Delete</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">Are you sure you want to delete this record?</div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button><button type="button" class="btn btn-danger" id="eduallConfirmDeleteBtn">Delete</button></div></div></div>';
    document.body.appendChild(modal);
    modal.querySelector("#eduallConfirmDeleteBtn").addEventListener("click", function () {
      if (!deleteTarget) return;
      window.EduallData.delete(deleteTarget.type, deleteTarget.id);
      deleteTarget.onDone();
      bootstrap.Modal.getOrCreateInstance(modal).hide();
    });
    return modal;
  }

  function showDelete(type, id, onDone) {
    deleteTarget = { type: type, id: id, onDone: onDone };
    bootstrap.Modal.getOrCreateInstance(ensureDeleteModal()).show();
  }

  function skeletonCards(container, count) {
    var html = "";
    for (var i = 0; i < count; i += 1) {
      html += '<div class="col-xl-4 col-sm-6"><div class="bg-main-25 rounded-16 p-12 h-100 border border-neutral-30"><div class="placeholder-glow"><div class="placeholder col-12 rounded-12" style="height:180px;"></div><div class="pt-20"><span class="placeholder col-8 mb-2"></span><span class="placeholder col-5 mb-2"></span><span class="placeholder col-9"></span></div></div></div></div>';
    }
    container.innerHTML = html;
  }

  function setupCoursesDashboard() {
    var wrapper = q("#pills-categories .row.gy-4");
    if (!wrapper) return;
    var searchInput = q('.dashbord-body input[placeholder="Search"]');
    var addBtn = qa("a").find(function (a) { return a.textContent.trim() === "Create a New Course"; });
    var query = "";
    function render() {
      var rows = window.EduallData.getAll("courses").filter(function (c) {
        return !query || (c.title + " " + c.category + " " + c.tutor).toLowerCase().indexOf(query) > -1;
      });
      wrapper.innerHTML = rows.map(function (c) {
        return '<div class="col-xl-3 col-md-6 col-sm-6"><div class="course-item bg-white rounded-16 p-12 h-100 box-shadow-md"><div class="course-item__thumb rounded-12 overflow-hidden"><a href="course-details.html" class="w-100 h-100"><img src="' + c.image + '" alt="Course" class="course-item__img rounded-12 cover-img transition-2"></a></div><div class="course-item__content"><span class="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16">' + c.category + '</span><div class="flex-between gap-8 flex-wrap mb-16"><div class="flex-align gap-8"><span class="text-neutral-700 text-16 fw-medium">' + c.lessons + ' Lessons</span></div><div class="flex-align gap-8"><span class="text-neutral-700 text-16 fw-medium">' + c.students + ' Students</span></div></div><h4 class="mb-20"><a href="course-details.html" class="link text-line-2 fw-semibold">' + c.title + '</a></h4><div class="d-flex gap-8"><button class="btn btn-sm btn-outline-primary eduall-edit" data-id="' + c.id + '">Edit</button><button class="btn btn-sm btn-outline-danger eduall-delete" data-id="' + c.id + '">Delete</button></div></div></div></div>';
      }).join("");
    }

    var modal = ensureModal("eduallCourseModal", "Course", '<input class="form-control mb-3" name="title" placeholder="Title" required><input class="form-control mb-3" name="category" placeholder="Category" required><input class="form-control mb-3" name="price" type="number" placeholder="Price" required><input class="form-control mb-3" name="image" placeholder="Image URL" required><input class="form-control mb-3" name="tutor" placeholder="Tutor" required><textarea class="form-control" name="description" placeholder="Description"></textarea>', "Save");
    var form = modal.querySelector("form");
    var editingId = null;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = Object.fromEntries(new FormData(form).entries());
      data.price = Number(data.price || 0);
      data.lessons = 20;
      data.students = 0;
      data.revenue = data.price;
      if (editingId) window.EduallData.update("courses", editingId, data); else window.EduallData.create("courses", data);
      editingId = null; form.reset(); render(); bootstrap.Modal.getOrCreateInstance(modal).hide();
    });

    wrapper.addEventListener("click", function (e) {
      var edit = e.target.closest(".eduall-edit");
      var del = e.target.closest(".eduall-delete");
      if (edit) {
        var row = window.EduallData.getById("courses", edit.dataset.id);
        if (!row) return;
        editingId = row.id;
        Object.keys(row).forEach(function (k) { if (form.elements[k]) form.elements[k].value = row[k]; });
        bootstrap.Modal.getOrCreateInstance(modal).show();
      }
      if (del) showDelete("courses", del.dataset.id, render);
    });
    if (addBtn) addBtn.addEventListener("click", function (e) { e.preventDefault(); editingId = null; form.reset(); bootstrap.Modal.getOrCreateInstance(modal).show(); });
    if (searchInput) searchInput.addEventListener("input", function () { query = this.value.toLowerCase().trim(); render(); });
    render();
  }

  function setupTableCrud(type, tableSelector, fields, mapRow, title) {
    var table = q(tableSelector);
    if (!table) return;
    var tbody = q("tbody", table);
    if (!tbody) return;
    var searchInput = q('.dashbord-body input[placeholder="Search"]');
    var addBtn = qa("a").find(function (a) { return a.textContent.trim() === "Create a New Course"; });
    var query = "";
    var modalBody = fields.map(function (f) { return '<input class="form-control mb-3" name="' + f + '" placeholder="' + f + '" required>'; }).join("");
    var modal = ensureModal("eduall" + type + "Modal", title, modalBody, "Save");
    var form = modal.querySelector("form");
    var editingId = null;
    function render() {
      var rows = window.EduallData.getAll(type).filter(function (r) { return !query || JSON.stringify(r).toLowerCase().indexOf(query) > -1; });
      tbody.innerHTML = rows.map(function (r) { return mapRow(r); }).join("");
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = Object.fromEntries(new FormData(form).entries());
      if (editingId) window.EduallData.update(type, editingId, data); else window.EduallData.create(type, data);
      editingId = null; form.reset(); render(); bootstrap.Modal.getOrCreateInstance(modal).hide();
    });
    tbody.addEventListener("click", function (e) {
      var edit = e.target.closest(".eduall-edit");
      var del = e.target.closest(".eduall-delete");
      if (edit) {
        var row = window.EduallData.getById(type, edit.dataset.id);
        if (!row) return;
        editingId = row.id;
        fields.forEach(function (f) { if (form.elements[f]) form.elements[f].value = row[f] || ""; });
        bootstrap.Modal.getOrCreateInstance(modal).show();
      }
      if (del) showDelete(type, del.dataset.id, render);
    });
    if (addBtn) addBtn.addEventListener("click", function (e) { e.preventDefault(); editingId = null; form.reset(); bootstrap.Modal.getOrCreateInstance(modal).show(); });
    if (searchInput) searchInput.addEventListener("input", function () { query = this.value.toLowerCase().trim(); render(); });
    render();
  }

  function setupFrontendCourses() {
    var row = q(".course-list-view .row.gy-4");
    if (!row) return;
    var result = q(".course-list-view .text-neutral-500");
    var sortSelect = qa(".course-list-view select")[0];
    var categorySelect = qa(".course-list-view select")[1];
    if (categorySelect) {
      var categories = window.EduallData.getAll("courses").map(function (c) { return c.category; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
      categorySelect.innerHTML = '<option value="">All Categories</option>' + categories.map(function (c) { return '<option value="' + c + '">' + c + '</option>'; }).join("");
    }
    var state = { sort: "", category: "" };
    function render() {
      var rows = window.EduallData.getAll("courses");
      if (state.category) rows = rows.filter(function (c) { return c.category === state.category; });
      if (state.sort === "asc") rows.sort(function (a, b) { return a.price - b.price; });
      if (state.sort === "desc") rows.sort(function (a, b) { return b.price - a.price; });
      if (result) result.textContent = "Showing " + rows.length + " Results";
      row.innerHTML = rows.map(function (c) { return '<div class="col-12"><div class="course-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30 list-view"><div class="course-item__thumb rounded-12 overflow-hidden position-relative"><a href="course-details.html"><img src="' + c.image + '" alt="' + c.title + '" class="course-item__img rounded-12 cover-img transition-2"></a></div><div class="course-item__content flex-grow-1"><h4 class="mb-12"><a href="course-details.html" class="link text-line-2">' + c.title + '</a></h4><p class="mb-12">' + (c.description || "") + '</p><div class="d-flex justify-content-between"><span>' + c.category + '</span><h5 class="text-main-two-600 mb-0">$' + c.price + '</h5></div></div></div></div>'; }).join("");
    }
    skeletonCards(row, 6);
    setTimeout(render, 350);
    if (sortSelect) sortSelect.addEventListener("change", function () { state.sort = this.value === "Low to High" ? "asc" : (this.value === "High to Low" ? "desc" : ""); render(); });
    if (categorySelect) categorySelect.addEventListener("change", function () { state.category = this.value; render(); });
  }

  function setupFrontendSimple(type, sectionSelector, cardMapper, count) {
    var row = q(sectionSelector + " .row.gy-4");
    if (!row) return;
    var result = q(sectionSelector + " .text-neutral-500");
    skeletonCards(row, count || 6);
    setTimeout(function () {
      var rows = window.EduallData.getAll(type);
      if (result) result.textContent = "Showing " + rows.length + " Results";
      row.innerHTML = rows.map(cardMapper).join("");
    }, 350);
  }

  function setupDashboardStats() {
    if (fileName !== "dashbord.html" && fileName !== "admin-dashbord.html") return;
    var cards = qa(".px-20.py-20.bg-white.rounded-10");
    if (!cards.length) return;
    var courses = window.EduallData.getAll("courses");
    var students = window.EduallData.getAll("students");
    var tutors = window.EduallData.getAll("tutors");
    var revenue = courses.reduce(function (sum, c) { return sum + Number(c.revenue || c.price || 0); }, 0);
    cards.forEach(function (card) {
      var label = (q("span", card) || {}).textContent || "";
      var valueEl = q("h6", card);
      if (!valueEl) return;
      if (label.indexOf("Total Courses") > -1) valueEl.textContent = String(courses.length);
      if (label.indexOf("Total Students") > -1) valueEl.textContent = String(students.length);
      if (label.indexOf("Total Tutors") > -1 || label.indexOf("Enrolled Courses") > -1) valueEl.textContent = String(tutors.length);
      if (label.indexOf("Earnings") > -1 || label.indexOf("Revenue") > -1) valueEl.textContent = "$" + revenue.toFixed(2);
    });
  }

  function setupAdminEntityTables() {
    if (fileName !== "admin-dashbord.html") return;

    function mountSearch(container, onInput) {
      var existing = q(".eduall-admin-search", container);
      if (existing) return;
      var wrap = document.createElement("div");
      wrap.className = "mb-16";
      wrap.innerHTML = '<input class="form-control eduall-admin-search" placeholder="Search..." />';
      container.insertBefore(wrap, container.firstChild.nextSibling);
      q("input", wrap).addEventListener("input", function () { onInput(this.value.toLowerCase().trim()); });
    }

    var entityConfigs = [
      {
        type: "tutors",
        table: "#example",
        title: "Tutors",
        fields: ["name", "title", "image", "students"],
        header: '<tr class="bg-main-25 border-bottom"><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Tutor</th><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Title</th><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Students</th><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Action</th></tr>',
        row: function (r) {
          return '<tr class="hover-bg-neutral-20 border-bottom transition-03"><td class="py-22 px-20 shadow-none"><div class="d-flex align-items-center gap-12"><img src="' + (r.image || "") + '" alt="" class="w-32 h-32"><span class="fw-medium text-14 text-neutral-500">' + r.name + '</span></div></td><td class="text-14 fw-normal py-22 px-20 shadow-none text-neutral-500">' + (r.title || "") + '</td><td class="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">' + (r.students || 0) + '</td><td class="py-22 px-20 shadow-none"><div class="d-flex align-items-center gap-12 justify-content-end"><button class="btn btn-sm btn-outline-primary eduall-edit" data-id="' + r.id + '">Edit</button><button class="btn btn-sm btn-outline-danger eduall-delete" data-id="' + r.id + '">Delete</button></div></td></tr>';
        }
      },
      {
        type: "students",
        table: "#example-two",
        title: "Students",
        fields: ["name", "email", "enrolledCourses"],
        header: '<tr class="bg-main-25 border-bottom"><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Student</th><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Email</th><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Enrolled</th><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Action</th></tr>',
        row: function (r) {
          return '<tr class="hover-bg-neutral-20 border-bottom transition-03"><td class="py-22 px-20 shadow-none text-14 fw-medium text-neutral-500">' + r.name + '</td><td class="text-14 fw-normal py-22 px-20 shadow-none text-neutral-500">' + r.email + '</td><td class="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">' + (r.enrolledCourses || 0) + '</td><td class="py-22 px-20 shadow-none"><div class="d-flex align-items-center gap-12 justify-content-end"><button class="btn btn-sm btn-outline-primary eduall-edit" data-id="' + r.id + '">Edit</button><button class="btn btn-sm btn-outline-danger eduall-delete" data-id="' + r.id + '">Delete</button></div></td></tr>';
        }
      },
      {
        type: "blogs",
        table: "#example-three",
        title: "Blogs",
        fields: ["title", "description", "author", "image", "date", "comments"],
        header: '<tr class="bg-main-25 border-bottom"><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Blog</th><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Author</th><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Date</th><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Action</th></tr>',
        row: function (r) {
          return '<tr class="hover-bg-neutral-20 border-bottom transition-03"><td class="py-20 px-20 shadow-none"><div><h6 class="fw-medium text-14 text-neutral-500 mb-3">' + r.title + '</h6><span class="fw-normal text-12 text-neutral-500">' + (r.description || "") + '</span></div></td><td class="text-14 fw-normal py-20 px-20 shadow-none text-neutral-500">' + (r.author || "") + '</td><td class="py-20 px-20 text-14 fw-normal text-neutral-500 shadow-none">' + (r.date || "") + '</td><td class="py-20 px-20 shadow-none"><div class="d-flex align-items-center gap-12 justify-content-end"><button class="btn btn-sm btn-outline-primary eduall-edit" data-id="' + r.id + '">Edit</button><button class="btn btn-sm btn-outline-danger eduall-delete" data-id="' + r.id + '">Delete</button></div></td></tr>';
        }
      },
      {
        type: "events",
        table: "#example-four",
        title: "Events",
        fields: ["title", "location", "date", "time", "price", "image"],
        header: '<tr class="bg-main-25 border-bottom"><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Event</th><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Location</th><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Date</th><th class="text-12 fw-medium text-neutral-500 py-16 px-20">Action</th></tr>',
        row: function (r) {
          return '<tr class="hover-bg-neutral-20 border-bottom transition-03"><td class="py-20 px-20 shadow-none text-14 fw-medium text-neutral-500">' + r.title + '</td><td class="text-14 fw-normal py-20 px-20 shadow-none text-neutral-500">' + (r.location || "") + '</td><td class="py-20 px-20 text-14 fw-normal text-neutral-500 shadow-none">' + (r.date || "") + " " + (r.time || "") + '</td><td class="py-20 px-20 shadow-none"><div class="d-flex align-items-center gap-12 justify-content-end"><button class="btn btn-sm btn-outline-primary eduall-edit" data-id="' + r.id + '">Edit</button><button class="btn btn-sm btn-outline-danger eduall-delete" data-id="' + r.id + '">Delete</button></div></td></tr>';
        }
      }
    ];

    entityConfigs.forEach(function (cfg) {
      var table = q(cfg.table);
      if (!table) return;
      var card = table.closest(".px-24.py-24.bg-white.rounded-10");
      var heading = card ? q("h6", card) : null;
      if (heading) heading.textContent = cfg.title + " Management";
      var actionLink = card ? q("a.text-12", card) : null;
      if (actionLink) actionLink.textContent = "Add New";
      var thead = q("thead", table);
      var tbody = q("tbody", table);
      if (!thead || !tbody || !card) return;
      thead.innerHTML = cfg.header;

      var query = "";
      var modalBody = cfg.fields.map(function (f) { return '<input class="form-control mb-3" name="' + f + '" placeholder="' + f + '" required>'; }).join("");
      var modal = ensureModal("eduallAdmin" + cfg.type + "Modal", cfg.title, modalBody, "Save");
      var form = q("form", modal);
      var editingId = null;

      function render() {
        var rows = window.EduallData.getAll(cfg.type).filter(function (r) {
          return !query || JSON.stringify(r).toLowerCase().indexOf(query) > -1;
        });
        tbody.innerHTML = rows.map(cfg.row).join("");
      }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var payload = Object.fromEntries(new FormData(form).entries());
        if (payload.students !== undefined) payload.students = Number(payload.students || 0);
        if (payload.enrolledCourses !== undefined) payload.enrolledCourses = Number(payload.enrolledCourses || 0);
        if (payload.price !== undefined) payload.price = Number(payload.price || 0);
        if (editingId) window.EduallData.update(cfg.type, editingId, payload); else window.EduallData.create(cfg.type, payload);
        editingId = null;
        form.reset();
        render();
        bootstrap.Modal.getOrCreateInstance(modal).hide();
        setupDashboardStats();
      });

      tbody.addEventListener("click", function (e) {
        var edit = e.target.closest(".eduall-edit");
        var del = e.target.closest(".eduall-delete");
        if (edit) {
          var row = window.EduallData.getById(cfg.type, edit.dataset.id);
          if (!row) return;
          editingId = row.id;
          cfg.fields.forEach(function (f) { if (form.elements[f]) form.elements[f].value = row[f] || ""; });
          bootstrap.Modal.getOrCreateInstance(modal).show();
        }
        if (del) {
          showDelete(cfg.type, del.dataset.id, function () {
            render();
            setupDashboardStats();
          });
        }
      });

      mountSearch(card, function (val) { query = val; render(); });

      if (actionLink) {
        actionLink.href = "#";
        actionLink.addEventListener("click", function (e) {
          e.preventDefault();
          editingId = null;
          form.reset();
          bootstrap.Modal.getOrCreateInstance(modal).show();
        });
      }

      render();
    });
  }

  function setupFrontendTutors() {
    if (fileName !== "tutor.html") return;
    var row = q(".py-120 .row.gy-4");
    if (!row) return;
    var result = q(".py-120 .text-neutral-500");
    skeletonCards(row, 6);
    setTimeout(function () {
      var tutors = window.EduallData.getAll("tutors");
      if (result) result.textContent = "Showing " + tutors.length + " Results";
      row.innerHTML = tutors.map(function (t) {
        return '<div class="col-xl-4 col-sm-6"><div class="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md"><div class="course-item__thumb rounded-12 overflow-hidden position-relative"><a href="tutor-details.html"><img src="' + (t.image || "") + '" alt="' + t.name + '" class="scale-hover-item__img rounded-12 cover-img transition-2"></a></div><div class="pt-32 pb-24 px-16 position-relative"><h4 class="mb-8"><a href="tutor-details.html" class="link text-line-2">' + t.name + '</a></h4><p class="text-neutral-500 mb-16">' + (t.title || "") + '</p><div class="flex-between gap-8 pt-24 border-top border-neutral-50 mt-16 border-dashed border-0"><span class="fw-medium text-main-two-600">' + (t.students || 0) + ' Students</span><a href="tutor-details.html" class="flex-align gap-8 text-main-600 fw-semibold">View Profile <i class="ph ph-arrow-right"></i></a></div></div></div></div>';
      }).join("");
    }, 350);
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupDashboardStats();
    if (fileName === "dashbord-courses.html") setupCoursesDashboard();
    if (fileName === "deshbord-reviews.html") {
      setupTableCrud("reviews", "#example-five", ["course", "rating", "feedback", "count"], function (r) {
        var stars = "★★★★★".slice(0, Number(r.rating || 0)) + "☆☆☆☆☆".slice(0, 5 - Number(r.rating || 0));
        return '<tr class="hover-bg-neutral-20 border-bottom transition-03"><td class="py-28 px-20 shadow-none"><span class="fw-normal text-12 text-neutral-500">' + r.course + '</span></td><td class="text-14 fw-normal py-28 px-20 shadow-none">' + stars + '</td><td class="py-28 px-20 shadow-none">(' + r.count + ' Reviews) - ' + r.feedback + '</td><td class="py-28 px-20 shadow-none"><div class="d-flex align-items-center gap-12 justify-content-end"><button type="button" class="text-24 text-neutral-500 eduall-edit" data-id="' + r.id + '"><i class="ph-bold ph-pencil-simple-line"></i></button><button type="button" class="text-24 text-neutral-500 eduall-delete" data-id="' + r.id + '"><i class="ph-bold ph-trash"></i></button></div></td></tr>';
      }, "Review");
    }
    if (fileName === "dashbord-quiz-attempts.html") {
      setupTableCrud("quizzes", "#example-five", ["title", "instructor", "date", "questions", "totalMarks", "correctAnswers", "result"], function (qz) {
        return '<tr class="hover-bg-neutral-20 border-bottom transition-03"><td class="py-28 px-20 shadow-none line-height-105"><h4 class="fw-medium text-14 text-neutral-500 mb-1">' + qz.title + '</h4><span class="fw-normal text-12 text-neutral-500">' + qz.instructor + '</span></td><td class="text-14 fw-normal py-28 px-20 shadow-none line-height-105">' + qz.date + '</td><td class="py-28 px-20 shadow-none line-height-105">' + qz.questions + '</td><td class="py-28 px-20 shadow-none line-height-105">' + qz.totalMarks + '</td><td class="py-28 px-20 shadow-none line-height-105">' + qz.correctAnswers + '</td><td class="py-28 px-20 shadow-none line-height-105"><span class="bg-success-50 px-20 py-8 border-neutral-30 border rounded-pill text-success-600">' + qz.result + '</span></td><td class="py-28 px-20 shadow-none line-height-105"><div class="d-flex align-items-center gap-12 justify-content-end"><button type="button" class="text-24 text-neutral-500 eduall-edit" data-id="' + qz.id + '"><i class="ph-bold ph-pencil-simple-line"></i></button><button type="button" class="text-24 text-neutral-500 eduall-delete" data-id="' + qz.id + '"><i class="ph-bold ph-trash"></i></button></div></td></tr>';
      }, "Quiz");
    }
    if (fileName === "dashbord-students.html") {
      setupTableCrud("students", "#example-five", ["name", "email", "enrolledCourses"], function (s) {
        return '<tr class="hover-bg-neutral-20 border-bottom transition-03"><td class="py-22 px-20 shadow-none text-14 fw-medium text-neutral-500">' + s.name + '</td><td class="text-14 fw-normal py-22 px-20 shadow-none text-neutral-500">' + s.email + '</td><td class="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">' + (s.enrolledCourses || 0) + '</td><td class="py-22 px-20 shadow-none"><div class="d-flex align-items-center gap-12 justify-content-end"><button class="btn btn-sm btn-outline-primary eduall-edit" data-id="' + s.id + '">Edit</button><button class="btn btn-sm btn-outline-danger eduall-delete" data-id="' + s.id + '">Delete</button></div></td></tr>';
      }, "Student");
    }
    if (fileName === "dashbord-tutors.html") {
      setupTableCrud("tutors", "#example-five", ["name", "title", "image", "students"], function (t) {
        return '<tr class="hover-bg-neutral-20 border-bottom transition-03"><td class="py-22 px-20 shadow-none"><div class="d-flex align-items-center gap-12"><img src="' + (t.image || "") + '" alt="" class="w-32 h-32"><span class="fw-medium text-14 text-neutral-500">' + t.name + '</span></div></td><td class="text-14 fw-normal py-22 px-20 shadow-none text-neutral-500">' + (t.title || "") + '</td><td class="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">' + (t.students || 0) + '</td><td class="py-22 px-20 shadow-none"><div class="d-flex align-items-center gap-12 justify-content-end"><button class="btn btn-sm btn-outline-primary eduall-edit" data-id="' + t.id + '">Edit</button><button class="btn btn-sm btn-outline-danger eduall-delete" data-id="' + t.id + '">Delete</button></div></td></tr>';
      }, "Tutor");
    }
    if (fileName === "dashbord-blogs.html") {
      setupTableCrud("blogs", "#example-five", ["title", "description", "author", "image", "date", "comments"], function (b) {
        return '<tr class="hover-bg-neutral-20 border-bottom transition-03"><td class="py-20 px-20 shadow-none"><div><h6 class="fw-medium text-14 text-neutral-500 mb-3">' + b.title + '</h6><span class="fw-normal text-12 text-neutral-500">' + (b.description || "") + '</span></div></td><td class="text-14 fw-normal py-20 px-20 shadow-none text-neutral-500">' + (b.author || "") + '</td><td class="py-20 px-20 text-14 fw-normal text-neutral-500 shadow-none">' + (b.date || "") + '</td><td class="py-20 px-20 shadow-none"><div class="d-flex align-items-center gap-12 justify-content-end"><button class="btn btn-sm btn-outline-primary eduall-edit" data-id="' + b.id + '">Edit</button><button class="btn btn-sm btn-outline-danger eduall-delete" data-id="' + b.id + '">Delete</button></div></td></tr>';
      }, "Blog");
    }
    if (fileName === "dashbord-events.html") {
      setupTableCrud("events", "#example-five", ["title", "location", "date", "time", "price", "image"], function (ev) {
        return '<tr class="hover-bg-neutral-20 border-bottom transition-03"><td class="py-20 px-20 shadow-none text-14 fw-medium text-neutral-500">' + ev.title + '</td><td class="text-14 fw-normal py-20 px-20 shadow-none text-neutral-500">' + (ev.location || "") + '</td><td class="py-20 px-20 text-14 fw-normal text-neutral-500 shadow-none">' + (ev.date || "") + " " + (ev.time || "") + '</td><td class="py-20 px-20 shadow-none"><div class="d-flex align-items-center gap-12 justify-content-end"><button class="btn btn-sm btn-outline-primary eduall-edit" data-id="' + ev.id + '">Edit</button><button class="btn btn-sm btn-outline-danger eduall-delete" data-id="' + ev.id + '">Delete</button></div></td></tr>';
      }, "Event");
    }
    if (fileName === "dashbord-message.html") {
      var listRoot = q(".max-w-420-px .mt-24");
      var addMsgBtn = qa("a").find(function (a) { return a.textContent.trim() === "Create a New Course"; });
      var searchMsg = q('input[placeholder="Search contacts..."]');
      if (listRoot) {
        var msgModal = ensureModal("eduallMessageModal", "Message", '<input class="form-control mb-3" name="name" placeholder="Name" required><input class="form-control mb-3" name="snippet" placeholder="Message" required><input class="form-control mb-3" name="time" placeholder="Time" required><input class="form-control mb-3" name="unread" type="number" placeholder="Unread Count" required><input class="form-control mb-3" name="avatar" placeholder="Avatar URL" required>', "Save");
        var msgForm = msgModal.querySelector("form");
        var editMsgId = null;
        var msgQuery = "";
        var renderMsg = function () {
          listRoot.innerHTML = window.EduallData.getAll("messages").filter(function (m) { return !msgQuery || JSON.stringify(m).toLowerCase().indexOf(msgQuery) > -1; }).map(function (m) {
            return '<div class="px-24 py-12 d-flex align-items-center gap-16 justify-content-between mb-16 hover-bg-neutral-20 rounded-8 transition-03"><div class="d-flex align-items-center gap-12 flex-wrap"><img src="' + m.avatar + '" alt=""><div><h6 class="text-14 fw-medium text-neutral-500 mb-0">' + m.name + '</h6><span class="text-12 fw-normal text-neutral-100">' + m.snippet + '</span></div></div><div class="text-end"><span class="text-12 fw-normal text-neutral-100 d-block mb-8">' + m.time + '</span><div class="d-flex gap-2 justify-content-end"><span class="d-inline-flex text-12 fw-medium text-white bg-main-600 w-20 h-20 rounded-circle align-items-center justify-content-center">' + (m.unread || 0) + '</span><button class="btn btn-sm btn-outline-primary eduall-edit" data-id="' + m.id + '">E</button><button class="btn btn-sm btn-outline-danger eduall-delete" data-id="' + m.id + '">D</button></div></div></div>';
          }).join("");
        };
        msgForm.addEventListener("submit", function (e) {
          e.preventDefault();
          var data = Object.fromEntries(new FormData(msgForm).entries());
          data.unread = Number(data.unread || 0);
          if (editMsgId) window.EduallData.update("messages", editMsgId, data); else window.EduallData.create("messages", data);
          editMsgId = null; msgForm.reset(); renderMsg(); bootstrap.Modal.getOrCreateInstance(msgModal).hide();
        });
        listRoot.addEventListener("click", function (e) {
          var edit = e.target.closest(".eduall-edit");
          var del = e.target.closest(".eduall-delete");
          if (edit) {
            var m = window.EduallData.getById("messages", edit.dataset.id);
            if (!m) return;
            editMsgId = m.id;
            Object.keys(m).forEach(function (k) { if (msgForm.elements[k]) msgForm.elements[k].value = m[k]; });
            bootstrap.Modal.getOrCreateInstance(msgModal).show();
          }
          if (del) showDelete("messages", del.dataset.id, renderMsg);
        });
        if (addMsgBtn) addMsgBtn.addEventListener("click", function (e) { e.preventDefault(); editMsgId = null; msgForm.reset(); bootstrap.Modal.getOrCreateInstance(msgModal).show(); });
        if (searchMsg) searchMsg.addEventListener("input", function () { msgQuery = this.value.toLowerCase().trim(); renderMsg(); });
        renderMsg();
      }
    }
    if (fileName === "course-list-view.html") setupFrontendCourses();
    if (fileName === "blog-list.html") {
      setupFrontendSimple("blogs", ".blog-page-section", function (b) {
        return '<div class="col-lg-6"><div class="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30 d-flex flex-sm-row flex-column"><div class="course-item__thumb rounded-12 overflow-hidden position-relative max-w-274 w-100"><a href="blog-details.html"><img src="' + b.image + '" alt="' + b.title + '" class="scale-hover-item__img rounded-12 cover-img transition-2"></a></div><div class="p-20 position-relative"><h4 class="mb-28"><a href="blog-details.html" class="link text-line-3 ">' + b.title + '</a></h4><p>' + (b.description || "") + '</p></div></div></div>';
      }, 8);
    }
    if (fileName === "blog.html") {
      setupFrontendSimple("blogs", ".blog-page-section", function (b) {
        return '<div class="col-lg-4 col-sm-6"><div class="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30"><div class="course-item__thumb rounded-12 overflow-hidden position-relative"><a href="blog-details.html"><img src="' + b.image + '" alt="' + b.title + '" class="scale-hover-item__img rounded-12 cover-img transition-2"></a></div><div class="p-20 position-relative"><h4 class="mb-16"><a href="blog-details.html" class="link text-line-2">' + b.title + '</a></h4><p class="text-neutral-500 text-line-3">' + (b.description || "") + '</p></div></div></div>';
      }, 9);
    }
    if (fileName === "events.html") {
      setupFrontendSimple("events", ".course-list-view", function (e) {
        return '<div class="col-xl-4 col-sm-6"><div class="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30"><div class="course-item__thumb rounded-12 overflow-hidden position-relative"><a href="event-details.html"><img src="' + e.image + '" alt="' + e.title + '" class="scale-hover-item__img rounded-12 cover-img transition-2"></a><div class="bg-success-600 rounded-8 px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">' + e.time + '</div></div><div class="pt-32 pb-24 px-16 position-relative"><h4 class="mb-28"><a href="event-details.html" class="link text-line-2">' + e.title + '</a></h4><div class="flex-align gap-8"><span class="text-neutral-500 text-2xl d-flex"><i class="ph-bold ph-map-pin-line"></i></span><p class="text-neutral-500 text-lg">' + e.location + '</p></div><div class="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0"><h4 class="text-main-two-600 mb-0">$' + e.price + '</h4></div></div></div></div>';
      }, 6);
    }
    setupAdminEntityTables();
    setupFrontendTutors();
  });
})();

})(jQuery);

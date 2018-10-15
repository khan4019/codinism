;(function($) {
    "use strict"; 
    
    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('.main_header_area').length ){ 
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 295) {
                    $(".main_header_area").addClass("navbar_fixed");
                } else {
                    $(".main_header_area").removeClass("navbar_fixed");
                }
            });
            
            // toggle_menu
            $(".menu-opener").on('click', function () {
                $(".toggle_menu").toggleClass("active");
            });
            $("section").on('click', function () {
                $(".toggle_menu").removeClass("active");
            });  
        };
    };   
  
    //* Parallaxmouse js
    function parallaxMouse() {
        if ($('body').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene); 
        };
    }; 

    // Scroll to top
    function scrollToTop() {
        if ($('.scroll-top').length) {  
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    $('.scroll-top').fadeIn();
                } else {
                    $('.scroll-top').fadeOut();
                }
            }); 
            //Click event to scroll to top
            $('.scroll-top').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            });
        }
    }
    
    
    // Preloader JS
    function preloader(){
        if( $('.preloader').length ){
            $(window).on('load', function() {
                $('.preloader').fadeOut();
                $('.preloader').delay(50).fadeOut('slow');  
            })   
        }
    }

    // Dissable right click
    $("body").on("contextmenu",function(e){ 
        return false;
    }); 
    
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    }); 
     
    /*Function Calls*/ 
    new WOW().init();
    navbarFixed ();  
    scrollToTop ();
    parallaxMouse ();
    preloader ();
})(jQuery);
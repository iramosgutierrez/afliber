$(document).ready(function(){

    // Function from Marc Randall in stackoverflow.com/questions/55326837
    function resizeCarousel() {
        if($(window).width() < 768) {
            $('#homeCarousel')
              .removeClass('w-50')
              .addClass('w-100');
        } else {
            $('#homeCarousel')
              .removeClass('w-100')
              .addClass('w-50')
              .addClass('mx-auto');
        }
    }

    function createMainContainer() {
        // Add class container for responsive behavior if it is not added 
        if(!$("main").hasClass("container")){
            $("main").addClass("container");
        }
    }

    // Create active for selected nav-item
    var navItem = window.location.pathname;
    // 9 is the length of repo folder /afliber/
    if(navItem.length > 9){
        navItem = navItem.split("/")[2]
    }else{
        navItem = "./"
    }
    target = $('.navbar-item a[href*="' + navItem + '"]')[0];
    $(target).addClass('active');

    // Responsive carousel
    resizeCarousel();
    $(window).resize(resizeCarousel);

    // Responsive main container
    createMainContainer();

});



 // Navbar when clicking active

 $(document).ready(function () {
    $('.navbar-nav a').on('click', function () {
        $('.navbar-nav a.active').removeClass('active');
        $(this).addClass('active');
    });
});



    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
            $('.mainNavbar').addClass('mainNavbarScrollingActive');
        } else {
            $('.mainNavbar').removeClass('mainNavbarScrollingActive');
        }
    });


    $(document).ready(function () {
        // Function to set slider settings
        function setSliderSettings() {
            var no_of_slides, arrows_to_show;
    
            if (window.matchMedia("(max-width: 920px)").matches && !window.matchMedia("(max-width: 620px)").matches) {
                no_of_slides = 2;
                arrows_to_show = true;
            } else if (window.matchMedia("(max-width: 620px)").matches) {
                no_of_slides = 1;
                arrows_to_show = true;
            } else {
                no_of_slides = 2;
                arrows_to_show = true;
            }
    
            // Additional setting for RTL
            var isRTL = $('html').attr('dir') === 'rtl';
    
            return {
                slidesToShow: no_of_slides,
                slidesToScroll: 1,
                dots: false,
                arrows: arrows_to_show,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
                rtl: isRTL, // Enable RTL if the HTML has RTL direction
                nextArrow: $('.slick-next'),
                prevArrow: $('.slick-prev')
            };
        }
        // Initialize the slider
        $('.MatchList').slick(setSliderSettings());
    
        // Update the slider settings on window resize
        $(window).resize(function () {
            $('.MatchList').slick('unslick'); // First, destroy the old slick
            $('.MatchList').slick(setSliderSettings()); // Then initialize it again with new settings
        });
    });
    



   // !!!! Delete This After Add To your Project Beacuse There is S Same Code In Your Project In Page js/sliderCard.js

    $(document).ready(function () {
    // Function to set slider settings
    function setSliderSettings() {
        var no_of_slides, arrows_to_show;

        if (window.matchMedia("(max-width: 920px)").matches && !window.matchMedia("(max-width: 620px)").matches) {
            no_of_slides = 3;
            arrows_to_show = true;
        } else if (window.matchMedia("(max-width: 620px)").matches) {
            no_of_slides = 1;
            arrows_to_show = true;
        } else {
            no_of_slides = 4;
            arrows_to_show = true;
        }

        // Additional setting for RTL
        var isRTL = $('html').attr('dir') === 'rtl';

        return {
            slidesToShow: no_of_slides,
            slidesToScroll: 1,
            dots: false,
            arrows: arrows_to_show,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            rtl: isRTL, // Enable RTL if the HTML has RTL direction
            nextArrow: $('.slick-next'),
            prevArrow: $('.slick-prev')
        };
    }
    // Initialize the slider
    $('.TeamHList').slick(setSliderSettings());

    // Update the slider settings on window resize
    $(window).resize(function () {
        $('.TeamHList').slick('unslick'); // First, destroy the old slick
        $('.TeamHList').slick(setSliderSettings()); // Then initialize it again with new settings
    });
});

(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Work experience in completed half-year increments since June 2020
    var experienceStart = new Date(2020, 5, 1);
    var today = new Date();
    var completedMonths = (today.getFullYear() - experienceStart.getFullYear()) * 12
        + today.getMonth() - experienceStart.getMonth();
    var experienceYears = Math.floor(completedMonths / 6) / 2;
    $('#acoustics-experience').text(experienceYears + (experienceYears === 1 ? ' year' : ' years'));


    // Publication filter
    $('.publication-filter').on('click', function () {
        var filter = $(this).data('filter');

        $('.publication-filter')
            .removeClass('active btn-primary')
            .addClass('btn-outline-primary');
        $(this)
            .removeClass('btn-outline-primary')
            .addClass('active btn-primary');

        if (filter === 'first-author') {
            $('.publication-item').hide();
            $('.publication-item[data-first-author="true"]').fadeIn('fast');
        } else {
            $('.publication-item').fadeIn('fast');
        }
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);


// Publication filter: native JavaScript for reliable cross-browser behavior
(function () {
    "use strict";

    var filterButtons = document.querySelectorAll('.publication-filter');
    var publicationItems = document.querySelectorAll('.publication-item');

    for (var i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener('click', function () {
            var showFirstAuthorOnly = this.getAttribute('data-filter') === 'first-author';

            for (var buttonIndex = 0; buttonIndex < filterButtons.length; buttonIndex++) {
                filterButtons[buttonIndex].classList.remove('active', 'btn-primary');
                filterButtons[buttonIndex].classList.add('btn-outline-primary');
            }

            this.classList.remove('btn-outline-primary');
            this.classList.add('active', 'btn-primary');

            for (var itemIndex = 0; itemIndex < publicationItems.length; itemIndex++) {
                publicationItems[itemIndex].hidden = showFirstAuthorOnly
                    && publicationItems[itemIndex].getAttribute('data-first-author') !== 'true';
            }
        });
    }
}());

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


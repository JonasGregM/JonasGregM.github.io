// Render publication data from publications.js
(function () {
    "use strict";

    function appendAuthors(citation, authors) {
        for (var i = 0; i < authors.length; i++) {
            if (i > 0) {
                citation.appendChild(document.createTextNode(', '));
            }

            var authorNode = document.createElement(authors[i].indexOf('Meister') !== -1 ? 'strong' : 'span');
            authorNode.textContent = authors[i];
            citation.appendChild(authorNode);
        }
    }

    function createPublicationItem(publication) {
        var item = document.createElement('div');
        item.className = 'row pb-2 publication-item';
        item.setAttribute('data-first-author', String(publication.firstAuthor));

        var iconColumn = document.createElement('div');
        iconColumn.className = 'col-lg-2 mb-4';

        if (publication.topic === 'drone') {
            var iconWrapper = document.createElement('i');
            iconWrapper.className = 'service-icon bg-primary text-white mr-3';
            var image = document.createElement('img');
            image.className = 'img-fluid service-icon';
            image.src = 'img/drone_icon.jpg';
            image.alt = '';
            iconWrapper.appendChild(image);
            iconColumn.appendChild(iconWrapper);
        } else {
            var planeIcon = document.createElement('i');
            planeIcon.className = 'fas fa-2x fa-plane service-icon bg-primary text-white mr-3';
            planeIcon.setAttribute('aria-hidden', 'true');
            iconColumn.appendChild(planeIcon);
        }

        var contentColumn = document.createElement('div');
        contentColumn.className = 'col-lg-10 mb-4';

        var title = document.createElement('p');
        title.className = 'font-weight-bold mb-sm-1';
        title.textContent = publication.title;

        var citation = document.createElement('p');
        appendAuthors(citation, publication.authors);
        citation.appendChild(document.createTextNode(', ' + publication.details));

        contentColumn.appendChild(title);
        contentColumn.appendChild(citation);

        if (publication.url) {
            var link = document.createElement('a');
            link.className = 'text-decoration-none bg-readPaper text-readPaper';
            link.href = publication.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = 'Read Paper';
            contentColumn.appendChild(link);
        }

        item.appendChild(iconColumn);
        item.appendChild(contentColumn);
        return item;
    }

    function renderPublications(type, containerId) {
        var container = document.getElementById(containerId);
        if (!container || !window.PUBLICATIONS) {
            return;
        }

        for (var i = 0; i < window.PUBLICATIONS.length; i++) {
            if (window.PUBLICATIONS[i].type === type) {
                container.appendChild(createPublicationItem(window.PUBLICATIONS[i]));
            }
        }
    }

    renderPublications('journal', 'journal-publications');
    renderPublications('conference', 'conference-publications');
}());

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


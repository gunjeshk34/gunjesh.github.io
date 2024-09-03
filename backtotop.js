// script.js
$(document).ready(function () {
    // Show or hide the "Back to Top" button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) { // Show after scrolling down 200px
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // Click event to scroll to top
    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600); // Smooth scroll to top
        return false;
    });
});

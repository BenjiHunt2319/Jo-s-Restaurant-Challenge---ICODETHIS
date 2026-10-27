$(document).ready(() => {

    // scroll to cerain parts of the page
    $('a').click(function (e) {
        e.preventDefault();
        var targetDivId = $(this).data('target');
        var targetDiv = $('#' + targetDivId);
        if (targetDiv.length) {
            $('html, body').animate({
                scrollTop: targetDiv.offset().top
            }, 'slow');
        }
    });

    // onload load the hero sections/main
    setTimeout(() => {
        $('.hero-text').animate({
            'opacity': '1'
        }, 500);


        $('.hero-img').animate({
            'opacity': '1'
        }, 1200);
    }, 500);


    // open and close the top menu
    $('#open-menu').click(() => {
        $('.top-menu').animate({
            'right': '0'
        }, 400);
    });

    $('#close-menu').click(() => {
        $('.top-menu').animate({
            'right': '-100%'
        }, 400);
    });

    // check scroll
    const aboutTitle = document.querySelector('.about-title');
    const aboutImg = document.querySelector('.about-img-container');
    const banner = document.querySelector('.banner');

    window.addEventListener('scroll', () => {
        let scrollYPos = window.scrollY;

        switch (true) {
            case (scrollYPos >= 550):
                aboutTitle.style.transform = 'translateX(0)';
                aboutImg.style.transform = 'translateX(0)';
            // break;

            default:
                // Handle other cases if needed
                break;
        }
    });


});

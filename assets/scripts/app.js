AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
});

$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $(".parallax").parallax();
    $('.modal').modal();
    $(".recipe-link").dropdown({hover : true})
    $(".services-link").dropdown({hover : true});
    $('scrollspy').scrollSpy()
    

    // settting even listener for hover state to open and close the dropdown on hover

    // owl carousel
    $('#special-menu .owl-carousel').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive : {
            0 : {
             items :   1
            },
            600: {
                items : 2
            },
            1000 : {
                items : 3
            }
        },
        nav : false,
        autoplayTimeout: 3000,
        autoplayHoverPause:true
      })

    $('.owl-carousel.testimonies').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1,
        nav : false,
        autoplayTimeout: 5000,
        autoplayHoverPause:true
      })
});
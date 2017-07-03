$(document).ready(function(){

    var one = $('#owl-first');
    var two = $('#owl-second');

    one.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        navText: [
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
        ],
    });

    two.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        navText: [
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
        ],
    });

    $('.open_menu').click(function(){
            $('.mobile_menu_list').slideToggle();
    });
});

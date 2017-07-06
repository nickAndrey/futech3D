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



/*=======================  FIRST SLIDER  ========================*/

    // var slideIndex = 1;
    // showSlides(slideIndex);
    //
    // function plusSlides(n){
    //     showSlides(slideIndex += n);
    // }
    //
    // function currentSlide(n){
    //     showSlides(slideIndex = n);
    // }
    //
    // function showSlides(n){
    //     var i;
    //     var slides = document.getElementsByClassName('mySlides');
    //
    //
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }
    //     for( i=0; i < slides.length; i++ ){
    //         slides[i].style.display = "none";
    //     }
    //
    //     slides[slideIndex-1].style.display = "block";
    // }

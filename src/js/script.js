$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow_right.svg"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });
});
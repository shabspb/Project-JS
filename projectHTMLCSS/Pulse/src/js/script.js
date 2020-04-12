/* $(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>',
    });
});                            !!!!!!jquery код для карусели!!!!!!*/

const slider = tns({
    container: '.carousel__inner',
    slideBy: 'page',
    controls: false,
    nav: false,
    responsive: {
        320: {
            nav: true,
        },
        1199: {
            nav: false,
        },
    }
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});
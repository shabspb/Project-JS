/* $(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>',
    });
});                            !!!!!!jquery код для карусели!!!!!!*/

// Carousel tiny slider
const slider = tns({
    container: '.carousel__inner',
    slideBy: 'page',
    controls: false,
    nav: true,
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});



$(document).ready(function () {

    // Tabs

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    // Validation form

    function valideForms(forms) {
        $(forms).validate({
            rules: {
                // compound rule
                name: {
                    required: true,
                    minlength: 2
                },
                // simple rule, converted to {required:true}
                phone: "required",

                // compound rule
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите ваше имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите свой телефон",
                email: {
                    required: "Нам нужен ваш имейл адресс для связи с вами",
                    email: "Ваш имейл адресс должен быть в формате name@domain.com"
                }
            }
        });
    }

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    // Mask phone number

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});
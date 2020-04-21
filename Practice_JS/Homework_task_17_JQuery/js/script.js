$(document).ready(function () {

    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function () {
        $('.overlay').fadeIn(500);
        $('.modal').slideDown(1500);
    });

    $('.close').click(function () {
        $('.modal').slideUp(500);
        $('.overlay').fadeOut(1500);
    });
});
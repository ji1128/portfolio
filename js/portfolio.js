$(document).ready(function () {

    // mo-menu -----------------------------
    $('.menu-toggle-btn').click(function () {
        $('#gnb-mo').toggleClass('show');
        console.log('hi');
        $('.menu-toggle-btn').toggleClass('active');
        $('.mo-menu-box').toggleClass('show');
    });
    $('.menu-toggle-btn.active').click(function () {
        $('#gnb-mo').removeClass('show');
        $('.menu-toggle-btn').removeClass('active');
        $('.mo-menu-box').removeClass('show');
    });

})
$(".switch__link").click(function(e) {
    e.preventDefault();

    var toggleText = $(this).data('toggle-text');
    $(this).data('toggle-text', $(this).text()).text(toggleText);

    $(".tabs__week").toggleClass( "active" );
    $(".week").toggleClass( "active" );
});

$(function(){
    $("#phone").mask("+7-999-999-99-99");
    $("#phone2").mask("+7-999-999-99-99");
    $("#phone3").mask("+7-999-999-99-99");
    $("#phone4").mask("+7-999-999-99-99");
});

var replace = function() {
    if($(window).width() < 768){
        $(".monday").text('Пн');
        $(".tuesday").text('Вт');
        $(".wednesday").text('Ср');
        $(".thursday").text('Чт');
        $(".friday").text('Пт');
        $(".saturday").text('Сб');
        $(".sunday").text('Вс');
    }
};

replace();
$(window).resize(replace);

if($(window).width() < 768){
    $('.content').slick({
        variableWidth: true
    });

    $('#options__item1').append( $('#options__item2>div') );

    $('#options__item1').slick({
        // slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
}




// var slider = $('.slider');
// var sld = function() {
//     if ($(window).width() > 320) {
//
//         slider.bxSlider({
//             auto: true,
//             pause: 2000,
//             autoHover: true
//         });
//     } else {
//         slider.destroySlider();
//     }
// };
// sld();
// $(window).resize(sld);
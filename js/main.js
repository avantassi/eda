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

$(".switch__link").click(function(e) {
    e.preventDefault();
    $(".tabs__week").toggleClass( "active" );
    $(".week").toggleClass( "active" );
});
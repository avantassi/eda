$(".switch__link").click(function(e) {
    e.preventDefault();

    var toggleText = $(this).data('toggle-text');

    $(this).data('toggle-text', $(this).text()).text(toggleText);

    $(".tabs__week").toggleClass( "active" );
    $(".week").toggleClass( "active" );
});
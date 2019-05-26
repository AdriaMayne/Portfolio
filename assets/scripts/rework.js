$(function() {
    var view_width = $(window).width();

    if (view_width > 1140) {
        $('#frontend').hover(function() {
            $('#frontend').addClass("patata");
            $('#backend').addClass("rotate rotate-acw");
        }, function() {
            $('#frontend').removeClass("patata");
            $('#backend').removeClass("rotate rotate-acw");
        });

        $('#backend').hover(function() {
            $('#backend').addClass("patata");
            $('#frontend').addClass("rotate rotate-ccw");
        }, function() {
            $('#backend').removeClass("patata");
            $('#frontend').removeClass("rotate rotate-ccw");
        });
    }
});
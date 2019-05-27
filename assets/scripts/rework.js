$(function() {
    var view_width = $(window).width();

    if (view_width > 1140) {
        $('#frontend').hover(function() {
            $('#frontend').addClass("patata");
            $('#frontend-title').addClass("d-none");
            $('#backend').addClass("rotate rotate-acw");
        }, function() {
            $('#frontend').removeClass("patata");
            $('#frontend-title').removeClass("d-none");
            $('#backend').removeClass("rotate rotate-acw");
        });

        $('#backend').hover(function() {
            $('#backend').addClass("patata");
            $('#backend-title').addClass("d-none");
            $('#frontend').addClass("rotate rotate-ccw");
        }, function() {
            $('#backend').removeClass("patata");
            $('#backend-title').removeClass("d-none");
            $('#frontend').removeClass("rotate rotate-ccw");
        });
    }
});
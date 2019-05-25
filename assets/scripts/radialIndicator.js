$(function() {
    var view_width = $(window).width();
    var positions = [];

    $('#content-front').removeClass('d-none');
    $('#category-front').addClass('grow-faker');

    $('.indicatorContainer').each(function() {
        var elem = $(this);
        var percentage = elem.data('percentage');
    
        elem.radialIndicator({
            barColor: '#87CEEB',
            barWidth: 10,
            initValue: percentage,
            roundCorner : true,
            percentage: true
        });

        if (view_width > 1140) {
            var left = Math.random() * ($('#content-front').width() - elem.width());
            var top = Math.random() * ($('.content').height() - elem.height());

            elem.css({
                left: left,
                top: top
            });
        }
    });
    
    $('#category-front').removeClass('grow-faker');

    if (view_width > 1140) {
        $('#content-front').addClass('d-none');
    }

    window.setTimeout(function(){
        $('.grow').addClass('grow-transition');
    }, 1);
});
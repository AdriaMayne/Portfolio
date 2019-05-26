$(function() {
    var rotate_acw = 'rotate rotate-acw';
    var rotate_ccw = 'rotate rotate-ccw';


    function classes() {
        var view_width = $(window).width();
    
        if (view_width < 1140) {
            $('#content-front').removeClass('d-none');
            $('#content-personal').removeClass('d-none');
            $('#content-back').removeClass('d-none');
        } else {
            $('#category-front').hover(function(){
                $('#category-personal').addClass(rotate_acw);
                $('#category-back').addClass(rotate_acw);

                window.setTimeout(function(){
                    $('#content-front').removeClass('d-none');
                }, 1000);
            }, function(){
                $('#category-personal').removeClass(rotate_acw);
                $('#category-back').removeClass(rotate_acw);
                $('#content-front').addClass('d-none');
            });
        
            $('#category-personal').hover(function(){
                $('#category-front').addClass(rotate_ccw);
                $('#category-back').addClass(rotate_acw);
                $('#content-personal').removeClass('d-none');
            }, function(){
                $('#category-front').removeClass(rotate_ccw);
                $('#category-back').removeClass(rotate_acw);
                $('#content-personal').addClass('d-none');
            });
        
            $('#category-back').hover(function(){
                $('#category-personal').addClass(rotate_ccw);
                $('#category-front').addClass(rotate_ccw);
                $('#content-back').removeClass('d-none');
            }, function(){
                $('#category-personal').removeClass(rotate_ccw);
                $('#category-front').removeClass(rotate_ccw);
                $('#content-back').addClass('d-none');
            });
        }
    }

    classes();

    
});
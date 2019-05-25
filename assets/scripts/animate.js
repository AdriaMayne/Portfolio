$(function() {
    var animationName = "animated bounce";
    var animationEnd = "animationend";
    var interval;

    function animate() {
        $('#arrow').addClass(animationName).one(animationEnd, function() {
            $('#arrow').removeClass(animationName); 
        });
    }

    function start() {
        interval = setInterval(function(){
            animate();
        }, 4000);
    }

    $('#arrow').hover(function(){
        $('#arrow').removeClass(animationName);
        clearInterval(interval);
    }, function(){
        start();
    });

    start();
});
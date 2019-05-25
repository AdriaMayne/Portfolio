$(function() {
    var songs = new Array(
        "", 
        "", 
        "",
    );
    var current = 0;
    var audio = $('#audio_player');
    var state = false;

    $('#play_btn').on('click', function() {
        if (!state) {
            audio.play();
            state = !state;
        } else {
            audio.pause();
            state = !state;
        }
    });

    $('#next_btn').on('click', function() {
        current++;
        audio.src = songs[current];
    });

    $('#volume_slider').on('change', function() {
        var volume = ($('#volume_slider').val()/100);
        audio.volume = volume;
    });
});
// the example from the docs :)
$(document).ready(function() {
    $('#timer_container').countdown("2017/03/22", function(event) {
        $('#days_in').text(event.strftime('%D'));   
        $('#hours_in').text(event.strftime('%H'));
        $('#minutes_in').text(event.strftime('%M'));
        $('#seconds_in').text(event.strftime('%S'));
    });
});


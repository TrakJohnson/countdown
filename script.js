$(document).ready(function() {
    var date = getURLParameter("date");
    if (date) {
        date = date.split(":")[0].split("-").join("/") + " " + date.split(":")[1].split("-").join(":");
    } else {
        date = "2017/03/22 10:30
    }
    console.log(date);
    $('#timer_container').countdown(date, function(event) {
        $('#days_in').text(event.strftime('%D'));   
        $('#hours_in').text(event.strftime('%H'));
        $('#minutes_in').text(event.strftime('%M'));
        $('#seconds_in').text(event.strftime('%S'));
    });
});

function getURLParameter(name) {
    return decodeURIComponent(
        (new RegExp('[?|$]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
            location.search
        ) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

/*
// only in seconds
$(document).ready(function() {
    $('#timer_container').countdown("2017/03/22", function(event) {
        //$('#days_in').text(event.strftime('%D'));   
        //$('#hours_in').text(event.strftime('%H'));
        //$('#minutes_in').text(event.strftime('%M'));
        
        var days = event.offset.totalDays;
        var hrs = event.offset.hours + days * 24;
        var minutes = event.offset.minutes + hrs * 60;
        var seconds = event.offset.seconds + minutes * 60;
        $('#seconds_in').text(seconds);
    });
});
*/

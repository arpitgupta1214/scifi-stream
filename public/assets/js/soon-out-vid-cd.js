var end_time_for_js_date = document.getElementById('soonOutVidforJs').value;
var unix_end_time_for_js_date = new Date(end_time_for_js_date).getTime();
var queue_btn = parseInt(document.getElementById('queue-btn').value);


setInterval(function currentStreamerCD() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var range = unix_end_time_for_js_date - now;

    // Time calculations for days, hours, minutes and seconds

    var finTime = new Date(range);
    var hours = finTime.getHours();
// Minutes part from the timestamp
    var minutes = "0" + finTime.getMinutes();
// Seconds part from the timestamp
    var seconds = "0" + finTime.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    document.getElementById("queue-btn").innerHTML = queue_btn + ' links /// ' + formattedTime + " minutes left";
    // If the count down is over, write some text

    if (hours <= 0 && minutes <= 4) {
        document.getElementById('active-stream').classList.add('streamName');

    }
    if (hours <= 0 && minutes <= 0 && seconds <= 1) {


    }


}, 1000);

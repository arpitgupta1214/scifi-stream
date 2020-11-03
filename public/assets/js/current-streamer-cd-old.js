var end_time_for_js_date = document.getElementById('soonOutVidforJs').value;
var unix_end_time_for_js_date = new Date(end_time_for_js_date).getTime();
var queue_btn = parseInt(document.getElementById('queue-dropdown-btn').value) ?? '';


var current_video_id = parseInt(document.getElementById('current_id').value);


var current_video_start_time = document.getElementById('current_start_time').value;
var Unix_current_start_time = new Date(current_video_start_time).getTime();

var current_video_stream_duration = document.getElementById('current_stream_duration').value;
var int_current_stream_duration = parseInt(current_video_stream_duration, 10);

var start_time_timeF = new Date(Unix_current_start_time);
var current_track_ends = start_time_timeF.setSeconds(int_current_stream_duration);


var soonOutVid_ID = document.getElementById('soonOutVids_ID').value;

var new_current_track_end = document.getElementById('current_end_time').value;
var unix_new_current_track_end = new Date(new_current_track_end);


// console.log('GAVTETST : ' + current_video_start_time)


setInterval(function currentStreamerCD() {





    // Get today's date and time
    var now = new MyDate().nowUtcUnix();


    // Find the distance between now and the count down date
    var new_range = unix_new_current_track_end - now; // active left time distance


    var range = current_track_ends - now;
    var rangeforfastoutvid = unix_end_time_for_js_date - now;


    //  TEST AREA START


    // console.log("current end time " + new_current_track_end);

    var new_test_current_video_start_time = current_video_start_time.substring(current_video_start_time.indexOf(" ") + 1);
    var new_test_stream_duration = current_video_stream_duration.substring(current_video_stream_duration.indexOf(" ") + 1);
    var new_test_current_track_end = new_current_track_end.substring(new_current_track_end.indexOf(" ") + 1);


    var creating_time_hour = ("0" + new Date().getUTCHours()).slice(-2);
    var creating_time_minute = ("0" + new Date().getUTCMinutes()).slice(-2);
    var creating_time_second = ("0" + new Date().getUTCSeconds()).slice(-2);

    var FUCKGIN_TEST = new Date().toISOString();

    var time_str = creating_time_hour + ":" + creating_time_minute + ":" + creating_time_second;



    // var myNumber = 5;
    // var formattedNumber = ("0" + myNumber).slice(-2);
    // console.log("VTESTAV "+formattedNumber);

    var test_track_end = Date.parse(new_test_current_track_end);
    var test_now = time_str;
    // console.log("TO ISO " + FUCKGIN_TEST);
    var test_distance = test_track_end - test_now;


    var finTimejsfastVi = new Date(test_distance);
    var hoursjsfastVi = finTimejsfastVi.getUTCHours();
    // Minutes part from the timestamp
    var minutesjsfastVi = "0" + finTimejsfastVi.getUTCMinutes();
    // Seconds part from the timestamp
    var secondsjsfastVi = "0" + finTimejsfastVi.getUTCSeconds();

    var DHourInMin = parseInt(hoursjsfastVi * 60);
    var DAllMins = DHourInMin + parseInt(minutesjsfastVi);
    var test_newFormatForAir = DAllMins + ':' + secondsjsfastVi.substr(-2);


    //  TEST AREA ENDS


    // Time calculations for days, hours, minutes and seconds

    var finTime = new Date(range);
    var hours = finTime.getUTCHours();
    var minutes = "0" + finTime.getUTCMinutes();
    var seconds = "0" + finTime.getUTCSeconds();


    var finTimejsfastVid = new Date(rangeforfastoutvid);
    var hoursjsfastVid = finTimejsfastVid.getUTCHours();
    // Minutes part from the timestamp
    var minutesjsfastVid = "0" + finTimejsfastVid.getUTCMinutes();
    // Seconds part from the timestamp
    var secondsjsfastVid = "0" + finTimejsfastVid.getUTCSeconds();

    var QueHourInMin = parseInt(hoursjsfastVid * 60);
    var QeAllMins = QueHourInMin + parseInt(minutesjsfastVid);






    /**  active left time on air starts */

    var newFinishTime = new Date(new_range);
    var hoursNew = newFinishTime.getUTCHours();
// Minutes part from the timestamp
    var minutesNew = "0" + newFinishTime.getUTCMinutes();
// Seconds part from the timestamp
    var secondsNew = "0" + newFinishTime.getUTCSeconds();

    var HourInMin = parseInt(hoursNew * 60);
    var AllMins = HourInMin + parseInt(minutesNew);
    var newFormatForAir = AllMins + ':' + secondsNew.substr(-2);

    document.getElementById("onAirTimeLeft").innerHTML =
        newFormatForAir + " minutes left";

    // less than 5 min on active
    if (hours <= 0 && minutes <= 4) {
        document.getElementById('active-stream').classList.add('streamName');
    }

    /**  active left time on air Ends */



    /**  Queue time on  "Starts"*/
    if (hoursjsfastVid <= 0
        && minutesjsfastVid.substr(-2) <= 0
        && secondsjsfastVid.substr(-2) <= 0
        ||  hoursjsfastVid > 2)
    {

        document.getElementById("queue-dropdown-btn").innerHTML =
            '<queue style="text-align: left; font-family: Streamis; font-size: 15px; font-weight: bold; ">'
            + queue_btn
            + ' LINKS/// '
            + '<queue/>'
            + '<queued style="font-weight: normal; font-size: 13px;">'
            + ' Next in ' + '0:00' + '</queued>';



    } else {
        document.getElementById("queue-dropdown-btn").innerHTML =
            '<queue style="text-align: left; font-family: Streamis; font-size: 15px; font-weight: bold; ">'
            + queue_btn
            + ' LINKS/// '
            + '<queue/>'
            + '<queued style="font-weight: normal; font-size: 13px;">'
            + ' Next in '
            + QeAllMins
            + ':'
            + secondsjsfastVid.substr(-2) +' min ' + '</queued>';
    }

    /**  Queue  time on  "Ends"*/





    /**  Time To remove Starts*/

    if (hours <= 0 && minutes <= 0 && seconds <= 0) {


        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            enctype: 'multipart/form-data',
            url: "/jsDeleteStream/" + current_video_id,
            type: "POST",

            data: {},
            success: function () {
                location.replace("/");
            }
        })
    }

    /**  Time To remove finished*/









}, 1000);


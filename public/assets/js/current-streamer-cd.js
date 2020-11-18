var end_time_for_js_date = document.getElementById("soonOutVidforJs").value;
var queue_btn = parseInt(document.getElementById("queue-dropdown-btn").value);
var current_video_id = parseInt(document.getElementById("current_id").value);
var new_current_track_end = document.getElementById("current_end_time").value;

setInterval(function currentStreamerCD() {
    /**  active left time on air */

    var now = moment.utc();
    var end = moment.utc(new_current_track_end);
    var minutes = end.diff(now, "minutes");
    var seconds = end.diff(now, "seconds") % 60;
    var hours = end.diff(now, "hours");

    document.getElementById("onAirTimeLeft").innerHTML =
        ("00" + (minutes > 0 ? minutes : 0)).substr(-2) +
        ":" +
        ("00" + (seconds > 0 ? seconds : 0)).substr(-2) +
        " minutes left";

    // less than 5 min on active
    if (hours <= 0 && minutes <= 4) {
        document.getElementById("active-stream").classList.add("streamName");
    }

    /**  Queue time on  */

    var soon_end = moment.utc(end_time_for_js_date);
    var soon_minutes = soon_end.diff(now, "minutes");
    var soon_seconds = soon_end.diff(now, "seconds") % 60;
    var soon_hours = soon_end.diff(now, "hours");

    if (
        (soon_hours <= 0 && soon_minutes <= 0 && soon_seconds <= 0) ||
        soon_hours > 2
    ) {
        document.getElementById("queue-dropdown-btn").innerHTML =
            '<queue style="text-align: left; font-family: Streamis; font-size: 15px; font-weight: bold; ">' +
            queue_btn +
            " LINKS/// " +
            "<queue/>" +
            '<queued style="font-weight: normal; font-size: 13px;">' +
            " Next in " +
            "0:00" +
            "</queued>";
    } else {
        document.getElementById("queue-dropdown-btn").innerHTML =
            '<queue style="text-align: left; font-family: Streamis; font-size: 15px; font-weight: bold; ">' +
            queue_btn +
            " LINKS/// " +
            "<queue/>" +
            '<queued style="font-weight: normal; font-size: 13px;">' +
            " Next in " +
            soon_minutes +
            ":" +
            soon_seconds +
            " min " +
            "</queued>";
    }

    /**  Queue  time on  "Ends"*/

    /**  Time To remove Starts*/

    if (hours <= 0 && minutes <= 0 && seconds <= 0) {
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            enctype: "multipart/form-data",
            url: "/jsDeleteStream/" + current_video_id,
            type: "POST",

            data: {},
            success: function () {
                location.replace("/");
            },
        });
    }

    /**  Time To remove finished*/
}, 1000);

var stream = document.getElementById("stream").src;
var btnMute = document.getElementById("mute");
var btnUnMute = document.getElementById("unmute");
var iframe = document.getElementById("stream");

var video_id = stream.substring(
    stream.lastIndexOf("/embed/video/") + 13,
    stream.lastIndexOf("?info=0&api")
);

var video_seek = stream.substring(
    stream.lastIndexOf("=1&start=") + 9,
    stream.lastIndexOf("&loop")
);

if (stream.includes("dailymotion.com")) {
    //Give time to load dailymotion script
    setTimeout(function dailyMotionSoundControl() {
        DM.init({
            apiKey: "",
            status: false, // check login status
            cookie: true, // enable cookies to allow the server to access the session
        });

        if (mobileCheck()) {
            var player = DM.player(iframe, {
                video: video_id,
                // width: "100%",
                // height: "100%",

                params: {
                    autoplay: 1,
                    controls: 0,
                    mute: true,
                    start: video_seek,
                    //  chromeless: 1
                },
            });
        } else {
            var player = DM.player(iframe, {
                video: video_id,
                // width: "100%",
                // height: "100%",

                params: {
                    autoplay: 1,
                    controls: 0,
                    mute: false,
                    start: video_seek,
                    //  chromeless: 1
                },
            });
        }

        // player.addEventListener("apiready", function (e) {
        //     console.log("api ready", e);
        // });

        // player.addEventListener("error", function (e) {
        //     console.log("error", e);
        // });

        // player.addEventListener("canplay", function (e) {
        //     console.log("canplay", e);
        // });

        // player.addEventListener("canplaythrough", function (e) {
        //     console.log("canplaythrough", e);
        // });

        // player.addEventListener("progress", function (e) {
        //     console.log("progress", e);
        // });

        // player.addEventListener("ad_play", function (e) {
        //     console.log("ad_play", e);
        // });

        // player.addEventListener("ad_end", function (e) {
        //     console.log("ad_end", e);
        // });

        player.addEventListener("end", function (e) {
            console.log("starting video", e);
            e.target.play();
            player.play();
        });

        // document.querySelector('#unmute').addEventListener('click', function () {
        //     console.log('click on unmute');
        //     player.setMuted(false);
        //     btnMute.hidden = false;
        //     btnUnMute.hidden = true;
        // });
        //
        // document.querySelector('#mute').addEventListener('click', function () {
        //     console.log('click on mute');
        //     player.setMuted(true);
        //     btnMute.hidden = true;
        //     btnUnMute.hidden = false;
        // });

        document
            .querySelector("#mute-div")
            .addEventListener("click", function () {
                // document.getElementById('mute_new').style.display = 'none';
                // var mute = document.getElementById('mute_new');
                // var unmute = document.getElementById('unmute_new');
                // var style = window.getComputedStyle(mute);
                // console.log(style.visibility);
                if (player.paused) {
                    player.play();
                    player.setMuted(false);
                } else {
                    player.setMuted(!player.muted);
                }
                // if (style.visibility !== "hidden") {
                //     player.setMuted(true);

                //     // $('#mute_new').fadeIn();
                //     mute.style.visibility = "hidden";
                //     // unmute.style.visibility = 'visible';
                //     // btnMute.hidden = false;
                //     // btnUnMute.hidden = true;
                // } else {
                //     player.setMuted(false);
                //     // $('#mute_new').fadeOut('slowly');
                //     mute.style.visibility = "visible";
                //     // unmute.style.visibility = 'hidden';
                //     // btnMute.hidden = true;
                //     // btnUnMute.hidden = false;
                // }

                // if (window.mobileCheck()) {
                //     player.play();
                // }
            });

        $(window).keypress(function (e) {
            document.getElementById("mute_new").style.display = "none";

            if (e.which === 32) {
                if (e.which === 32) {
                    var mute = document.getElementById("mute_new");
                    var style = window.getComputedStyle(mute);
                    console.log(style.visibility);

                    // player.toggleMuted();
                    if (style.visibility === "hidden") {
                        player.setMuted(true);
                        $("#mute_new").fadeIn();
                        mute.style.visibility = "visible";
                        // btnMute.hidden = false;
                        // btnUnMute.hidden = true;
                    } else {
                        player.setMuted(false);
                        $("#mute_new").fadeOut("slowly");
                        mute.style.visibility = "hidden";
                        // btnMute.hidden = true;
                        // btnUnMute.hidden = false;
                    }
                }
            }
        });
    }, 100);
}

var url = document.getElementById("stream").src;
var btnMute = document.getElementById("mute");
var btnUnMute = document.getElementById("unmute");
var iframe = document.getElementById("stream");

if (url.toString().indexOf("soundcloud.com") !== -1) {
    setTimeout(function () {
        var now = moment.utc();
        var current_start_time = document.getElementById("current_start_time")
            .value;

        var start_time = moment.utc(current_start_time);

        var current_video_duration = parseInt(
            document.getElementById("current_video_duration").value * 1000
        );

        var difference = now.diff(start_time, "milliseconds");

        var seekMilliSeonds = Math.abs(difference % current_video_duration);

        // if (SC.Widget.Events.READY == 'ready') {
        var widget = SC.Widget(iframe);
        widget.seekTo(seekMilliSeonds);

        // ______________________________ test area

        // console.log('CHEMI CHECKIA ' + widget.getCurrentSound());

        // console.log(SC.Widget.Events.READY);

        // if (mobileAndTabletCheck() == true){
        //     alert('mobilia');

        // }

        // widget.bind(SC.Widget.Events.LOAD_PROGRESS , function() {
        //
        //     widget.getCurrentSound(function(currentSound) {
        //         console.log('sound ' + currentSound);
        //     });
        //     widget.bind(SC.Widget.Events.PLAY, function() {
        //         // get information about currently playing sound
        //
        //     });
        // });

        // _________________________  test area end

        widget.bind(SC.Widget.Events.FINISH, function () {
            console.log("Finished starting again");
            widget.play();
        });

        widget.bind(!SC.Widget.Events.PLAY_PROGRESS, function () {
            console.log("Finished starting again");
            widget.play();
        });

        // document.querySelector('#unmute').addEventListener('click', function () {
        //     console.log('click on unmute');
        //     widget.setVolume(100);
        //     // widget.play();
        //     btnMute.hidden = false;
        //     btnUnMute.hidden = true;
        // });

        document
            .querySelector("#mute-div")
            .addEventListener("click", function () {
                widget.isPaused((paused) => {
                    if (paused) {
                        widget.play();
                        widget.setVolume(100);
                    } else {
                        widget.getVolume((volume) => {
                            if (volume === 100) {
                                widget.setVolume(0);
                            } else {
                                widget.setVolume(100);
                            }
                        });
                    }
                });
            });

        // document.querySelector('#mute').addEventListener('click', function () {
        //     console.log('click on mute');
        //     widget.setVolume(0);
        //     // widget.pause();
        //     btnMute.hidden = true;
        //     btnUnMute.hidden = false;
        // });

        $(window).keypress(function (e) {
            if (e.which === 32) {
                if (e.which === 32) {
                    widget.getVolume(function (volume) {
                        if (volume === 100) {
                            // console.log('clicked on mute');
                            widget.setVolume(0);
                            // $('#mute_new').fadeIn();
                            // document.getElementById('mute_new').style.visibility = 'visible';
                            // btnMute.hidden = true;
                            // btnUnMute.hidden = false;
                        } else {
                            console.log("clicked on unmute");
                            widget.setVolume(100);
                            // $('#mute_new').fadeOut('slowly');
                            // btnMute.hidden = false;
                            // btnUnMute.hidden = true;
                        }
                    });

                    // if (btnMute.hidden) {
                    //
                    //     widget.setVolume(100);
                    //     btnMute.hidden = false;
                    //     btnUnMute.hidden = true;
                    // } else {
                    //
                    //     widget.setVolume(0);
                    //     btnMute.hidden = true;
                    //     btnUnMute.hidden = false;
                    //
                    // }
                }
            }
        });
        // }
    }, 1000);
}

window.mobileAndTabletCheck = function () {
    let check = false;
    (function (a) {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
            )
        )
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

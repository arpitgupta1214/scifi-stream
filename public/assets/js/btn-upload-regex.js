var gettingReadyUrl = document.getElementById('input-link');


function checkUrlAndGo() {

    var ip_active = document.getElementById('user_ip_is_active').value;
    // console.log(ip_active);
    // throw new Error('Your Link is active beffff!');
    if (ip_active) {

        $(".link-already-active-success-div").css({
            "display": "none",
        });

        $(".link-already-active-error-div").css({
            "display": "block",
            "visibility": "visible"
        });
        setTimeout(function () {
            document.getElementById("link-already-active-error-div").style.visibility = "hidden";
        }, 4000);


    } else {

        if (YouTubeValidateUrl() === true
            || VimeoValidateUrl() === true
            || DailymotionValidateUrl() === true
            || SoundCloudValidateUrl() === true) {
            var url = gettingReadyUrl.value;
            var link = document.getElementById('input-link').value;
            var time = document.getElementById('stream-duration').value;

            let data = {
                link: link,
                time: time
            };

            if (url.toString().indexOf("youtube.com") !== -1 || url.toString().indexOf("youtu.be") !== -1) {
                YouTubeValidateUrl();

                if (YouTubeValidateUrl()) {

                    if (!document.getElementById("stream-duration").validity.rangeOverflow
                        && !document.getElementById("stream-duration").validity.valueMissing) {


                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            enctype: 'multipart/form-data',
                            url: "/stream",
                            type: "POST",

                            data: {
                                link: link,
                                time: time,
                            },
                            success: function () {

                                $(".link-already-active-success-div")
                                    .css({
                                        // "display": "block",
                                        "visibility": "visible",
                                        "font-size": "1.5vw"
                                    });

                                document.getElementById('upload-btn').style =
                                    "background-color:#00ff01; color:black; border-radius:0; letter-spacing: 0px;";
                                document.getElementById('upload-btn').innerHTML = "<text>&#161;" + 'success!' + "</text>";


                                setTimeout(function () {
                                    location.replace("/");
                                }, 3000);


                            },

                            error: function (e) {

                                $(".link-already-active-success-div").css({
                                    "display": "none",
                                });

                                $(".link-already-active-error-div").css({
                                    "display": "block",
                                    "padding": "10%", "text-align": "center", "visibility": "visible"
                                });

                                document.getElementById("link-already-active-error-div").innerText
                                    = 'Ops, probably incorrect or private video, please enter another link ';


                                setTimeout(function () {

                                    $(".link-already-active-error-div").css({
                                        "display": "none",
                                        "visibility": "hidden"
                                    });
                                    $(".link-already-active-success-div").css({
                                        "display": "block",
                                    });

                                }, 4000);
                            }
                        })

                    }

                }

            }

            if (url.toString().indexOf('vimeo.com') !== -1) {

                VimeoValidateUrl();

                if (VimeoValidateUrl()) {

                    if (!document.getElementById("stream-duration").validity.rangeOverflow
                        && !document.getElementById("stream-duration").validity.valueMissing) {



                        // var link = document.getElementById('input-link').value;
                        // var time = document.getElementById('stream-duration').value;


                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            enctype: 'multipart/form-data',
                            url: "/stream",
                            type: "POST",

                            data: {
                                link: link,
                                time: time,
                            },
                            success: function () {

                                document.getElementById('upload-btn').style =
                                    "background-color:#00ff01; color:black; border-radius:0; letter-spacing: 0px;";
                                document.getElementById('upload-btn').innerHTML = "<text>&#161;" + 'success!' + "</text>";

                                $(".link-already-active-success-div")
                                    .css({
                                        // "display": "block",
                                        "visibility": "visible",
                                        "font-size": "1.5vw"
                                    });


                                setTimeout(function () {
                                    location.replace("/");
                                }, 3000);

                            },
                            error: function (e) {

                                $(".link-already-active-success-div").css({
                                    "display": "none",
                                });

                                $(".link-already-active-error-div").css({
                                    "display": "block",
                                    "padding": "10%", "text-align": "center", "visibility": "visible"
                                });

                                document.getElementById("link-already-active-error-div").innerText
                                    = 'Ops, probably incorrect or private video, please enter another link ';


                                setTimeout(function () {

                                    $(".link-already-active-error-div").css({
                                        "display": "none",
                                        "visibility": "hidden"
                                    });
                                    $(".link-already-active-success-div").css({
                                        "display": "block",
                                    });

                                }, 4000);


                            }
                        })

                    }

                }

            }

            if (url.toString().indexOf('dailymotion.com') !== -1) {

                DailymotionValidateUrl();

                if (DailymotionValidateUrl()) {

                    if (!document.getElementById("stream-duration").validity.rangeOverflow
                        && !document.getElementById("stream-duration").validity.valueMissing) {


                        // var link = document.getElementById('input-link').value;
                        // var time = document.getElementById('stream-duration').value;


                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            enctype: 'multipart/form-data',
                            url: "/stream",
                            type: "POST",

                            data: {
                                link: link,
                                time: time,
                            },
                            success: function (s) {

                                document.getElementById('upload-btn').style =
                                    "background-color:#00ff01; color:black; border-radius:0; letter-spacing: 0px;";
                                document.getElementById('upload-btn').innerHTML = "<text>&#161;" + 'success!' + "</text>";

                                $(".link-already-active-success-div")
                                    .css({
                                        // "display": "block",
                                        "visibility": "visible",
                                        "font-size": "1.5vw"
                                    });


                                setTimeout(function () {
                                    location.replace("/");
                                }, 3000);

                            },
                            error: function (e) {

                                $(".link-already-active-success-div").css({
                                    "display": "none",
                                });

                                $(".link-already-active-error-div").css({
                                    "display": "block",
                                    "padding": "10%", "text-align": "center", "visibility": "visible"
                                });

                                document.getElementById("link-already-active-error-div").innerText
                                    = 'Ops, probably incorrect or private video, please enter another link ';


                                setTimeout(function () {

                                    $(".link-already-active-error-div").css({
                                        "display": "none",
                                       "visibility": "hidden"
                                    });
                                    $(".link-already-active-success-div").css({
                                        "display": "block",
                                    });

                                }, 4000);
                            }
                        })

                    }

                }
            }

            if (url.toString().indexOf('soundcloud.com') !== -1) {

                SoundCloudValidateUrl();


                if (SoundCloudValidateUrl()) {

                    if (!document.getElementById("stream-duration").validity.rangeOverflow
                        && !document.getElementById("stream-duration").validity.valueMissing) {



                        // var link = document.getElementById('input-link').value;
                        // var time = document.getElementById('stream-duration').value;


                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            enctype: 'multipart/form-data',
                            url: "/stream",
                            type: "POST",

                            data: {
                                link: link,
                                time: time,
                            },
                            success: function () {

                                document.getElementById('upload-btn').style =
                                    "background-color:#00ff01; color:black; border-radius:0; letter-spacing: 0px;";
                                document.getElementById('upload-btn').innerHTML = "<text>&#161;" + 'success!' + "</text>";

                                $(".link-already-active-success-div")
                                    .css({
                                        // "display": "block",
                                        "visibility": "visible",
                                        "font-size": "1.5vw"
                                    });


                                setTimeout(function () {
                                    location.replace("/");
                                }, 3000);

                            },
                            error: function (e) {

                                $(".link-already-active-success-div").css({
                                    "display": "none",
                                });

                                $(".link-already-active-error-div").css({
                                    "display": "block",
                                    "padding": "10%", "text-align": "center", "visibility": "visible"
                                });

                                document.getElementById("link-already-active-error-div").innerText
                                    = 'Ops, probably incorrect or private video, please enter another link ';


                                setTimeout(function () {

                                    $(".link-already-active-error-div").css({
                                        "display": "none",
                                        "visibility": "hidden"
                                    });
                                    $(".link-already-active-success-div").css({
                                        "display": "block",
                                    });
                                }, 4000);
                            }
                        })

                    }

                }

            }

        } else {

            document.getElementById('link-input-error').style = 'visibility:visible;';

            $('#link-input-error').delay(3000).fadeOut('slow');

        }


    }


}

function YouTubeValidateUrl() {
    var url = gettingReadyUrl.value;

    if (url != undefined || url != '') {
        var regExp = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;

        if (url.match(regExp)) {
            // Do anything for being valid
            // if need to change the url to embed url then use below line
            // Code to be executed immediately goes here
            // $('#ytplayerSide').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=0');
            // document.getElementById('upload-btn').style =
            //     "background-color:#00ff01; color:black; border-radius:0; letter-spacing: 0px;";
            // document.getElementById('upload-btn').innerHTML = "<text>&#161;" + 'success!' + "</text>";
            return true;

        }
        return false;

        // else {
        //
        //     document.getElementById('link-input-error').style = 'visibility:visible;';
        //
        //     $('#link-input-error').delay(3000).fadeOut('slow');
        //
        // }
    }

}

function VimeoValidateUrl() {
    var url = gettingReadyUrl.value;

    if (url != undefined || url != '') {


        var regExp = /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/;
        if (url.match(regExp)) {
            // Do anything for being valid
            // if need to change the url to embed url then use below line
            // Code to be executed immediately goes here
            // $('#ytplayerSide').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=0');
            // document.getElementById('upload-btn').style =
            //     "background-color:#00ff01; color:black; border-radius:0; letter-spacing: 0px;";
            // document.getElementById('upload-btn').innerHTML = "<text>&#161;" + 'success!' + "</text>";
            return true;
        }
        return false;
        // else {
        //     document.getElementById('link-input-error').style = 'visibility:visible;';
        //
        //     $('#link-input-error').delay(3000).fadeOut('slow');
        // }
    }
}

function DailymotionValidateUrl() {
    var url = gettingReadyUrl.value;

    if (url != undefined || url != '') {
        // var regExp = /^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
        var regExp = /^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
        if (url.match(regExp)) {
            // Do anything for being valid
            // if need to change the url to embed url then use below line
            // Code to be executed immediately goes here
            // $('#ytplayerSide').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=0');
            // document.getElementById('upload-btn').style =
            //     "background-color:#00ff01; color:black; border-radius:0; letter-spacing: 0px;";
            // document.getElementById('upload-btn').innerHTML = "<text>&#161;" + 'success!' + "</text>";
            return true;
        }
        return false;
        // else {
        //     document.getElementById('link-input-error').style = 'visibility:visible;';
        //
        //     $('#link-input-error').delay(3000).fadeOut('slow');
        // }
    }
}

function SoundCloudValidateUrl() {
    var url = gettingReadyUrl.value;
    if (url != undefined || url != '') {


        var regExp = /((https:\/\/)|(http:\/\/)|(www.)|(m\.)|(\s))+(soundcloud.com\/)+[a-zA-Z0-9\-\.]+(\/)+[a-zA-Z0-9\-\.]+/;
        if (url.match(regExp)) {


            // Do anything for being valid
            // if need to change the url to embed url then use below line
            // Code to be executed immediately goes here
            // $('#ytplayerSide').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=0');
            // document.getElementById('upload-btn').style =
            //     "background-color:#00ff01; color:black; border-radius:0; letter-spacing: 0px;";
            // document.getElementById('upload-btn').innerHTML = "<text>&#161;" + 'success!' + "</text>";
            return true;
        }
        return false;
        // else {
        //     document.getElementById('link-input-error').style = 'visibility:visible;';
        //
        //     $('#link-input-error').delay(3000).fadeOut('slow');
        // }
    }
}




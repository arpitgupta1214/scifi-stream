function soundControl() {

    var stream = document.getElementById('stream').src;

    if (stream.toString().indexOf("youtube.com") !== -1) {
        youtubeSoundCtrl();
    }

    if (stream.toString().indexOf("vimeo.com") !== -1) {
        vimeoVideoControl();
    }


    return false;
}

$(document).ready(function () {

    var stream = document.getElementById('stream').src;

    $(window).keypress(function (e) {


        if (e.which === 32) {

            if (stream.toString().indexOf("youtube.com") !== -1) {
                return youtubeSoundCtrl();
            }

            if (stream.toString().indexOf("vimeo.com") !== -1) {
                return vimeoVideoControl();
            }

            return false;

        }
    });


});

var btnMute = document.getElementById("mute");
var btnUnMute = document.getElementById("unmute");

var video = document.getElementById("stream");

var player;

function vimeoVideoControl() {
    player = new Vimeo.Player(video);

    if (window.mobileCheck()) {
        player.ready().then(function () {
            player.play();
            VimeoMute();
            player.setVolume(0);
        });
    } else {
        VimeoMute();
    }
}

function VimeoMute() {
    player.getPaused().then((paused) => {
        if (paused) {
            player.play();
            player.setVolume(1);
        } else {
            player.getVolume().then((volume) => {
                if (volume == 1) {
                    player.setVolume(0);
                } else {
                    player.setVolume(1);
                }
            });
        }
    });
}

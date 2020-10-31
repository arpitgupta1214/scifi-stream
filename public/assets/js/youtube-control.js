// var btnMute = document.getElementById('mute');
// // var btnUnMute = document.getElementById('unmute');


function onYouTubeIframeAPIReady() {
    window.player = new YT.Player('stream', {
        click: {
            'onReady': clicking
            // playerVars: {'origin':'http://127.0.0.1:8000'}

        }
    });

}


function youtubeSoundCtrl() {

    clicking();
}



function clicking() {


    if (player.isMuted()) {
        // player.playVideo();
        player.unMute();
        document.getElementById('unmute_new').style.visibility = 'hidden';
        document.getElementById('mute_new').style.visibility = 'visible';
        // $('#mute_new').fadeOut('slowly');
    } else {
        // player.playVideo();
        player.mute();
        // $('#mute_new').fadeIn();
        document.getElementById('unmute_new').style.visibility = 'visible';
        document.getElementById('mute_new').style.visibility = 'hidden';

    }

    if (player.getPlayerState() == 5 || player.getPlayerState() == -1 || player.getPlayerState() == 0) {
        player.playVideo();
        player.mute();
        player.unMute();
    }


}













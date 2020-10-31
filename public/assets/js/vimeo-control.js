
var btnMute = document.getElementById('mute');
var btnUnMute = document.getElementById('unmute');

var video = document.getElementById('stream');

var player;

function vimeoVideoControl() {
    player = new Vimeo.Player(video);

    if (window.mobileCheck()){
        player.ready().then(function() {
            player.play();
            VimeoMute();
            player.setVolume(0);
        });
    } else {
        VimeoMute()
    }
}



function VimeoMute()
{
    player.getVolume().then(function(volume) {
        // console.log(volume);
        if (volume == 1)
        {
            // btnMute.hidden = false;
            // btnUnMute.hidden = true;
            player.setVolume(0);
            // $('#mute_new').fadeIn();
            document.getElementById('unmute_new').style.visibility = 'visible';
            document.getElementById('mute_new').style.visibility = 'hidden';

            // window.stop();
        } else {
            // btnMute.hidden = true;
            // btnUnMute.hidden = false;
            player.play();
            player.setVolume(1);
            document.getElementById('unmute_new').style.visibility = 'hidden';
            document.getElementById('mute_new').style.visibility = 'visible';
            // $('#mute_new').fadeOut('slowly');
            // window.stop();
        }

    });





}













var url = document.getElementById('stream').src;
var btnMute = document.getElementById('mute');
var btnUnMute = document.getElementById('unmute');
var iframe = document.getElementById('stream');


if (url.toString().indexOf("mixcloud.com") !== -1) {

    setTimeout(function () {

        var MixWidget = Mixcloud.PlayerWidget(iframe);
        MixWidget.ready.then(function () {
            MixWidget.play();


            // Put code that interacts with the widget here
        });

        MixWidget.events.ended.on(onend);
        function onend() {
            MixWidget.play();
        }


    }, 1000);
}

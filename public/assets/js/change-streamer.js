function changeStreamer(el1) {
    var el2 = document.getElementById('stream');
    el2.src = el1.src;

    mainsrc = el2.src;

    if (mainsrc == null) {
        mainsrc = el1.src;
    } else {
        mainsrc = el2.src;
    }

}

function liveLink() {
    return mainsrc;
}

$('[data-countdown]').each(function () {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('%D days %H:%M:%S'));
    });
});

$("a").mouseover(function () {
    $("streamerP");
});

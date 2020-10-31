

const copyShareBtn = str => {
    var url = window.location.href;
    const el = document.createElement('textarea');
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);




    $(".share-window").css({
        "display":"block", "z-index":"5"});

    document.getElementById('share-link').setAttribute("type","text");
    document.getElementById('share-link').setAttribute("value",url);

};


function shareBtnHide() {
    setTimeout(function () {
    $(".share-window").css({
        "display":"none"});
    }, 1000);
}

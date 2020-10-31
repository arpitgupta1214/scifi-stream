
var modal = document.getElementById("popup");

var span = document.getElementsByClassName("popup-close-btn")[0];

$(document).ready(function() {
    if(localStorage.getItem('popup') != 'shown'){

        // document.getElementById('popup').style.visibility = 'visible';
        $("#popup").delay(3000).css("visibility", "visible");
        localStorage.setItem('popup','shown')
    }

    $('.popup-close-btn').click(function(e)
    {
        $('#popup').css("visibility", "hidden");
    });
    $('#popup').click(function(e)
    {
        $('#popup').css("visibility", "hidden");
    });
});

$('#upload-btn').click( check_inputs);

function check_inputs(e) {

        e.preventDefault();

        if (document.getElementById("input-link").validity.valueMissing) {

            document.getElementById('link-input-error').style = 'visibility:visible;';

            $('#link-input-error').delay(3000).fadeOut('slow');
        }


        e.preventDefault();

        if (document.getElementById("stream-duration").validity.rangeOverflow) {

            document.getElementById('link-duration-error-time-max').style = 'visibility:visible;';

            $('#link-duration-error-time-max').delay(3000).fadeOut('slow');


        }

        if (document.getElementById("stream-duration").validity.valueMissing) {

            document.getElementById('link-duration-error-without').style = 'visibility:visible;';

            $('#link-duration-error-without').delay(3000).fadeOut('slow');

        }


}






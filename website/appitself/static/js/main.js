$(document).ready(function(){

    $('#point_form').submit(function(e) {
        e.preventDefault();  

        $.ajax({
            type: 'POST',
            url: '',  
            data: $('#point_form').serialize(),
            dataType: 'json',
            success: function(data) {
                if (data.message == 'Success') 
                {
                    alert('Data is successfully written!');
                    $('#point_form')[0].reset();
                }
            }
        });
    });

});
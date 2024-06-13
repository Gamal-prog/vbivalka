$(document).ready(function(){

    var map = L.map('Bishkek map', {
        center: [42.874621, 74.605438],
        zoom: 13
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map); 

    var marker; 
    function onMapClick(e) {
        var coords = e.latlng;
        $('#id_longitude').val(coords.lng);
        $('#id_latitude').val(coords.lat);

        if (marker) 
            map.removeLayer(marker); 

        marker = L.marker(coords).addTo(map); 
    }

    map.on('click', onMapClick);

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
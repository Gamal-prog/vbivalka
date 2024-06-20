$(document).ready(function(){

    var map = L.map('Bishkek map', {
        center: [42.874621, 74.605438],
        zoom: 13
    });
    
    L.tileLayer('http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}', {
        maxZoom: 19,
    }).addTo(map); 

    var marker; 
    function onMapClick(e) {
        var coords = e.latlng;
        $('#id_longitude').val(coords.lng);
        $('#id_latitude').val(coords.lat);

        const lat = coords.lat;
        const lng = coords.lng;
    
        const query = 'https://nominatim.openstreetmap.org/reverse.php?format=jsonv2&lat=' + lat + '&lon=' + lng + '&zoom=18';

        fetch(query)
            .then(response => response.json())
            .then(data => {
                $('#id_street').val(data.address.road || 'Adress none');
            })
            .catch(error => {
                console.error('Error:', error);
                $('#id_street').val('Adress error!');
            });

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
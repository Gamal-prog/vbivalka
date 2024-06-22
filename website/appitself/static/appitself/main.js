$(document).ready(function(){

    var map = L.map('Bishkek map', {
        center: [42.874621, 74.605438],
        zoom: 13
    });
    
    L.tileLayer('http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}', {
        maxZoom: 19,
    }).addTo(map); 

    $('#loading-spinner').hide();
    $('#success-icon').hide();
    $('#danger-icon').hide();

    var marker; 
    function onMapClick(e) {
        var coords = e.latlng;
        $('#id_longitude').val(coords.lng);
        $('#id_latitude').val(coords.lat);

        const lat = coords.lat;
        const lng = coords.lng;
    
        const query = 'https://nominatim.openstreetmap.org/reverse.php?format=jsonv2&lat=' + lat + '&lon=' + lng + '&zoom=18';

        $('#loading-spinner').show();

        fetch(query)
            .then(response => response.json())
            .then(data => {
                $('#loading-spinner').hide();
                $('#success-icon').attr('width', '15');
                $('#success-icon').show();
                $('#id_street').val(data.address.road || 'Adress none');
            })
            .catch(error => {
                $('#loading-spinner').hide();
                $('#danger-icon').attr('width', '15');
                $('#danger-icon').show();
                console.error('Error:', error);
            });
        $('#danger-icon').hide();
        $('#success-icon').hide();
        

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
                    $('#success-icon').hide();
                }
            }
        });
    });

});
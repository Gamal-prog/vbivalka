$(document).ready(function(){

        ymaps.ready(init);
        function init() {
            // Display the map on Bishkek city
            var map = new ymaps.Map("Bishkek map", {
                center: [42.874621, 74.605438],  // Bishkek's coordinate 
                zoom: 12 // Scale
            });
        
            // Set the city name for the point
            var placemark = new ymaps.Placemark([42.874621, 74.605438], {
                balloonContent: 'Бишкек' 
            });
            
            // Add the name
            map.geoObjects.add(placemark);

            // Gets datas from click
            map.events.add('click', function (e) {
                var coords = e.get('coords');
                map.balloon.open(coords, 'Current position!');
                $('#id_latitude').val(coords[0]);
                $('#id_longitude').val(coords[1]);
            });
        }

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
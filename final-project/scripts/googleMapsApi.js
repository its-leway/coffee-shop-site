function initMap(){
    // Map options. zoom level and center.
    var options = {
        zoom:14,
        center:{lat:49.1666,lng:-123.1336}
    }
  
    // New map
    var map = new google.maps.Map(document.getElementById('map'), options)
  
    // Add marker
    var marker = new google.maps.Marker({position:{lat: 49.1642558, lng: -123.1363833},
    map: map})
  
    var infoWindow = new google.maps.infoWindow({
        content: '<h1> Cafe Saigon</h1>'
    })
  
    marker.addListener('click',function(){
        infoWindow.open(map, marker);
    });
  }

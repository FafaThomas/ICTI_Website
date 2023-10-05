// map.js

// Initialize the map
function initMap() {
    // Location coordinates
    var location = { lat: 14.622693966010452, lng: 121.09887887483785 }; // Replace with your specific coordinates
  
    // Create a map centered at the specified location
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15, // Adjust the zoom level as needed
      center: location
    });
  
    // Create a marker at the specified location
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Icontroltech Inc., Midtown Subdivision 2, Dragon, Marikina, Metro Manila"
    });
  }
  
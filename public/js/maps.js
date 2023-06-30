console.log ("connected")
L.mapquest.key = MAPQUEST_API_KEY;
var map = document.getElementById('map')
var x = document.getElementById("demo");


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, ()=>{
      renderMap(37, -122)
    });
  } else {
    renderMap(37, -122)
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  renderMap(position.coords.latitude, position.coords.longitude)
}
getLocation()


function renderMap(latitude, longitude){
// 'map' refers to a <div> element with the ID map 
L.mapquest.map('map', {
  center: [latitude, longitude],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
})}

// L.marker([40.511460, -75.559543], {
//   title: 'You are here',
// })
// .addTo(map)

// var marker = L.marker([latitude, longitude]).addTo(map);
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();



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

var map;
function renderMap(latitude, longitude){
// 'map' refers to a <div> element with the ID map 
map = L.mapquest.map('map', {
  center: [latitude, longitude],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
})
// var marker = L.marker([40.511460, -75.559543]).addTo(map);
// marker.bindPopup("<a href='/animalProfile/1'>Steven</a>.").openPopup();

// New York
var marker = L.marker([40.7128, -74.0060]).addTo(map);
marker.bindPopup(`
<a class="animal-link" href='/animalProfile/1'>Blue Bird</a>
<br/>
`).openPopup();

// Ottawa
var marker = L.marker([45.4215, -75.6972]).addTo(map);
marker.bindPopup(`
<a class="animal-link" href='/animalProfile/2'>Cardinal</a>
<br/>
`).openPopup();

// Virginia
var marker = L.marker([37.2710, -79.9414]).addTo(map);
marker.bindPopup(`
<a class="animal-link" href='/animalProfile/3'>Robin</a>
<br/>
`).openPopup();

// Seattle, Washington
var marker = L.marker([47.6062, -122.3321]).addTo(map);
marker.bindPopup(`
<a class="animal-link" href='/animalProfile/5'>Woodpecker</a>
<br/>
`).openPopup();

// Philadelphia, PA
var marker = L.marker([39.9526, -75.1652]).addTo(map);
marker.bindPopup(`
<a class="animal-link" href='/animalProfile/6'>Canary</a>
<br/>
<a class="animal-link" href='/animalProfile/7'>Eagle</a>
`).openPopup();

}






var map = L.map('map').setView([39.7394, -104.9847], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([39.7394, -104.9847]).addTo(map);
marker.bindPopup("Colorado Office<br><b>Denver, CO</b>").openPopup();

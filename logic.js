// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 5.4
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

function markerSize(magnitude) {
    return magnitude;
}
function quakeColor(depth) {
    return depth;
}

d3.json(url, function (response) {

    var latitude = [];
    var longitude = [];
    var depth = [];
    var magnitude = [];

    console.log(response);

    for (var i = 0; i < response.length; i++) {
        var location = response[i].geometry;
        //   var depth = response[i]
        if (location) {
            L.marker([location.coordinates[1], location.coordinates[0]]).addTo(myMap);
        }
    }

});


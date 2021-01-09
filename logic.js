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
// Our style object
// var mapStyle = {
//   color: "white",
//   fillColor: "pink",
//   fillOpacity: 0.5,
//   weight: 1.5
// };

// d3.json(url, function (response) {

//    // Grabbing our GeoJSON data..
//     // d3.json(link, function (data) {
//         // Creating a geoJSON layer with the retrieved data
//         L.geoJson(response, {

//             // Passing in our style object
//             // style: mapStyle
//             style: function(feature) {
//                 return {
//                   color: "white",
//                   fillColor: chooseColor(features.geometry.coordinates),
//                   fillOpacity: 0.5,
//                   weight: 1.5
//                 };
//               }
//         }).addTo(myMap);
//     });
d3.json(url, function (response) {

    console.log(response);
    console.log(response.features[0].geometry.coordinates[1]);

    var locationArray = [];
    var depthArray = [];

    for (var i = 0; i < response.length; i++) {
        // var location = response.features.geometry;
        var location = response.type.features[i].geometry.coordinates[i];
        // console.log([i]);
    }

    //   if (location) {
    //     // locationArray.push([location.coordinates[1], location.coordinates[0]]);
    //     locationArray.push([features.geometry.coordinates[1], features.geometry.coordinates[0]]);
    //     depthArray.push([features.geometry.coordinates[2]]);
    //   }
})

//     var circMarker = L.circle(locationArray, {
//       radius: 20,
//       blur: 35
//     }).addTo(myMap);

//   });
//     // var latitude = [];
    // var longitude = [];
    // var depth = [];
    // var magnitude = [];



    // for (var i = 0; i < response.length; i++) {

    //     latitude.push[i];

    //     L.circle(response[i].location, {
    //       fillOpacity: 0.75,
    //       color: quakeColor(cities[i].population),
    //       fillColor: "purple",
    //       // Setting our circle's radius equal to the output of our markerSize function
    //       // This will make our marker's size proportionate to its population
    //       radius: markerSize(cities[i].population)
    //     }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
    //   }

//     for (var i = 0; i < response.length; i++) {
//         var location = response[i].features[i];
//         console.log(location);
//         //         //   var depth = response[i]
//         if (location) {
//             L.marker([location.coordinates[1], location.coordinates[0]]).addTo(myMap);
//         }
//     }

// });

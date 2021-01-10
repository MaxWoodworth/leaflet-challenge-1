// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 4
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
// var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

// Read url response

d3.json(url, function (response) {
    console.log(response);

    // Loop through specific url response needed
    for (var index = 0; index < response.features.length; index++) {

        var coordinates = response.features[index].geometry.coordinates;
        var depth = response.features[index].geometry.coordinates[2];
        // console.log(depth);
        var magnitude = response.features[index].properties.mag;
        // console.log(magnitude);

        // Color to be based on value of depth
        // Source: Activity 1-7 - Stu_Country_World_Cup
        var color = "";
        if (depth > 90) {
            color = "black";
        }
        else if (depth > 70) {
            color = "blue";
        }
        else if (depth > 50) {
            color = "purple";
        }
        else if (depth > 30) {
            color = "green";
        }
        else if (depth > 10) {
            color = "orange";
        }
        else {
            color = "yellow";
        }

        // Source: Activity 2-2 Ins_Markers

        // Checks for coordinates property
        if (coordinates) {

            L.circle([coordinates[1], coordinates[0]], {
                color: "white",
                fillColor: color,
                fillOpacity: 1,
                radius: magnitude*30000
            }).addTo(myMap);

        }
    }
});

    // var coordinates = response.features[0].geometry.coordinates;
    // L.marker([coordinates[1], coordinates[0]]).addTo(myMap);

    // var coordinates = response.features[1].geometry.coordinates;
    // L.marker([coordinates[1], coordinates[0]]).addTo(myMap);

    // var coordinates = response.features[2].geometry.coordinates;
    // L.marker([coordinates[1], coordinates[0]]).addTo(myMap);

    // var coordinates = response.features[2].geometry.coordinates;
    // L.marker([coordinates[1], coordinates[0]]).addTo(myMap);

    // L.circle([coordinates[1], coordinates[0]], {
    //                 color: "green",
    //                 fillColor: "green",
    //                 fillOpacity: 1,
    //                 radius: 100000
    //             }).addTo(myMap);


//Use exercise 7 from Day 1 for size and color of things based on a value

// function markerSize(magnitude) {
//     return magnitude;
// }
// function quakeColor(depth) {
//     return depth;
// }
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
// response = d3.json(url, function (response))
// d3.json(url, function (response) {

    // console.log(response);
    // console.log(response.features[1].geometry.coordinates[1]);
    // console.log(response.features[1].geometry.coordinates[0]);
    // console.log(response.features[1].geometry.coordinates[2]);
    // console.log(response.features[1].geometry.coordinates);


    // var latitude = response.features[0].geometry.coordinates[1];
    // var longitude = response.features[0].geometry.coordinates[0];
    // var depth = response.features[0].geometry.coordinates[2];

    // var latitude1 = response.features[1].geometry.coordinates[1];
    // var longitude1 = response.features[1].geometry.coordinates[0];
    // var depth = response.features[1].geometry.coordinates[2]
    // var coordinates = response.features[0].geometry.coordinates;

    // L.marker([coordinates[1], coordinates[0]]).addTo(myMap);
    // L.marker([latitude1, longitude1]).addTo(myMap);
    //  L.circle([latitude, longitude], {
    //                 color: "green",
    //                 fillColor: "green",
    //                 fillOpacity: 1,
    //                 radius: 100000
    //             }).addTo(myMap);

    //     color: "green",
    //     fillColor: "green",
    //     fillOpacity: 0.75,
    //     radius: 500
    // }).addTo(myMap);
    // console.log(latitude);
    // console.log(longitude);
    // console.log(depth);

    // for (var i = 0; i < response.length; i++) {
        // console.log(response);
        // var locationArray = [];
        // var lat = latitude[i];
        // var long = longitude[i];
        // var dpth = depth[i];
        // var depthArray = [];
        // var coordinates = response.features[i].geometry.coordinates;
        // var latitude = response.features[i].geometry.coordinates[1];
        // var longitude = response.features[i].geometry.coordinates[0];
        // var depth = response.features[i].geometry.coordinates[2];

        // console.log(response);
        // var location = "[" + (response.features[i].geometry.coordinates[i + 1]) + "," + (response.features[i].geometry.coordinates[i]) + "]";
        // var depth = response.features[i].geometry.coordinates[i + 2];

        //Source: Activity 2-2
        // if (latitude & location) {
        //Checks for coordinates property
//         if (coordinates) {
//             L.marker([coordinates[1], coordinates[0]]).addTo(myMap);
//         }
//     }
// });
//         L.circle([latitude, longitude], {
//             color: "green",
//             fillColor: "green",
//             fillOpacity: 0.75,
//             radius: 500
//         }).addTo(myMap);


//         locationArray.push(location);
//         console.log(locationArray);

//         L.marker(locationArray)
//             .bindPopup("<h1>" + response.features[i].geometry.coordinates[i + 2])
//             .addTo(myMap);


//         console.log(depth);

//         var circMarker = L.circle([location,{
//             radius: 20,
//             blur: 35
//         }]).addTo(myMap);
//         console.log([i]);


//       if (location) {
//         // locationArray.push([location.coordinates[1], location.coordinates[0]]);
//         locationArray.push([features.geometry.coordinates[1], features.geometry.coordinates[0]]);
//         depthArray.push([features.geometry.coordinates[2]]);
//       }


//     var circMarker = L.circle(locationArray, {
//       radius: 20,
//       blur: 35
//     }).addTo(myMap);

//   });
//     // var latitude = [];
//     var longitude = [];
//     var depth = [];
//     var magnitude = [];



//     for (var i = 0; i < response.length; i++) {

//         latitude.push[i];

//         L.circle(response[i].location, {
//           fillOpacity: 0.75,
//           color: quakeColor(cities[i].population),
//           fillColor: "purple",
//           // Setting our circle's radius equal to the output of our markerSize function
//           // This will make our marker's size proportionate to its population
//           radius: markerSize(cities[i].population)
//         }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
//       }

//     for (var i = 0; i < response.length; i++) {
//         var location = response[i].features[i];
//         console.log(location);
//         //         //   var depth = response[i]
//         if (location) {
//             L.marker([location.coordinates[1], location.coordinates[0]]).addTo(myMap);
//         }
//     }

// });

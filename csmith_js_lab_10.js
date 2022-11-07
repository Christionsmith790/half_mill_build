mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hyaXN0aW9uc21pdGg3OTAiLCJhIjoiY2xhNXk2NmlwMHJ1cjNwcGN1NXVmMW90NCJ9.gLTiyUKwoj7kDjpDGdJ5Gw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/christionsmith790/cla5xcvoa000c14qm7wnbb06s",
  zoom: 10,
  center: [-75.150996, 39.992945],
});

// add legend to your map
var layers = [
  "Commercial land",
  "Residential land",
  "Institutional land",
  "Other",
];
var colors = ["#bf0808", "#32f145", "#e9f54d", "#000000"];
for (i = 0; i < layers.length; i++) {
  var layer = layers[i];
  var color = colors[i];
  var item = document.createElement("div");
  var key = document.createElement("span");
  key.className = "legend-key";
  key.style.backgroundColor = color;
  var value = document.createElement("span");
  value.innerHTML = layer;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
}

map.on("load", function () {
  map.getCanvas().style.cursor = "default";
  map.fitBounds([
    [-75.299998, 40.091772],
    [-75.011607, 39.884492],
  ]);

  // change info window on hover
  map.on("mousemove", function (e) {
    var states = map.queryRenderedFeatures(e.point, {
      layers: ["buildings-lu-new"], // get from the mapbox top left layer information
    });

    if (states.length > 0) {
      document.getElementById("pd").innerHTML =
        "<h3><strong> building id:" +
        // states[0].properties.fid +
        "</strong></h3><p><strong><em>" +
        states[0].properties.landuse;
    } else {
      document.getElementById("pd").innerHTML = "<p>The building id is: </p>";
    }
  });
});
Reference;

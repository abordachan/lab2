mapboxgl.accessToken = 'pk.eyJ1IjoiYWJvcmRhY2hhbiIsImEiOiJjbWtkeXBpMncwMWd6M2VwcDF5c2Fkb2ZpIn0.Bzm3BhQq1_A7NtHo0uAXeA'; // Add default public map token from your Mapbox account

// Initalize map
const map = new mapboxgl.Map({
  container: 'my-map', // map container ID
  style: 'mapbox://styles/abordachan/cmom75ai5009l01s56cbub7vk', // personal style URL
  center: [-79.3832, 43.6532], // Toronto
  zoom: 10.25
});

// Load data
map.on('load', () => {
  // Add Tennis Court data source containing GeoJSON data
  map.addSource('court-data', {
    type: 'geojson',
    data: 'https://abordachan.github.io/lab2/data/tennis_courts_facilities.geojson'
  });

  // Add Drinking Fountain data source containing GeoJSON data
  map.addSource('water-data', {
    type: 'geojson',
    data: 'https://abordachan.github.io/lab2/data/parks_drinking_fountains.geojson'
  });

  // Add layer for Drinking Fountains to map
  map.addLayer({
    "type": "circle",
    "source": "water-data",
    "id": "drinking-fountains",
    "slot": "middle",
    "filter":[
      "match",
        ["get", "type"],
        "Dog Fountain",
        false,
        true
      ],
    "paint": {
      "circle-radius": 4,
      "circle-color": "blue",
      // border around circle to make it more visible on map
      "circle-stroke-width": 1,
      "circle-stroke-color": "#000",
      "circle-opacity": 0.9
    }
  });

  // Add layer for Tennis Courts to map
  map.addLayer({
    "type": "circle",
    "source": "court-data",
    "id": "tennis-courts",
    // slot set to top so that tennis courts are above drinking fountains on map
    "slot": "top", 
    "paint": {
      "circle-radius": 5,
      "circle-color": [
        "match",
        ["get", "Type"],
        "Club",
        "orange",
        "green"
      ],
      "circle-stroke-width": 1,
      "circle-stroke-color": "#000",
      "circle-opacity": 0.9
    }
  });

  // Add layer for Tennis Court labels to map
  map.addLayer({
    "id": "court-labels",
    "type": "symbol",
    "source": "court-data",
    "slot": "top",
    "layout": {
      "text-field": [
        "to-string",
        ["get", "Name"]
      ],
      "text-anchor": "top-left",
      "text-size": 10,
    }
  });

  // Define layers and corresponding colors for legend
  const layers = [
    "Club Tennis Courts",
    "Public Tennis Courts",
    "Drinking Fountains"
  ];
  const colors = [
    "orange",
    "green",
    "blue"
  ];

  // Create legend for map
  const legend = document.getElementById('legend');

  layers.forEach((layer, i) => {
    const color = colors[i];
    const item = document.createElement('div');
    const key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;

    const value = document.createElement('span');
    value.innerHTML = `${layer}`;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
  });
});
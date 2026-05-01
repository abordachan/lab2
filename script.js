mapboxgl.accessToken = 'pk.eyJ1IjoiYWJvcmRhY2hhbiIsImEiOiJjbWtkeXBpMncwMWd6M2VwcDF5c2Fkb2ZpIn0.Bzm3BhQq1_A7NtHo0uAXeA'; // Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
  container: 'my-map', // map container ID
  style: 'mapbox://styles/abordachan/cmom75ai5009l01s56cbub7vk', // personal style URL
  center: [-79.3832, 43.6532], // Toronto
  zoom: 10
});

map.on('load', () => {
// Add a data source containing GeoJSON data
  map.addSource('uoft-data', {
    type: 'geojson',
    data: {}
  });

  
});
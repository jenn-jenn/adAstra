
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");



class MarkerManager {
  constructor(map) {
    this.map = map;
    this.updateMarkers = this.updateMarkers.bind(this);
    this.createMarker = this.createMarker.bind(this);
  }

  createMarker(object) {
    const el = document.createElement('div');
    el.className = 'marker';

    el.addEventListener('mouseover', () => {
      el.innerText = object.target.name;
    })
    el.addEventListener('mouseout', () => {
      el.innerText = '';
    })

    const lng = object.ra.decimal;
    const lat = object.dec.decimal;
    const coordinates = [lng, lat];

    new mapboxgl.Marker(el)
      .setLngLat(coordinates)
      .addTo(this.map)
  }

  updateMarkers(objects) {
    objects.map(object => (this.createMarker(object)));
  }
}

export default MarkerManager;
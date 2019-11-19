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

    const lng = object.ra.decimal;
    const lat = object.dec.decimal;
    const coordinates = [lng, lat];

    const popup = new mapboxgl.Popup({
      offset: 25,
      className: "popup"
    })
      .setLngLat(coordinates)
      .setHTML(`<h1>${object.target.name}</h1>`)
      // .setMaxWidth("100px")
      .addTo(this.map);


    new mapboxgl.Marker(el)
      .setLngLat(coordinates)
      .addTo(this.map)
      .setPopup(popup)
  }

  updateMarkers(objects) {
    objects.map(object => (this.createMarker(object)));
  }
}

export default MarkerManager;
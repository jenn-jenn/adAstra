class MarkerManager {
  constructor(map) {
    this.map = map;
    this.updateMarkers = this.updateMarkers.bind(this);
    this.createMarkerFromObject = this.createMarkerFromObject.bind(this);
  }

  createMarkerFromObject(object) {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat(object)
      .addTo(this.map);
  }

  updateMarkers(objects) {
    objects.map(object => (this.createMarkerFromObject(object)));
  }
}

export default MarkerManager;
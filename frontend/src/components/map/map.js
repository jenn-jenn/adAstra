import React from 'react';
import ApiKeys from '../../api';
import "../stylesheets/mapboxgl-map.css";
import '../stylesheets/map.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import MarkerManager from './map_marker_manager';

class Map extends React.Component {
  componentDidMount() {
    this.props.fetchCosmicObjects()
    .then(() => {
      mapboxgl.accessToken = ApiKeys.mapboxAccessToken;
      let currCenter = [-98.5795, 39.8283];
      const mapOptions = {
        container: "map",
        minZoom: 2.5,
        center: currCenter,
        pitch: 50,
        // style: 'mapbox://styles/mapbox/navigation-preview-night-v2'
        style: "mapbox://styles/mapbox/navigation-guidance-night-v2"
      };

      let mapbox;
      mapbox = new mapboxgl.Map(mapOptions);

      const markerPlaces = this.props.cosmicObjects;

      this.MarkerManager = new MarkerManager(mapbox);
      this.MarkerManager.updateMarkers(markerPlaces);

      mapbox.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
      );

      mapbox.addControl(new mapboxgl.NavigationControl());

      const coordinates = document.getElementById("coordinates");
      const marker = new mapboxgl.Marker({
        draggable: true
      })
        .setLngLat([-98.5795, 39.8283])
        .addTo(mapbox);

      function onDragEnd() {
        const lngLat = marker.getLngLat();
        coordinates.style.display = "block";
        coordinates.innerHTML =
          "Longitude: " + lngLat.lng + "<br />Latitude: " + lngLat.lat;
      }

      marker.on("dragend", onDragEnd);
      currCenter = [marker._lngLat.lng, marker._lngLat.lat]
    })
  }

  render() {
    // if (this.props.cosmicObjects.length === 0) return null;
    return (
      <div id="map-container">
        <div id="map"></div>
        <div className="map-overlay">
          <input
            id="feature-filter"
            type="text"
            placeholder="Search for a star..."
          />
        </div>
        <pre id="coordinates" className="coordinates"></pre>
      </div>
    );
  }
}

export default Map;
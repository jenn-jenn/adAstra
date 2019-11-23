import React from 'react';
import APIKeys from '../../api/api';
import "../stylesheets/map/mapboxgl-map.scss";
import '../stylesheets/map/map.scss';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import MarkerManager from './map_marker_manager';

class Map extends React.Component {
  componentDidMount() {
    this.props.fetchCosmicObjects()
    .then(() => {
      mapboxgl.accessToken = APIKeys.mapboxAccessToken;
      let currCenter = [-98.5795, 39.8283];
      const mapOptions = {
        container: "map",
        minZoom: 0,
        maxZoom: 1.5,
        center: currCenter,
        style: "mapbox://styles/mapbox/outdoors-v10"
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

      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      function success(pos) {
        const crd = pos.coords;
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        alert("There was an error in retrieving your location. Unable to retrieve star, moon, and sun information.");
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    })
  }

  render() {
    return (
      <div id="map-container">
        <div id="map"></div>
      </div>
    );
  }
}

export default Map;

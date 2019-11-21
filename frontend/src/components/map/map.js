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
        maxZoom: 1.6,
        center: currCenter,
        // style: 'mapbox://styles/mapbox/navigation-preview-night-v2'
        // style: "mapbox://styles/mapbox/navigation-guidance-night-v2"
        // style: "mapbox://styles/mapbox/satellite-streets-v10"
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

        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        alert("There was an error in retrieving your location. Unable to retrieve star, moon, and sun information.");
      }

      navigator.geolocation.getCurrentPosition(success, error, options);


      // lng = dec; range: [dec + 45, dec - 45]
      // lat = ra; range: [ra + 45, ra - 45]
      // lat: 37.7749  se = (-167.4194, 82.7749)
      // lng: -122.4194  nw = (-77.4194, -7.2251)
    })
  }

  render() {
    // if (this.props.cosmicObjects.length === 0) return null;
    return (
      <div id="map-container">
        <div id="map"></div>
      </div>
    );
  }
}

export default Map;

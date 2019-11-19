import React from 'react';
import ApiKeys from '../../api';
import "./mapboxgl-map.css";
import './map.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import MarkerManager from './map_marker_manager';

class Map extends React.Component {
  componentDidMount() {
    this.props.fetchCosmicObjects()
    .then(() => {
      mapboxgl.accessToken = ApiKeys.mapboxAccessToken;

      const mapOptions = {
        container: "map",
        minZoom: 11.5,
        center: [-122.4194, 37.7749],
        // style: 'mapbox://styles/mapbox/navigation-preview-night-v2'
        style: 'mapbox://styles/mapbox/navigation-guidance-night-v2'
        // style: 'mapbox://styles/mapbox/dark-v9'
      };

      let mapbox;
      mapbox = new mapboxgl.Map(mapOptions);

      const markerPlaces = this.props.cosmicObjects;
      console.log(markerPlaces)

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
    })

  }


  render() {
    if (this.props.cosmicObjects === undefined) return null;
    return (
      <div id="map-container">
        <div id='map'></div>
      </div>
    )
  }
}

export default Map;
import React from 'react';
import MarkerManager from './map_marker_manager';
const ApiKeys = require("../../api");
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

class Map extends React.Component {
  // constructor(props) {
    // super(props);
    // this.MarkerManager;
//     // this.onGeolocateSuccess = this.onGeolocateSuccess.bind(window);
//     // this.onGeolocateError = this.onGeolocateError.bind(window);
//     this.geolocate = this.geolocate.bind(window);
  // }

//   onGeolocateSuccess(coordinates) {
//     const { latitude, longitude } = coordinates.coords;
//     console.log('Found coordinates: ', latitude, longitude);
//   }

//   onGeolocateError(error) {
//     console.warn(error.code, error.message);

//     if (error.code === 1) {
//       console.log('they said no')
//     } else if (error.code === 2) {
//       console.log('position unavailable')
//     } else if (error.code === 3) {
//       console.log('timeout')
//     }
//   }

//   geolocate() {
//     if (window.navigator && window.navigator.geolocation) {
//       // window.navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
//     }
//   }

//   componentWillMount() {
//   }

  componentDidMount() {
    this.props.fetchCosmicObjects()

    // const location = geolocate();
    mapboxgl.accessToken = ApiKeys.mapboxAccessToken;
    // console.log(mapboxgl.accessToken)

    const mapOptions = {
      container: 'map',
      minZoom: 11.5,
      center: [122.4194, 37.7749],
      style: 'mapbox://styles/mapbox/dark-v9'
    };

    let mapbox;
    new mapboxgl.Map(mapOptions);

    // const markerPlaces = this.props.cosmicObjects;

    // this.MarkerManager = new MarkerManager(mapbox);
    // this.MarkerManager.updateMarkers(markerPlaces);

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
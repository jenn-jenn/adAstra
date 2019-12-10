import React from 'react';
import "../stylesheets/map/mapboxgl-map.scss";
import '../stylesheets/map/map.scss';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import MarkerManager from './map_marker_manager';

class Map extends React.Component {
  componentDidMount() {
    this.props.fetchCosmicObjects()
    .then(() => {
      mapboxgl.accessToken = "pk.eyJ1IjoianVubmFjIiwiYSI6ImNrMnFxbjN6dDBodGwzbHBnOHo3a2JyOGkifQ.aFvV6CS-cHtsRT5Qvz2Z3w";
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
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        alert("There was an error in retrieving your location. Unable to retrieve star, moon, and sun information.");
      }

      navigator.geolocation.getCurrentPosition(success, error, options);

      document.querySelectorAll('.marker').forEach(m => {
        m.addEventListener('click', (e) => {
          let name = e.target.innerHTML.split(" ").join("").toLowerCase()
          this.props.history.push(`/cosmicobjects/${name}`)
        })
      })

      document.querySelector('.fa.fa-times').addEventListener('click', () => {
        console.log('click')
        document.querySelector('.map-modal').classList.add('hidden');
      })
    })
  }

  render() {
    return (
      <div id="map-container">
        <div className="map-modal">
          <i className="fa fa-times" />
          <p>
            <img src="./location_icon.png" alt="icon" />
            Click the icon to find constellations<br />
            in your viewing radius.<br />
            Hover over marker for constellation name.<br />
            Click marker to view constellation.
          </p>
        </div>
        <div id="map"></div>
      </div>
    );
  }
}

export default Map;

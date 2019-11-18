import React from 'react';
import MarkerManager from './marker_manager';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.MarkerManager;
  }

  componentDidMount() {
    this.props.fetchGuide(this.props.match.params.guideId)
      .then(() => {
        const { cityLng, cityLat, breweryLocations } = this.props.guide;
        mapboxgl.accessToken = window.mboxAPIKey;

        const mapOptions = {
          container: 'map',
          minZoom: 11.5,
          center: [cityLng, cityLat],
          style: 'mapbox://styles/mapbox/dark-v9'
        };

        let mapbox;
        mapbox = new mapboxgl.Map(mapOptions);

        const markerPlaces = Object.values(breweryLocations);

        this.MarkerManager = new MarkerManager(mapbox);
        this.MarkerManager.updateMarkers(markerPlaces);
      })
  }


  render() {
    if (this.props.guide === undefined) return null;
    return (
      <div id="map-container">
        <div id='map'></div>
      </div>
    )
  }
}

export default Map;
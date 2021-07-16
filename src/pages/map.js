import React from "react";
import MapGL, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Geocoder from "react-map-gl-geocoder";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        latitude: 43.804134,
        longitude: -120.554199,
        width: "100%",
        height: 900,
        zoom: 6.4
      },

      APIkey:
        "pk.eyJ1IjoidHlsZXJoYW5zbyIsImEiOiJjazhvdmt6M2kxZDd0M25waDl0OHFrcXZxIn0.PutUkARenICck9nHhV81ew",
      geolocateStyle: {
        float: "left",
        margin: "50px",
        padding: "5px"
      },
      searchResultLayer: null
    };
  }

  mapRef = React.createRef();

  /*} onMouseMove = viewport => {
    const features = 
  } */

  _onViewportChange = viewport => {
    this.setState({ viewport });
  };

  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 500 };

    return this._onViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    });
  };

  render() {
    return (
      <div className="Map">
        <div className="Map">
          <MapGL
            ref={this.mapRef}
            {...this.state.viewport}
            mapboxApiAccessToken={this.state.APIkey}
            mapStyle="mapbox://styles/tylerhanso/cka757pbl04b21it46895268d"
            onViewportChange={this._onViewportChange}
          >
            <Geocoder
              mapRef={this.mapRef}
              onResult={this.handleOnResult}
              onViewportChange={this.handleGeocoderViewportChange}
              mapboxApiAccessToken={this.state.APIkey}
              position="top-left"
            />
            <GeolocateControl
              style={this.state.geolocateStyle}
              positionOptions={{ enableHighAccuracy: false }}
              fitBoundsOptions={{ maxZoom: 8 }}
              trackUserLocation={true}
            />
          </MapGL>
          <div className="map-overlay" id="legend" />
        </div>
      </div>
    );
  }
}

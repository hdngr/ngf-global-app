import React, { Component, PropTypes } from "react";
import GoogleMapReact from "google-map-react";
import CENTER from "../../const/center";
import GMAPS_API_KEY from "../../const/gmaps_api_key";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class NgfGMaps extends Component {
  static defaultProps = {
    center: {
      lat: 46.657748,
      lng: -112.2873659
    },
    zoom: 6
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: GMAPS_API_KEY /* YOUR KEY HERE */
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={34.0522} lng={-118.2437} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default NgfGMaps;

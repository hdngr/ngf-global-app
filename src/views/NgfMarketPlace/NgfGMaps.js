import React, { Component, PropTypes } from "react";
import GoogleMapReact from "google-map-react";
import LOS_ANGELES_CENTER from "../../const/la_center";
import GMAPS_API_KEY from "../../const/gmaps_api_key";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class NgfGMaps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: GMAPS_API_KEY /* YOUR KEY HERE */
          }}
          defaultCenter={LOS_ANGELES_CENTER}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={34.0522} lng={-118.2437} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default NgfGMaps;

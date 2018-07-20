import React from "react";
import Twitter from "./Twitter";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends React.Component {
  render() {
    const ConstructorLabsHQ = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 51.523573, lng: -0.110203 }}
        defaultZoom={15}
      >
        <Marker position={{ lat: 51.523573, lng: -0.110203 }} />
      </GoogleMap>
    ));
    return (
      <div className="footer">
        <div className="footer__text-container">
          <h4 className="footer__title">Come and Find Us!</h4>
          <p>2 Baker's Yard, London EC1R 3DD</p>
        </div>
        <div className="footer__title-map-container">
          <ConstructorLabsHQ
            containerElement={
              <div style={{ height: `220px`, width: "400px" }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <Twitter />
      </div>
    );
  }
}

export default Map;

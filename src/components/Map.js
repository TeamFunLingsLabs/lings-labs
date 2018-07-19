import React from "react";
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
        <div className="footer__title-map-container">
          <h4 className="footer__title">Come and Find Us!</h4>
          <ConstructorLabsHQ
            containerElement={
              <div style={{ height: `220px`, width: "220px" }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
          <p>2 Baker's Yard, London EC1R 3DD</p>
        </div>
      </div>
    );
  }
}

export default Map;

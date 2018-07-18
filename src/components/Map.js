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
      <div className="Map">
        <h4>Come and Find Us!</h4>
        <ConstructorLabsHQ
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;

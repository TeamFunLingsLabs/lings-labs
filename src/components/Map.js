import React from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

class Map extends React.Component {
  render() {
    const ConstructorLabsHQ = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 51.523573, lng: -0.110203 }}
        defaultZoom={15}
      />
    ));
    return (
      <div className="Map">
        <h4>Map Template</h4>
        <ConstructorLabsHQ
          containerElement={<div style={{ height: `200px`, width: "200px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;

import React from "react";
import Map from "./Map";
import Twitter from "./Twitter";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Map />
        <Twitter />
      </div>
    );
  }
}

export default Footer;

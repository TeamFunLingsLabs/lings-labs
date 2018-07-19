import React from "react";
import Map from "./Map";
import Twitter from "./Twitter";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Map />
        <p>2 Baker's Yard, London EC1R 3DD</p>
        <Twitter />
      </div>
    );
  }
}

export default Footer;

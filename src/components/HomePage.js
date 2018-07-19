import React from "react";
import { Button } from "./HomePageRoute1";
import { Button2 } from "./HomePageRoute1";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <video className="homepage__video" autoPlay muted loop>
          <source src="static/images/coding.mp4" type="video/mp4" />
        </video>
        <div className="homepage__routes">
          <h3>
            Oh no! You're being hacked! JK. Wondering what on earth is going on
            here? Hit the links below, amigo!
          </h3>
          <Button />
          <Button2 />
        </div>
      </div>
    );
  }
}

export default HomePage;

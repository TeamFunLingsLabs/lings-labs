import React from "react";

class MoreFun extends React.Component {
  render() {
    return (
      <div className="mini-game__background">
        <div className="mini-game">
          <iframe
            src="//www.retrogames.cc/embed/8578-galaxian-midway-set-1.html"
            width="800"
            height="600"
            frameBorder="no"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            scrolling="no"
          />
        </div>
        <div className="mini-game__controls">
          Controls: Space then Enter to start game s to shoot ⟷ arrow keys
        </div>
        <p />
        <p />
        <div className="mini-game__mobile">
          <img src="./static/images/tenor.gif" alt="Game over, man" />
        </div>
      </div>
    );
  }
}
export default MoreFun;

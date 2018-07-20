import React from "react";
import Draggable from "react-draggable";
import DraggableCore from "react-draggable";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      dmitriJiggle: false
    };

    this.setJiggle = this.setJiggle.bind(this);
  }

  setJiggle() {
    this.setState({
      dmitriJiggle: !this.state.dmitriJiggle
    });
  }
  render() {
    return (
      <header className="header">
        <img
          onClick={this.setJiggle}
          className={
            this.state.dmitriJiggle
              ? "animated infinite tada dmitri__animated"
              : "dmitri"
          }
          src="./static/images/dmitri-face.png"
        />
        <div className="title-container">
          <h1 className="header__title">DimsLabs.com</h1>
          <p>“Holy shit, I’ve actually built a school”</p>
        </div>
        <div className="beards">
          <Draggable>
            <img className="beards__brown" src="./static/images/beard1.png" />
          </Draggable>
          <Draggable>
            <img className="beards__ginger" src="./static/images/beard5.png" />
          </Draggable>
          <Draggable>
            <img className="beards__white" src="./static/images/santa.png" />
          </Draggable>
        </div>
      </header>
    );
  }
}
export default Header;

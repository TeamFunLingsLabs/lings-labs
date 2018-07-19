import React from "react";
import Draggable from "react-draggable";
import DraggableCore from "react-draggable";

function Header() {
  return (
    <header className="header">
      <Draggable>
        <img className="dmitri" src="./static/images/dmitri-face.png" />
      </Draggable>
      <div className="title-container">
        <h1 className="header__title">Lings Labs</h1>
        <p>“Holy shit, I’ve actually built a school”</p>
      </div>
      <div className="beards">
        <Draggable>
          <img className="beards__brown" src="./static/images/beard1.png" />
        </Draggable>
        <Draggable>
          <img className="beards__ginger" src="./static/images/beard5.png" />
        </Draggable>
      </div>
    </header>
  );
}

export default Header;

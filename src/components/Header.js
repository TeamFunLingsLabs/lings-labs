import React from "react";
import Draggable from "react-draggable";
import DraggableCore from "react-draggable";

function Header() {
  return (
    <header className="header">
      <Draggable>
        <img className="dmitri" src="./static/images/dmitri-face.png" />
      </Draggable>
      <div className="beards">
        <Draggable>
          <img className="beards__brown" src="./static/images/beard1.png" />
        </Draggable>
      </div>
      <h1 className="header__title">Lings Labs</h1>
      <p>“Holy shit, I’ve actually built a school”</p>
    </header>
  );
}

export default Header;

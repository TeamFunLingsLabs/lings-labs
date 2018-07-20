import React from "react";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import TopicList from "./TopicList";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar__links">
        <li>
          <img
            className="logo"
            src="./static/images/constructor-labs-logo.png"
          />
        </li>
        <p />
        <p />
        <li>
          <Link to="/">Home</Link>
        </li>
        <p />
        <li>
          <Link to="/courseapply">Course/Apply</Link>
        </li>
        <p />

        <li>
          <Link to="/syllabus">Syllabus</Link>
        </li>
        <p />

        <li>
          <Link to="/cv">Staff</Link>
        </li>
        <p />

        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <p />

        <li>
          <Link to="/merch">Merch</Link>
        </li>
        <p />

        <li>
          <Link to="/morefun">More Fun</Link>
        </li>
        <p />

        <p />
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
      <p />
      <p />
      <Draggable>
        <img className="russian-hat" src="./static/images/russian-hat1.png" />
      </Draggable>
      <TopicList />
    </div>
  );
}

export default NavBar;

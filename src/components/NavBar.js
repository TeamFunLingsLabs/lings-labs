import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar__links">
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
          <Link to="/cv">CV</Link>
        </li>
        <p />

        <li>
          <Link to="/contact">Find Us</Link>
        </li>
        <p />

        <li>
          <Link to="/merch">Merch</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

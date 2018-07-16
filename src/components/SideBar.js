import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courseapply">Course/Apply</Link>
        </li>
        <li>
          <Link to="/syllabus">Syllabus</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
        <li>
          <Link to="/contact">Find Us</Link>
        </li>
        <li>
          <Link to="/merch">Merch</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

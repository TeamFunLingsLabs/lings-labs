import React from "react";
import { Link } from "react-router-dom";
import TopicList from "./TopicList";

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
        <p />
        <p />
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
      <TopicList />
    </div>
  );
}

export default NavBar;

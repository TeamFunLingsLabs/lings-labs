import React from "react";
import { withRouter } from "react-router-dom";

export const Button = withRouter(({ history }) => (
  <button
    className="homepage__buttons"
    type="button"
    onClick={() => {
      history.push("/syllabus");
    }}
  >
    OK
  </button>
));

export const Button2 = withRouter(({ history }) => (
  <button
    className="homepage__buttons"
    type="button"
    onClick={() => {
      history.push("/courseapply");
    }}
  >
    COOL
  </button>
));

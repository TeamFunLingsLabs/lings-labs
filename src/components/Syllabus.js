import React from "react";
import { Link } from "react-router-dom";

function Syllabus() {
  return (
    <div className="content-body syllabus--container">
      <h2 className="syllabus--title animated 1 shake">
        What we will learn you!
      </h2>
      <p className="syllabus--body-text">
        Our course is designed around developing practical skills that will not
        only provide you with a solid understanding of fundamentals and the
        ability to build amazing apps, but also the skills employers are
        desperately looking for.
      </p>
      <p className="syllabus--body-text">
        A substantial part of the course is dedicated to ensuring our students
        understand how real life software is developed and can work in a team.
        To achieve that, we have plenty of guest speakers from great companies
        to tell you all about their experience. We will cover Agile
        Methodologies such as standups, retrospectives and planning. You will
        learn how to structure a real life project, ensure effective team
        communication and how to deliver value to your customers. All these
        skills will be applied during the two group projects you will take part
        in and the main one will be presented to our hiring partners on our demo
        day.
      </p>
      <p className="syllabus--body-text">
        You can see the typical course schedule below. We may from time to time,
        update the material to focus more on skills that we and our talent
        partners believe would provide a fuller and more rounded skill set.
      </p>
      <Link to="/courseapply">
        <button className="application-button button animated infinite pulse">
          Apply Now
        </button>
      </Link>
    </div>
  );
}

export default Syllabus;

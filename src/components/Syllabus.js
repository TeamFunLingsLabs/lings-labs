import React from "react";
import { Link } from "react-router-dom";

function Syllabus() {
  return (
    <div className="content-body syllabus--container">
      <h2 className="syllabus--title animated 1 shake">What you will learn!</h2>
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
      <div>
        <h3>Week 1</h3>{" "}
        <p className="syllabus--body-text">
          Command line tools, Git, Github, Developer tools Functions, operators
          and types Array methods How the web works. Responsive design and
          accessibility Weekend project: personal website{" "}
        </p>{" "}
        <h3>Week 2</h3>{" "}
        <p className="syllabus--body-text">
          {" "}
          Scope Object traversal DOM manipulation and Events Asynchronous
          programming. Promises and ajax calls Weekend project: Project cinema{" "}
        </p>{" "}
        <h3>Week 3</h3>{" "}
        <p className="syllabus--body-text">
          {" "}
          Modules and Unit Testing using Jest Prototypes, Constructors and OOP.
          Understanding context Pure functions and Closures Software development
          principles Weekend project: Pick your own{" "}
        </p>{" "}
        <h3>Week 4</h3>{" "}
        <p className="syllabus--body-text">
          {" "}
          React intro Testing React with Enzyme Stateless components and ESLint
          Sass Weekend project: React cinema{" "}
        </p>{" "}
        <h3>Week 5</h3>{" "}
        <p className="syllabus--body-text">
          {" "}
          Node, Express and templating with Handlebars Understanding HTTP.
          RESTful API design. Express routing Deployment to Heroku Testing Node
          applications Weekend project: Quiz machine{" "}
        </p>
        <h3>Week 6</h3>{" "}
        <p className="syllabus--body-text">
          {" "}
          SQL and Databases with PostgreSQL Database structure. Joins. Using
          indexes Node and Postgres. Preventing SQL injection Transactions
          Weekend project: DeliverEAT{" "}
        </p>{" "}
        <h3>Week 7</h3>{" "}
        <p className="syllabus--body-text">
          {" "}
          Middleware and Passport Authentication Understanding browser
          performance and optimisation Weekend project: Resource library
          back-end{" "}
        </p>
        <h3>Week 8</h3>{" "}
        <p className="syllabus--body-text">
          {" "}
          Working with Git branches, merging and pull requests Small group
          project Weekend project: Resource library front-end{" "}
        </p>{" "}
        <h3>Week 9</h3>{" "}
        <p className="syllabus--body-text">
          Core Redux Using react-redux Weekend project: Expense tracker{" "}
        </p>{" "}
        <h3>Week 10-11</h3>{" "}
        <p className="syllabus--body-text">Main group project </p>{" "}
        <h3>Week 12</h3>{" "}
        <p className="syllabus--body-text">
          {" "}
          Careers, portfolio, CV writing and interview prep Demo day preparation
          Demo day
        </p>
      </div>
      <Link to="/courseapply">
        <button className="application-button button animated infinite pulse">
          Apply Now
        </button>
      </Link>
    </div>
  );
}

export default Syllabus;

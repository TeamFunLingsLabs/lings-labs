import React from "react";

function CourseBrief() {
  return (
    <div className="applications">
      <h2 className="applications__title">
        London's only JavaScript bootcamp taught by professional goofballs
      </h2>
      <p />
      <p />
      <div className="applications__brief-container">
        <h4 className="applications__brief-container-title">
          Funky Fullstack Web Development with JavaScript
        </h4>
        <ul className="applications__brief-container-list">
          <li>
            <h4>Next Start Date:</h4>
            <p>3rd September 2018</p>
          </li>
          <li>
            <h4>Location:</h4>
            <p>Shoreditch, London. We're hipsters bitches!</p>
          </li>
          <li>
            <h4>Length:</h4>
            <p>12 Weeks</p>
          </li>
          <li>
            <h4>Hours:</h4>
            <p>
              9:30am to 6:00pm Monday to Friday with weekend take-home projects.
              Say goodbye to your Sundays motherf*ckers!
            </p>
          </li>
          <li>
            <h4>Demo Day:</h4>
            <p>22nd November 2018</p>
          </li>
          <li>
            <h4>Target Audience:</h4>
            <p>Beginner - Intermediate (No fancy pants wanted)</p>
          </li>
          <li>
            <h4>Rating:</h4>
            <p>
              ★★★★★ Don't trust me mate? Check these out you pony -
              <a href="https://www.switchup.org/bootcamps/constructor-labs#tablist-tab-review">
                For the Pony
              </a>
            </p>
          </li>
          <li>
            <h4>Median starting salary:</h4>
            <p>£35,000...BOOM!</p>
          </li>
          <li>
            <h4>Fees:</h4>
            <p>£5,000...dont be tight you cheeky bastard</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CourseBrief;

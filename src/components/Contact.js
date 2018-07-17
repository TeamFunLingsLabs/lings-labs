import React from "react";


function Contact() {

  // Can't we just embed google calendar and allow visitors/potential candidates to book their own slots?
  return <div className="calendar">

    <h2>Contact and Calendar</h2>

    <div className="calendar__content">
      <iframe className="calendar__frame"
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=lingslabs%40gmail.com&amp;color=%231B887A&amp;ctz=Europe%2FLondon"
        style={{ borderWidth: 0, width: 800, height: 600, frameBorder: 0, scrolling: "no" }}>
      </iframe>

      {/* <a target="_blank"
        href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MjYzNGw0ZXZncnQzMTAwMGxvZ29oc250MTUgbGluZ3NsYWJzQG0&amp;tmsrc=lingslabs%40gmail.com">

        <button className="calendar__button">
          Interview Slot A
          </button>
      </a> */}

    </div>

  </div>;

}
export default Contact;
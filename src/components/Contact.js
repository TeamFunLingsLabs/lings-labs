import React from "react";

function Contact() {


  return <div className="calendar">

    <h2>Contact and Calendar</h2>

    <div className="calendar__content">
      <iframe className="calendar__frame"
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=lingslabs%40gmail.com&amp;color=%231B887A&amp;ctz=Europe%2FLondon"
        style={{ borderWidth: 0, width: 800, height: 600, frameBorder: 0, scrolling: "no" }}>
      </iframe>


    </div>

  </div>;

}
export default Contact;
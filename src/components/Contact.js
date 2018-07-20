import React from "react";

function Contact() {
  return (
    <div className="calendar">
      <div className="calendar__contact">
        {/* <h2 className="calendar__title animated infinite wobble delay-2s"> */}
        <h2 className="calendar__title animated wobble delay-2s">
          Contact Us
        </h2>
        <img
          className="calendar__icon animated bounce infinite delay-2s"
          src="/static/images/emoji.png"
          alt="winking specs emoji"
        />
        <br />
        <p className="calendar__text">
          Like what you see and want to get in touch? Most people do. Get me on
          the contact details below and I'll be happy to provide you with more
          information, and maybe take you out for a candlelit dinner.
        </p>
        <br />
        <p className="calendar__text">020 7490 4789</p>
        <p className="calendar__text">lingslabs@gmail.com</p>
        <br />
        <br />
        <br />
        <p className="calendar__text">
          Ok folks, here I've provided my personal calendar so you can perv on
          my life but also find a slot to book an interview with Yours Truly.
          I'm a busy guy but I'll make time for you cos I'm nice like that. ~
          Dmitri xo
        </p>
      </div>

      <div className="calendar__content" id="morph">
        <iframe
          className="calendar__frame"
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=lingslabs%40gmail.com&amp;color=%231B887A&amp;ctz=Europe%2FLondon"
          style={{
            borderWidth: 0,
            width: 700,
            height: 500,
            frameBorder: 0,
            scrolling: "no"
          }}
        />
      </div>
    </div>
  );
}
export default Contact;

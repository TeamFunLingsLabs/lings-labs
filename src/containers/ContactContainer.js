import React from "react";

//Sheila was here


function ContactContainer() {


  // Can't we just embed google calendar and allow visitors/potential candidates to book their own slots?
  return <div>
    Contact and Calendar

<br />

    {/* <iframe src='https://calendar.google.com/calendar/embed?/' height='600&amp;wkst=2&amp;bgcolor=%2333ffff&amp;src=lingslabs%40gmail.com&amp;color=%231B887A&amp;ctz=Europe%2FLondon style=border-width:1' width='800' height='600' frameBorder='1' scrolling='yes'> </iframe> */}

    <iframe className="" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=lingslabs%40gmail.com&amp;color=%231B887A&amp;ctz=Europe%2FLondon" style={{ borderWidth: 0, width: 800, height: 600, frameBorder: 0, scrolling: "no" }}></iframe>

    <br />
    Lets site visitor save an event to their own calendar - maybe for an open day or drinks
<br />
    <a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=N2c4dDIxcW9lbzI5b2FsMWExMDhybGxlajggbGluZ3NsYWJzQG0&amp;tmsrc=lingslabs%40gmail.com">

      <img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en-GB.gif" />
    </a>


    <br />
    <br />
    <br />

    <a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NTFtbm5ucjEyaHE2dWpxMDd2b2w5ZzJkbDBfMjAxODA3MThUMTAzMDAwWiBsaW5nc2xhYnNAbQ&amp;tmsrc=lingslabs%40gmail.com&amp;scp=ALL">

      <img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en-GB.gif" />

    </a>

    <br />
  </div>;

}

export default ContactContainer;


//  {/* <iframe src='https://calendar.google.com/calendar/embed?/ height=1600&amp;wkst=2&amp;bgcolor=%2333ffff&amp;src=lingslabs%40gmail.com&amp;color=%231B887A&amp;ctz=Europe%2FLondon style=border-width:1 width=1800 height=1600 frameBorder=1 scrolling=yes'> </iframe> */}

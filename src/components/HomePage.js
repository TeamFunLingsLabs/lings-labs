import React from "react";
import { Button } from "./HomePageRoute1";
import { Button2 } from "./HomePageRoute1";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <video className="homepage__video" autoPlay muted loop>
          <source src="static/images/coding.mp4" type="video/mp4" />
        </video>
        <div className="homepage__quotes">
          <p className="quote">
            "Pair programming is the most effective and under-rated teaching
            technique" - Dmitri, June 1st 2018
          </p>
          <p className="quote">"PROTIP: Factor 50" - Dmitri, May 20th 2018</p>
          <p className="quote">
            "Are bow ties the new future or a step too far? Asking for a friend"
            - Dmitri, May 14th 2018
          </p>
          <p className="quote">
            "Blue Passports, baby, blue passports" - Dmitri, May 11th 2018
          </p>
          <p className="quote">
            "It's called business for a reason" - Dmitri, April 30th 2018
          </p>
          <p className="quote">
            "Does anyone else find much easier to code wearing glasses rather
            than contact lenses?" - Dmitri, April 19th 2018
          </p>
          <p className="quote">
            "That awkward sense of disorientation once you clear your TODO list"
            - Dmitri, April 3rd 2018
          </p>
          <p className="quote">
            "I did 2 pilates sessions in 12 hours. I suspect I won't be able to
            walk later this afternoon" - Dmitri, April 3rd 2018
          </p>
          <p className="quote">
            "Is pirate hat a step too far? Asking for friend" - Dmitri, March
            11th 2018
          </p>
          <p className="quote">
            "Winning is addictive" - Dmitri, March 7th 2018
          </p>
          <p className="quote">
            "Am I a digital leader? Asking for a friend" - Dmitri, February 28th
            2018
          </p>
          <p className="quote">
            "Time to crank up the psytrance and brew some matcha. It's going to
            be a long night" - Dmitri, February 18th 2018
          </p>
          <p className="quote">
            "PRO TIP: lunchtime sauna" - Dmitri, February 13th 2018
          </p>
          <p className="quote">
            "Note to self: don’t buy Chablis from Iceland" - Dmitri, January
            22nd 2018
          </p>
        </div>
        <div className="homepage__routes">
          <h3>
            Oh no! You're being hacked! JK. Wondering what on earth is going on
            here? Hit the links below, amigo!
          </h3>
          <Button />
          <Button2 />
        </div>
      </div>
    );
  }
}

export default HomePage;

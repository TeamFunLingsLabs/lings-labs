import React from "react";

function WhyUs() {
  return (
    <div className="why-us">
      <h4 className="why-us__title">Why Choose us Legends? </h4>
      <div className="why-us__description">
        <p>
          Apart from being absolute ballers within the industry, we excel at
          teaching leading languages and technologies to our jedis-in-training.
          We specialise in:
        </p>
        <ul>
          <li>
            <h4>JavaScript</h4>
            <p>
              Face it, its the leading industry standard and works right in the
              browser. It's Neo. <br />
            </p>
          </li>
          <li>
            <h4>React & Node</h4>
            <p>
              The Trinity to JavaScript's Neo. It allows for better maintenance
              and control over applications. <br />This allows developers to not
              only share code between the client and the server, but also makes
              development much easier since we can utilise the same skill set
              for both parts of the application. <br />You can also import a
              whole bunch of fun sh*t that lets you animate the hell out of
              pointless images!
            </p>
          </li>
          <li>
            <h4>The future is bloody bright, yo!</h4>
            <p>
              Like Neo, The JavaScript language also keeps evolving. It's a
              beast. Each new iteration brings easier code that helps us coding
              ninjas better control and develop our sexy apps!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WhyUs;

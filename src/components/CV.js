import React from "react";

function CV() {
  return (
    <div>
      <div className="cv__section">
        <div className="cv__section__intro">
          <h2 className="cv__section__title">Meet the tutors...</h2>
          <p className="cv__profiles__text">
            Join me and be taught by world class engineers!!! Not only are we
            ghetto debuggers, we are also the best of friends.
          </p>
          <img
            className="cv__icon"
            src="/static/images/heart.svg"
            alt="A heart because we love each
          other!"
          />
        </div>
        <div className="cv__profiles">
          <div className="cv__profile">
            <h2 className="cv__profiles__title">Dmitri Grabov</h2>
            <img
              className="cv__profiles__img"
              src="/static/images/dmitricvphoto.png"
              alt="A photo of Dmitri"
            />
            <p className="cv__profiles__text">
              Where to start...my friends call me Dim but I am far from it. I
              love sushi, pints of vodka and those plastic sheets you use
              instead of whiteboards. You should get on board the Grabov Express
              while you still can - I'm planning to take over the world, one
              condemned building in East London at a time. I'm like a loop
              condition - you'll just keep coming back...
            </p>
          </div>
          <div className="cv__profile">
            <h2 className="cv__profiles__title">Oliver Turner</h2>
            <img
              className="cv__profiles__img"
              src="/static/images/olivercvphoto.jpeg"
              alt="A photo of Oliver"
            />
            <p className="cv__profiles__text">
              {" "}
              I mastered all the Tickets and now I am a Ticket Master. I can
              tell you everything you want (and don't want) to know about
              Tickets. My hobbies include rowing on the Serpentine, recreating
              famous artworks on Codepen and returning ACC. Catch me down the
              pub on a Friday after the course - I like to let my hair down and
              tell a few cheeky stories...
            </p>
          </div>
        </div>
      </div>
      <div className="reviews__section">
        <h2 className="cv__section__title">Reviews</h2>
        <p className="reviews__text">
          "I bloody loved this course. Can't remember what I learned but the
          computer chairs were comfy and we even had a toaster. The roof terrace
          was sweet, but I had to wear factor 50 and a hat just to go up there."
        </p>
        <p className="reviews__text">
          Harry, 26 - Cohort 2 - Developer Avocado
        </p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">"Camel camel potato camel"</p>
        <p className="reviews__text">Ahmed, 28 - Cohort 2 - Pidgeon</p>
      </div>
    </div>
  );
}

export default CV;

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
              className="animated rollIn cv__profiles__img"
              src="/static/images/dmitricvphoto.png"
              alt="A photo of Dmitri"
            />
            <p className="cv__profiles__text">
              Where to start...my friends call me Dim but I am far from it. I
              love sushi, pints of vodka and those plastic sheets you use
              instead of whiteboards. You should get on board the Grabov Express
              while you still can - I'm planning to take over the world, one
              condemned building in East London at a time. I'm like a loop
              condition - you'll just keep coming back... <br />Catchphrase:
              "Ok, cool." <br />Special Skills: Acrobatics, Surgery and Beard
              Grooming.
            </p>
            <a href="https://twitter.com/dmitrigrabov" target="_blank">
              <img
                className=" cv__icon"
                src="/static/images/twitter-icon.svg"
                alt="Twitter icon"
              />
            </a>
          </div>
          <div className="cv__profile">
            <h2 className="cv__profiles__title">Oliver Turner</h2>
            <img
              className="animated rollIn delay-5s cv__profiles__img"
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
              tell a few cheeky stories... <br />Catchphrase: "Are we
              dominating?"
              <br />Special Skills: CSS and knowing loads of stuff.
            </p>
            <a href="https://twitter.com/oliverturner" target="_blank">
              <img
                className="cv__icon"
                src="/static/images/twitter-icon.svg"
                alt="Twitter icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="reviews__section">
        <h2 className="cv__section__title">Honest Reviews</h2>
        <p className="reviews__text">
          "I bloody loved this course. Can't remember what I learned but the
          roof terrace was sweet, but I had to wear factor 50 and a hat just to
          go up there."
        </p>
        <p className="reviews__text">Harry - Cohort 2 - Developer Avocado</p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">"Camel camel potato camel"</p>
        <p className="reviews__text">Ahmed - Cohort 2 - Pigeon</p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">
          "I'm flying mate. React, Redux, CSS - BOOM. Nailed it. Cheers Dmitri.
          Sorry about making everyone ill."
        </p>
        <p className="reviews__text">
          Hamza(h) - Cohort 2 - Full Stack Developer
        </p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">
          "In 3 months I've sampled every chicken dish Old Street has to offer
          and learned how to code. Spud me."
        </p>
        <p className="reviews__text">
          Michael - Cohort 2 - Full Stack Developer
        </p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">
          "Had an amazing time - looking forward to seeing everyone on my
          collaboration with Dmitri: the Constructor Labs' Residential Course.
          Bring pyjamas."
        </p>
        <p className="reviews__text">Phoebe - Cohort 2 - General Manager</p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">"This.state=drunk"</p>
        <p className="reviews__text">Jose - Cohort 2 - Full Stack Developer</p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">
          "Seared Kobe Beef Sous Vide with Valrhona Sauce, Franck’s Mashed
          Potatoes and Edamame Beans* Marchesi Fumanelli Octavius Amarone della
          Valpolicella Classico Riserva DOCG Veneto, Italy Ripe, almost jammy
          cherry fruit with cedar and mineral character. Plump and full bodied,
          closing into dry, spicy cedar on the finish. A little angular in the
          end, complementing the chocolate flavor of the seared Kobe beef."
        </p>
        <p className="reviews__text">Alex - Cohort 2 - ?</p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">"I didn't have to resort to heroin."</p>
        <p className="reviews__text">
          Julius - Cohort 2 - Full Stack Developer
        </p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">"I have a few suggestions."</p>
        <p className="reviews__text">James - Cohort 2 - Full Stack Developer</p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">
          "The course was a steal for only £9.99. Oh wait...which course are we
          talking about?"
        </p>
        <p className="reviews__text">Edem - Cohort 2 - Full Stack Developer</p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">
          "Thanks to this course I am now a top notch web dev - although I still
          occasionally suffer from PTSD.."
        </p>
        <p className="reviews__text">Ethan - Cohort 2 - Full Stack Developer</p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">
          "This course put hairs on my chest. Figuratively speaking - not
          literally, according to my girlfriend."
        </p>
        <p className="reviews__text">Matt - Cohort 2 - Full Stack Developer</p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">
          "I loved this course, but not as much as I loved my dance classes -
          sorry Dmitri."
        </p>
        <p className="reviews__text">
          Rafal - Cohort 2 - Professional Ballroom Dancer
        </p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">
          "Este curso ha sido fantástico: hice amigos de por vida y aprendí
          mucho sobre programación. Hay un hombre que nunca olvidaré. Él
          perseguirá mis sueños para siempre.."
        </p>
        <p className="reviews__text">Ralph - Cohort 2 - Full Stack Developer</p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">
          "Using SSH seems to misbehave. Try using HTTPS instead by running `git
          remote set-url upstream
          https://github.com/constructorlabs/redux-intro.git` then you can
          `pull` and `checkout`."
        </p>
        <p className="reviews__text">
          Sheila - Cohort 2 - Full Stack Developer
        </p>
        <p className="reviews__text">-------------</p>
        <p className="reviews__text">
          "It's been incredible. They've packed so much into my head in 12
          weeks. I've been making things that blow my mind on a daily basis. I
          can't recommend it enough if anyone wants to take the plunge into a
          new career.."
        </p>
        <p className="reviews__text">Ollie - Cohort 2 - Full Stack Developer</p>
      </div>
    </div>
  );
}

export default CV;

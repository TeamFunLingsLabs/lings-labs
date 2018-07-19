import React from "react";

function TeachingStyle() {
  return (
    <div className=" teaching-style">
      <h4 className="teaching-style__title">Gangster Teaching Style</h4>
      <div className="teaching-style__description">
        <p>
          Rather than focus on long theoretical lectures, we prefer to get stuck
          in and start writing code as soon as possible. As the course
          progresses, we will start to explore topics in greater depth, enabling
          you to build more elegant solutions to ever greater challenges.
        </p>
        <p />
        <p />
        <p>
          We introduce each new topic with a brief workshop, where we explain
          how it works, provide a few examples and write some code together.
          After that we will provide you with exercises to reinforce your
          understanding and challenge you to solve some trickier problems with
          your new skills. <br />Every few topics we will throw in a small
          project for you to build. The purpose of this is to unify everything
          you have learned so far and start thinking about apps as a whole
          rather than separate functions. The projects are also an opportunity
          for you to flex your creative muscles - not only will you be able to
          practise your design skills, but you will also be able to start using
          any technologies that we have not taught you. <br />In many ways, we
          want this experience to be representative of the real world where you
          will get agile stories to implement and the exact implementation
          design will be up to you.
        </p>

        <p />
        <p />
        <p>
          Each project will be followed by a group code review. This will be a
          chance for all the students to compare their approaches and learn from
          each other. Check out our sexy teaching styles below:
        </p>
        <ul>
          <li>
            <h5>Pair Programming</h5>
            <p>
              Pair Programming will get you used to working with others, much
              like you would in a real job. Working with a partner will also
              encourage you to discuss and explain your code and working. This
              experience will be absolutely crucial for the job inteviews <br />
              following the course and we prefer to start practising early. Most
              importantly you and your partner will support each other on your
              journey - having two pairs of eyes will make it much easier to
              spot an out of place comma or a misspelled variable name. Pair
              programming is also an opportunity to learn from each other and
              discover new ways to solve problems.
            </p>
          </li>
          <li>
            <h5>Test Driven Development</h5>
            <p>
              Test Driven Development helps you to focus on code structure and
              quality from the very beginning. Writing tests is a way of
              ensuring our code does what it is supposed to, and encourages us
              to structure it in small, logical pieces. <br />Having tests in
              place will make it much easier for you to make changes to your
              code with a high degree of confidence you have not broken anything
              along the way.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeachingStyle;

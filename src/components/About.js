import React from "react";

const About = () => {
  return (
    <div
      name="about"
      //   className="w-full  h-screen bg-gradient-to-b
      //    from-gray-800
      // to-black text-white"
      className="bg-gradient-to-b
          from-gray-800
       to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex
       flex-col justify-center w-full h-full"
      >
        <div className="pb-8  mt-20 scroll-smooth select-none whitespace-normal ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500  ">
            About
          </p>
        </div>
        <p className="text-xl mt-20  tracking-wide ">
          About me yes myself <b>Vijay kumar</b> you might have seen my Name in
          the NavBar ,I have done diploma in
          <b>
            {" "}
            <u>Mechatronics Engineering</u>
          </b>{" "}
          ,yeah i know its a new engineering stream but porgressive one becuase
          of subjects you learn ,Electronics , Mechanical, computer science,
          <b>
            <u>Mechatronics </u>{" "}
          </b>
          is about merging hardware and software.this gave me confidence that i
          can even climb a everst mount because ... nahh just kidding this is
          brief about Me. But you can
          <mark>
            {" "}
            <b>
              {" "}
              Contact me through mail or fill the{" "}
              <em>Contact form and press let's talk button</em>
            </b>
          </mark>
        </p>
        <br />

        <p className="text-xl">
          <b>
            <u>About hobbies</u>
          </b>{" "}
          <li>
            I <b>Blog</b> i think i am good at It yeah i think ?..but you need
            to read that and tell me about it and share your thoughts{" "}
            <mark>self marketing</mark>.
          </li>{" "}
          <li>
            i like Travelling but most of the time i hiking or trek nature is my
            drug yup nature is the best therapist{" "}
          </li>
        </p>
      </div>
    </div>
  );
};

export default About;

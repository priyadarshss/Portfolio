import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Web Developer',
          'Competitive Programmer',
          'Smart Contract Developer',
          'Competitive Programmer',
          'MERN Stack Developer',
          // "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  )
}

export default Type;

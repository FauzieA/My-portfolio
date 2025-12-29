import React from "react";
import Typewriter from "typewriter-effect";

export default function HeroTitles() {
  return (
    /* Using inline-flex and min-w to prevent the text below from 
       jumping when the typewriter deletes characters */
    <span className="inline-flex text-[#C2A878] font-bold">
      <Typewriter
        options={{
          strings: [
            "Data Scientist",
            "Full-Stack Developer",
            "IoT Developer",
            "Computer Science Senior",
          ],
          autoStart: true,
          loop: true,
          delay: 60,
          deleteSpeed: 40,
          wrapperClassName: "text-[#C2A878]", // Ensures the style applies to the text
          cursorClassName: "text-[#C2A878] animate-pulse", // Makes the cursor match the theme
        }}
      />
    </span>
  );
}
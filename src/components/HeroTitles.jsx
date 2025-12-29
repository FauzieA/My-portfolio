import React from "react";
import Typewriter from "typewriter-effect";

export default function HeroTitles() {
  return (
    <div className="inline-block text-[#C2A878]">
      <Typewriter
        options={{
          strings: [
            "Data Scientist",       // The Goal
            "Web Developer", // The Skillset (Upgraded from Web Dev)
            "IoT Developer",        // The Differentiator (Upgraded from Enthusiast)
            "Computer Science Senior", // The Status (Upgraded from Student)
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 30,
        }}
      />
    </div>
  );
}
import React, { useRef } from "react";
import Image from "next/image";
import kshitij from "../../public/Kshitij_2.png";

const About = () => {
  return (
    <div className="text-center" id="about">
      <div className="flex items-center justify-center text-center mx-auto overflow-hidden">
        <div className="relative mt-4 mb-4 mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 overflow-hidden md:h-96 md:w-96 lg:w-96 lg:h-96">
          <Image src={kshitij} alt="Kshitij Image" />
        </div>
      </div>
      <h2 className="text-5xl py-3 text-black dark:text-slate-400">About Me</h2>
      <p className="text-lg py-4 text-justify leading-8 text-gray-800 dark:text-slate-400 md:text-xl max-w-10xl mx-auto">
        Back in high school, after finishing my 12th grade and looking for
        something to do during a long summer break, I decided to try my hand at
        building a website. That project sparked a passion for web development
        that has only grown stronger over the years. Fast forward to Today, I
        take pride in developing web solutions that are not only visually
        appealing but also highly functional and user-friendly.
      </p>
      <p className="text-lg py-4 text-justify leading-8 text-gray-800 dark:text-slate-400 md:text-xl max-w-10xl mx-auto">
        These days, I'm really diving deep into <span> Machine Learning </span>{" "}
        , <span> Artificial Intelligence </span>, and
        <span> Generative AI. </span> It's like unlocking a whole new world of
        possibilities! I'm fascinated by how these technologies can predict
        outcomes, understand languages, and even create new content out of thin
        air.
      </p>
      <p className="text-lg py-4 text-justify leading-8 text-gray-800 dark:text-slate-400 md:text-xl max-w-10xl mx-auto">
        When I’m not geeking out over tech stuff, you can usually find me
        playing or watching cricket, which is my favourite way to unwind. I also
        love listening to music, which keeps me inspired and energised.
      </p>
      <p className="text-lg py-4 text-justify leading-8 text-gray-800 dark:text-slate-400 md:text-xl max-w-10xl mx-auto">
        Thanks for stopping by to learn a bit about me. Let's connect and create
        something amazing together!
      </p>
    </div>
  );
};

export default About;

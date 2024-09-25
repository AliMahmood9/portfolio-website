import React from "react";
import Image from "next/image";
import pizza from "../../public/pizza1.png";
import Traffic from "../../public/Traffic.png";
import FlySmart from "../../public/FlySmart2.png";
import portfolio from "../../public/Portfolio1.png";
import radplants from "../../public/radplants.png";
import lifeorganics from "../../public/Life_Organics.png";

export default function Projects() {
  return (
    <section className="p-10" id="projects">
      <div>
        <h3 className="text-5xl py-2 mb-6 dark:text-slate-400">Portfolio</h3>
        <p className="text-lg py-2 leading-8 text-grey-800 dark:text-slate-400 text-justify">
          My portfolio is a collection of diverse work samples that reflect my
          expertise and experience in Full Stack development and Machine
          Learning.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {/* Portfolio Items */}
        <div className="basis-1/3 flex-1 relative">
          <h1 className="text-xl text-slate-400 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-500 py-4 md:text-2xl lg:text-2xl">
            <a href="https://github.com/Kshitij-Darwhekar/pizzeria-react-app">
              Pizzeria React App
            </a>
          </h1>
          <a
            href="https://github.com/Kshitij-Darwhekar/pizzeria-react-app"
            className="relative opacity-100 hover:bg-teal-700 transition-opacity duration-150"
          >
            <Image
              src={pizza}
              className="rounded-lg object-cover hover:opacity-50 transition-opacity duration-300"
              width={"100%"}
              height={"100%"}
              title="Pizzeria React App"
            />
          </a>
        </div>
        {/* Repeat for other portfolio items */}
      </div>
    </section>
  );
}

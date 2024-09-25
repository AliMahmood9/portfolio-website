"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useForm, ValidationError } from "@formspree/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useState } from "react";
import { useRef } from "react";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import {
  BiLogoReact,
  BiLogoAngular,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoDjango,
  BiLogoNodejs,
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoHtml5,
} from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { CgCircleci } from "react-icons/cg";
import { SiTestinglibrary } from "react-icons/si";

import { SiMysql, SiDocker, SiSqlite } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";

import Ali from "../../public/ali.jpeg";
import Bod from "../../public/bod.png";
import Arbisoft from "../../public/arbisoft.png";
import Landit from "../../public/landit.png";
import Xianqi from "../../public/xianqi.png";
import BBJ from "../../public/bbj.png";
import Insurify from "../../public/insurify.png";

const portfolioStyle = {
  layout: "responsive",
  hover: "opacity-75",
};

export const viewport = {
  themeColor: "#0f172a",
};

export default function Home() {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  console.log("Home");

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const [darkMode, setDarkMode] = useState(true);
  const [state, handleSubmit] = useForm(`${formspreeEndpoint}`);
  const [hover, setHover] = useState(false);

  const onHover = (e) => {
    e.preventDefault();
    setHover(true);
    console.log("hovered");
  };

  const onHoverOver = (e) => {
    e.preventDefault();
    setHover(false);
  };

  const customHandleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    if (data.get("website")) {
      return;
    }

    handleSubmit(event);
  };

  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  if (state.succeeded) {
    return (
      <p className="text-2xl text-teal-500 justify-center items-center flex py-50 md:text-5xl lg:text-5xl">
        Submitted Successfully
      </p>
    );
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-slate-400 scroll-smooth antialiased leading-relaxed font-poppins selection:bg-teal-500 selection:text-teal-700">
        <section className=" min-h-screen">
          <nav className="p-10 mb-12 flex justify-between dark:text-slate-400">
            <h1 className="text-xl py-4 font-dancing hover:text-teal-500 dark:text-slate-400 ">
              <a href="#" className="hover:text-teal-500">
                Hi, I'm Ali Mahmood
              </a>
            </h1>
            <nav className="hidden lg:block md:block">
              <ul className="flex items-center justify-center flex-row px-2 py-4 lg:gap-4 lg:py-4 md:gap-4 md:py-4">
                <button
                  onClick={() => {
                    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-teal-500 text-lg"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-teal-500 text-lg"
                >
                  Skills
                </button>
                <button
                  onClick={() => {
                    projectRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-teal-500 text-lg"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => {
                    contactRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-teal-500 text-lg"
                >
                  Contact
                </button>
              </ul>
            </nav>
            <ul className="flex items-center justify-end">
              <li>
                <span className="">
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer mr-5 text-2xl dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500"
                  />
                </span>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1SdDB0Xt4q9rrInaFspWdUGcc-_tmMUSZ/view?usp=sharing" // https://drive.google.com/file/d/1SdDB0Xt4q9rrInaFspWdUGcc-_tmMUSZ/view?usp=sharing
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" pt-1">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mx-4 overflow-hidden text-sm font-medium text-slate-900 rounded-lg group bg-gradient-to-br from-teal-700 to-teal-500 group-hover:from-teal-500 group-hover:to-teal-500 hover:text-slate-200 dark:text-slate-200 focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:text-slate-200 bg-slate-200 dark:bg-slate-900 rounded-md group-hover:bg-opacity-0">
                        Resume
                      </span>
                    </button>
                  </div>
                </a>
              </li>
            </ul>
          </nav>

          {/* Landing Page */}

          <div className="text-center p-10 ">
            <div className="flex flex-col items-center justify-center gap-y-5">
              <h2 className="text-6xl text-slate-900 font-medium dark:text-slate-400 md:text-7xl lg:text-8xl text-center">
                Hi I'm
                <span className="text-teal-500 dark:text-teal-500 m-2">
                  Ali
                </span>
                <span className="text-teal-500 dark:text-teal-500 p-4 m-2 md:p-0 lg:p-0">
                  Mahmood
                </span>
              </h2>
              <h2 className="text-3xl py-5 px-3 text-teal-500/75 font-medium dark:text-teal-500/75 md:text-5xl lg:text-5xl text-center">
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "Angular",
                      "React",
                      "Next",
                      "Node",
                      "Docker",
                      "CI/CD",
                      "React Native",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 90,
                    skipAddStyles: true,
                    deleteSpeed: 50,
                    pauseFor: 1000,
                  }}
                />
              </h2>
            </div>

            <p className="text-lg py-5 font-burton text-center leading-8 text-gray-800 dark:text-slate-400 md:text-xl max-w-10xl mx-auto">
              Hey! I'm a
              <span className="text-teal-500 m-1">Sr Software Engineer</span>{" "}
              with a passion for
              <span className="text-teal-500 m-1">Web Development</span>
              <br />
              and a keen interest in
              <span className="text-teal-500 m-1">Javascript</span> and
              <span className="text-teal-500 m-1">React</span> <br />
              Take a look around to see my projects and dive into my world of
              tech innovation! <br />
            </p>

            <div className="py-4 mb-20 text-5xl flex justify-center flex-row items-center text-gray-600 dark:text-gray-400 md:flex md:gap-10 lg:flex lg:gap-10 ">
              <a
                href="https://www.linkedin.com/in/ali-mahmood-38b904136/"
                className="hover:text-teal-500"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/Alimahmood7"
                className="hover:text-teal-500"
              >
                <AiFillGithub />
              </a>
              <a
                href="mailto:alimahmmod02@gmail.com"
                className="hover:text-teal-500"
              >
                <AiFillMail />
              </a>
            </div>

            {/* About Me Section */}

            <div className="text-center" id="about" ref={aboutRef}>
              <div className="flex items-center justify-center text-center mx-auto overflow-hidden">
                <div className="relative mt-2 mb-4 mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 overflow-hidden md:h-96 md:w-96 lg:w-96 lg:h-96">
                  <Image src={Ali} fill={false} alt="ali Image" />
                </div>
              </div>

              <h2 className="text-5xl py-3 text-black dark:text-slate-400">
                About Me
              </h2>

              <p className="text-lg py-4 text-justify leading-8 text-gray-800 dark:text-slate-400 md:text-xl max-w-10xl mx-auto">
                I'm a Senior Software Engineer with 5 years of experience in
                developing innovative web applications. I’ve had the pleasure of
                working at Arbisoft, and I’m currently part of the talented team
                at Tkxel. Over the years, I’ve honed my skills in modern
                JavaScript technologies, with a focus on Angular, React, and
                Node.js. React, in particular, has become a major area of
                interest for me due to its flexibility and power in building
                scalable and dynamic user interfaces. My passion lies in
                creating clean, efficient, and impactful solutions that not only
                meet technical requirements but also enhance the user
                experience. When I’m not immersed in code, I enjoy staying
                active by playing sports, especially cricket. It helps me
                recharge and maintain a healthy work-life balance. Thanks for
                stopping by—feel free to connect, and let’s explore
                opportunities to collaborate!
              </p>

              <p className="text-lg py-4 text-justify leading-8 text-gray-800 dark:text-slate-400 md:text-xl max-w-10xl mx-auto">
                Thanks for stopping by to learn a bit about me. Let's connect
                and create something amazing together!
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}

        <div id="skills" ref={skillsRef} className="p-10">
          <div>
            <h1 className="text-5xl py-3 text-black dark:text-slate-400">
              My Skills
            </h1>
          </div>
          <div className="text-center p-10 rounded-xl my-10 ss">
            <h2 className="text-3xl p-7 dark:text-slate-400 md:text-4xl lg:text-5xl">
              Languages
            </h2>
            <div className="flex flex-wrap justify-evenly">
              <div className="p-2 text-xl dark:text-slate-400">
                <BiLogoJavascript className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                Javascript
              </div>
              <div className="p-2 text-xl dark:text-slate-400">
                <BiLogoTypescript className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                Typecript
              </div>
              <div className="p-2 text-xl dark:text-slate-400">
                <BiLogoPython className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                Python
              </div>
            </div>

            <h2 className="text-3xl p-7 dark:text-slate-400 md:text-4xl lg:text-5xl">
              Front End
            </h2>
            <div className="flex flex-wrap justify-evenly">
              <div className="p-2 m-2 text-xl dark:text-slate-400">
                <BiLogoAngular className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                Angular
              </div>
              <div className="p-2 m-2 text-xl dark:text-slate-400">
                <BiLogoReact className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                React
              </div>
              <div className="p-2 m-2 text-xl dark:text-slate-400">
                <BiLogoHtml5 className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                HTML
              </div>
              <div className="p-2 m-2 text-xl dark:text-slate-400">
                <BiLogoCss3 className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                CSS
              </div>
              <div className="p-2 m-2 text-xl dark:text-slate-400">
                <BiLogoTailwindCss className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                Tailwind CSS
              </div>
              <div className="p-2 m-2 text-xl dark:text-slate-400">
                <BiLogoBootstrap className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                Bootstrap
              </div>
            </div>

            <h2 className="text-3xl p-7 dark:text-slate-400 md:text-4xl lg:text-5xl">
              Back End
            </h2>
            <div className="flex flex-wrap justify-evenly">
              <div className="p-2 text-xl dark:text-slate-400">
                <BiLogoNodejs className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                Node Js
              </div>
              <div className="p-2 text-xl dark:text-slate-400">
                <BiLogoDjango className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />{" "}
                Django
              </div>
            </div>

            <h2 className="text-3xl p-7 dark:text-slate-400 md:text-4xl lg:text-5xl">
              Databases
            </h2>
            <div className="flex flex-wrap justify-evenly">
              <div className="p-2 text-xl dark:text-slate-400">
                <BiLogoMongodb className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                MongoDB
              </div>
              <div className="p-2 text-xl dark:text-slate-400">
                <SiMysql className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                MySQL
              </div>
              <div className="p-2 text-xl dark:text-slate-400">
                <SiSqlite className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                Sqlite
              </div>
            </div>

            <h2 className="text-3xl p-7 dark:text-slate-400 md:text-4xl lg:text-5xl">
              Other Technologies
            </h2>
            <div className="flex flex-wrap justify-evenly">
              <div className="p-2 text-xl dark:text-slate-400">
                <SiTestinglibrary className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5" />{" "}
                Testing library
              </div>
              <div className="p-2 text-xl dark:text-slate-400">
                <TbBrandCypress className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5" />{" "}
                Cypress
              </div>
              <div className="p-2 text-xl dark:text-slate-400">
                <CgCircleci className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5" />{" "}
                Circle CI
              </div>
              <div className="p-2 text-xl dark:text-slate-400">
                <SiDocker className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5" />{" "}
                Docker
              </div>
              <div className="p-2 text-xl dark:text-slate-400">
                <TbBrandReactNative className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5" />{" "}
                React Native
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}

        <section className="p-10" id="projects" ref={projectRef}>
          <div>
            <h3 className="text-5xl py-2 mb-6 dark:text-slate-400">
              Company Projects
            </h3>
            <p className="text-lg py-2 leading-8 text-grey-800 dark:text-slate-400 text-justify">
              My portfolio showcases a diverse array of work samples that
              reflect my expertise and experience in web development. It
              features a variety of projects
            </p>
            <p>
              Each project demonstrates my creativity, problem-solving
              abilities, and professional growth. Through these projects, I’ve
              tackled complex challenges and delivered impactful solutions that
              highlight my technical and collaborative skills. My portfolio is
              designed not only to present my past achievements but also to
              offer insights into my thought process and my approach to solving
              real-world problems. By exploring it, potential employers,
              clients, or collaborators can gain a deeper understanding of my
              skills and assess how I can contribute to their specific needs.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 relative">
              <h1 className="text-xl text-slate-400 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-500 py-4 md:text-2xl lg:text-2xl">
                <a href="https://bracesondemand.com/" target="blank">
                  Braced On Demand
                </a>
              </h1>
              {hover && (
                <p className="absolute inset-0 flex items-center justify-center text-slate-400 ">
                  Click to Chekout
                </p>
              )}
              <a
                href="https://bracesondemand.com/"
                target="blank"
                className="relative opacity-100 hover:bg-teal-700 transition-opacity duration-150"
              >
                <Image
                  src={Bod}
                  className="rounded-lg object-cover hover:opacity-50 transition-opacity duration-300"
                  width={"100%"}
                  height={"100%"}
                  style={portfolioStyle}
                  title="Braces On Demand"
                  onMouseEnter={(e) => onHover(e)}
                  onMouseLeave={(e) => onHoverOver(e)}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative">
              <h1 className="text-xl text-slate-400 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-500 py-4 md:text-2xl lg:text-2xl">
                <a href="https://insurify.com/" target="blank">
                  Insurify
                </a>
              </h1>
              {hover && (
                <p className="absolute inset-0 flex items-center justify-center text-slate-400 ">
                  Click to Checkout
                </p>
              )}
              <a
                href="https://insurify.com/"
                target="blank"
                className="relative opacity-100 hover:bg-teal-700 transition-opacity duration-150 "
              >
                <Image
                  src={Insurify}
                  className="rounded-lg object-cover hover:opacity-50 transition-opacity duration-300"
                  width={"100%"}
                  height={"100%"}
                  style={portfolioStyle}
                  title="Insurify"
                  onMouseEnter={(e) => onHover(e)}
                  onMouseLeave={(e) => onHoverOver(e)}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative">
              <h1 className="text-xl text-slate-400 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-500 py-4 md:text-2xl lg:text-2xl">
                <a href="https://www.xiangqi.com/" target="blank">
                  Xianqi
                </a>
              </h1>
              {hover && (
                <p className="absolute inset-0 flex items-center justify-center text-slate-400 ">
                  Click to Chekout
                </p>
              )}
              <a
                href="https://www.xiangqi.com/"
                target="blank"
                className="relative opacity-100 hover:bg-teal-700 transition-opacity duration-150"
              >
                <Image
                  src={Xianqi}
                  className="rounded-lg object-cover hover:opacity-50 transition-opacity duration-300"
                  width={"100%"}
                  height={"100%"}
                  style={portfolioStyle}
                  title="Xianqi"
                  onMouseEnter={(e) => onHover(e)}
                  onMouseLeave={(e) => onHoverOver(e)}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative">
              <h1 className="text-xl text-slate-400 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-500 py-4 md:text-2xl lg:text-2xl">
                <a href="https://www.landit.com/" target="blank">
                  landit
                </a>
              </h1>
              {hover && (
                <p className="absolute inset-0 flex items-center justify-center text-slate-400 ">
                  Click to Checkout
                </p>
              )}
              <a
                href="https://www.landit.com/"
                target="blank"
                className="relative opacity-100 hover:bg-teal-700 transition-opacity duration-150"
              >
                <Image
                  src={Landit}
                  className="rounded-lg object-cover hover:opacity-50 transition-opacity duration-300"
                  width={"100%"}
                  height={"100%"}
                  style={portfolioStyle}
                  title="Landit"
                  onMouseEnter={(e) => onHover(e)}
                  onMouseLeave={(e) => onHoverOver(e)}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative">
              <h1 className="text-xl text-slate-400 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-500 py-4 md:text-2xl lg:text-2xl">
                <a href="https://arbisoft.com/" target="blank">
                  Arbisoft Website
                </a>
              </h1>
              {hover && (
                <p className="absolute inset-0 flex items-center justify-center text-slate-400 ">
                  Click to Checkout
                </p>
              )}
              <a
                href="https://arbisoft.com/"
                target="blank"
                className="relative opacity-100 hover:bg-teal-700 transition-opacity duration-150"
              >
                <Image
                  src={Arbisoft}
                  className="rounded-lg object-cover hover:opacity-50 transition-opacity duration-300"
                  width={"100%"}
                  height={"100%"}
                  style={portfolioStyle}
                  title="Arbisoft website"
                  onMouseEnter={(e) => onHover(e)}
                  onMouseLeave={(e) => onHoverOver(e)}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative">
              <h1 className="text-xl text-slate-400 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-500 py-4 md:text-2xl lg:text-2xl">
                <a
                  href="https://custportal.bbjlatavola.com:444/"
                  target="blank"
                >
                  BBJ Latavola
                </a>
              </h1>
              {hover && (
                <p className="absolute inset-0 flex items-center justify-center text-slate-400 ">
                  Click to Checkout
                </p>
              )}
              <a
                href="https://custportal.bbjlatavola.com:444/"
                target="blank"
                className="relative opacity-100 hover:bg-teal-700 transition-opacity duration-150"
              >
                <Image
                  src={BBJ}
                  className="rounded-lg object-cover hover:opacity-50 transition-opacity duration-300"
                  width={"100%"}
                  height={"110%"}
                  style={portfolioStyle}
                  title="BBJ customer portal"
                  onMouseEnter={(e) => onHover(e)}
                  onMouseLeave={(e) => onHoverOver(e)}
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Me Form */}

        <section className="px-10" id="contact" ref={contactRef}>
          <h1 className="text-5xl dark:text-slate-400 py-5">Contact Me</h1>
          <form onSubmit={customHandleSubmit} className="p-3">
            <label htmlFor="name" className="dark:text-slate-400 ">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              required
              className="my-2 border-2 border-teal-500 p-2 rounded-lg w-full bg-slate-200 caret-teal-500 dark:border-teal-500 dark:bg-slate-900 dark:text-slate-200"
            />
            <label htmlFor="email" className="dark:text-slate-400 ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="my-2 border-2 border-teal-500 p-2 rounded-lg w-full bg-slate-200 caret-teal-500 dark:border-teal-500 dark:bg-slate-900 dark:text-slate-200 "
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message" className="dark:text-slate-400 ">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="my-2 border-2 border-teal-500 p-2 py-4 rounded-lg w-full bg-slate-200 caret-teal-500 dark:border-teal-500 dark:bg-slate-900 dark:text-slate-200 "
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            {/* Honeypot field */}
            <label htmlFor="website" className="hidden">
              Website
            </label>
            <input
              type="text"
              id="website"
              name="website"
              className="hidden"
              style={{ display: "none" }}
            />

            <button
              type="submit"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-700 to-teal-500 group-hover:from-cyan-500 group-hover:to-cyan-500 hover:text-slate-200 dark:text-slate-200 focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:text-slate-200 bg-slate-200 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Submit
              </span>
            </button>
          </form>
        </section>

        {/* Footer */}

        <hr className=" border-slate-600" />
        <div className="flex items-center justify-center flex-row ">
          <footer className="max-w-md pb-0 text-sm text-center text-slate-600 md:pb-3 lg:pb-3">
            <p className="p-2">
              Inspired by multiple web dev portfolio's , Coded in
              <a
                href="https://code.visualstudio.com/"
                className="font-medium text-slate-400 hover:text-teal-500"
              >
                Visual Studio Code
              </a>
              by yours truly , Built using
              <a
                href="https://nextjs.org/"
                className="font-medium text-slate-400 hover:text-teal-500"
              >
                Next.js
              </a>
              and
              <a
                href="https://tailwindcss.com/"
                className="font-medium text-slate-400 hover:text-teal-500"
              >
                Tailwind CSS
              </a>
              , Hosted on a
              <a
                href="https://aws.amazon.com/what-is/vps/"
                className="font-medium text-slate-400 hover:text-teal-500"
              >
                Personal VPS.
              </a>
              Checkout the Repo on
              <a
                href="https://github.com/Kshitij-Darwhekar/Kshitij-Website"
                className="font-medium text-slate-400 hover:text-teal-500"
              >
                Github
              </a>
            </p>
          </footer>
        </div>
      </main>
      <Analytics />
      <SpeedInsights />
      <GoogleAnalytics gaId={gaId} />
    </div>
  );
}

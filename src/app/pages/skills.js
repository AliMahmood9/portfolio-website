import React from "react";
import {
  BiLogoReact,
  BiLogoJava,
  BiLogoPython,
  BiLogoNodejs,
  BiLogoSpringBoot,
  BiLogoMongodb,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoHtml5,
} from "react-icons/bi";
import {
  SiApachemaven,
  SiNumpy,
  SiPandas,
  SiMysql,
  SiDocker,
  SiSqlite,
} from "react-icons/si";

export default function Skills() {
  return (
    <div id="skills" className="p-10">
      <div>
        <h1 className="text-5xl py-3 text-black dark:text-slate-400">
          {" "}
          My Skills
        </h1>
      </div>
      <div className="text-center p-10 rounded-xl my-10 ss">
        <h2 className="text-3xl p-7 dark:text-slate-400 md:text-4xl lg:text-5xl">
          Languages
        </h2>
        <div className="flex flex-wrap justify-evenly">
          <div className="p-2 text-xl dark:text-slate-400">
            <BiLogoPython className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
            Python
          </div>
          <div className="p-2 text-xl dark:text-slate-400">
            <BiLogoJava className="w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />{" "}
            Java
          </div>
        </div>
        {/* Repeat for other sections */}
      </div>
    </div>
  );
}

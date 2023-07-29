import React from "react";
import Image from "next/image";

const skills = [
  { skill: "JAVA" },
  { skill: "C" },
  { skill: "Python" },
  { skill: "MATLAB" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Typescript" },
  { skill: "Next.js" },
  { skill: "React" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-3/5">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me
            </h1>
            <p>Hi, I&#39;m Jacky. </p>
            <br />
            <p>paragraph here wad</p>
            <br />
            <p>paragraph here</p>
            <br />
            <p>paragraph here</p>
          </div>
          <div className="text-center md:w-2/5 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

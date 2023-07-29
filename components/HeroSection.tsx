"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-22">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl"
            src="/temp1.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hi, I&#39;m Jacky
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I am a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineering{" "}
            </span>
            student currently in my second year at the University of Auckland,
            New Zealand.
          </p>
          <Link
            to="about"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Learn more about me
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import React from "react";
import Navbar from "./components/Navbar";
import me from "./img/meh.jpeg";
import Top from "./components/Top";
import Projects from "./components/Projects";
import Footer from './components/Footer'
import { TypewriterEffect } from "../src/ui/typewriter-effect";
import { useRef } from "react";
import { IconChevronDown } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import git from "./img/github.svg";
import linkedin from "./img/linkedin.svg";
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import Sidebar from './components/Sidebar'; // Import the Sidebar component


const Landing = () => {

  const words = [
    {
      text: "A",
    },
    {
      text: "developer",
    },
    {
      text: "with",
    },
    {
      text: "a",
    },
    {
      text: "passion",

    },
    {
      text: "for",
    },
    {
      text: "building",
    },
    {
      text: "innovative",
      className: "text-[#FFBE5C]",
    },
    {
      text: "&",
    },
    {
      text: "user-centered",
      className: "text-[#75AAFB]",
    },
    {
      text: "solutions.",
    },
  ];

  const secondPortionRef = useRef(null);

  const scrollToSecondPortion = () => {
    secondPortionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sections = [
    { id: 'Home', title: 'Home' },
    { id: 'Experiences', title: 'Experiences' },
    { id: 'About', title: 'About' },
  ];

  return (
    <>
      <Sidebar sections={sections} className="sm:hidden" />
      {/* <div>
        <Top />
      </div> */}
      <div>
        <section id="Home">
          <BackgroundGradientAnimation>
            <div className="h-screen">
              {/* <Navbar className="relative z-50" /> */}
              <div className="px-[10%] py-[10%] mt-[5%]">
                <div className="flex flex-row items-end mb-[3%] relative z-50">
                  <div className="text-5xl font-semibold ">
                    Hello, I'm <div className="text-7xl">Chu-Yin Weng</div>
                  </div>
                  <div className="ml-5 font-semibold text-3xl"> aka Dora</div>
                </div>
                <TypewriterEffect words={words} className="font-semibold text-2xl mb-5 relative text-left z-50" />
                <div className="font-semibold text-2xl">
                  Check out my projects below :)
                </div>

              </div>
              <div onClick={scrollToSecondPortion} className='relative z-50 group flex flex-col space-y-4 items-center hover:cursor-pointer justify-center mb-24'>
                <motion.div
                  animate={{ y: ["0%", "-20%", "0%"] }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <IconChevronDown size={70} color='#213547' />
                </motion.div>
              </div>
            </div>
          </BackgroundGradientAnimation>
        </section>
        {/* <Navbar /> */}
        <section id="Experiences" className="px-[15%] mt-20">
          <div ref={secondPortionRef}>
            <div className="space-y-10">
              <div className="text-3xl font-semibold justify-center">
                Experiences & Projects
              </div>
              <div className="space-y-10">
                <Projects />
              </div>
            </div>
            <div className=" mt-5 mb-2">
              {" "}
              {/* GitHub Link Section */}
              Want to see more? Check out my
              <a
                href="https://github.com/dorawengg"
                className="font-bold underline"
              >
                {" "}
                GitHub!
              </a>
            </div>
          </div>

        </section>

        <section id="About" className="h-screen px-[15%] mt-20">
          <div className="h-[94%] items-center">
            <div className="py-[15%]">
              <div className="flex flex-row items-center sm:flex-col-reverse">
                <div className="flex flex-col mr-10 text-xl">
                  <div className="text-3xl font-semibold mt-3 mb-2 sm:mb-1">
                    Still here? More about me:
                  </div>
                  <div className="mt-5 mb-2 sm:mb-1">
                    I'm a student at <span className="font-bold text-red-500">Cornell University</span> passionate about crafting innovative software solutions. Inspired by my father's work in technology, I've developed a strong interest in <span className="font-bold text-[#75AAFB]">human computer interactions</span>, specifically in web development. I enjoy collaborating with teams and am eager to continually expand my skillset.
                  </div>

                  <div className="mt-5 mb-2 sm:mb-1">
                    My goal is to leverage technology to address real-world challenges. I'm particularly drawn to individuals who share this vision of using design to create a positive impact. If you're passionate about solving problems through design, {" "}<a
                      href="https://www.linkedin.com/in/chuyinweng/"
                      className="font-bold underline text-[#0277B5]"
                    >
                      lets connect!
                    </a>
                  </div>
                  <div className="mt-5 mb-2">
                    Outside of academics, I explore creative websites, experiment with coffee recipes, and I'm a big foodie.

                  </div>
                  <div className="flex flex-row items-center space-x-8 ">
                    <a
                      href="https://github.com/dorawengg"
                      target="_blank"
                    >
                      <img src={git} alt="GitHub Logo" className="w-full h-full" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/chuyinweng/"
                      target="_blank"
                    >
                      <img src={linkedin} alt="LinkedIn Logo" className="w-full h-full" />
                    </a>
                  </div>
                </div>
                <img
                  src={me}
                  alt="Pic of me"
                  className="rounded-3xl object-cover w-1/3 sm:w-4/5"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Landing;

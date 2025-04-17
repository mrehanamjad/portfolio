"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Container from "./Container";
import { AuroraText } from "./magicui/aurora-text";
import { TextAnimate } from "./magicui/text-animate";

const skills = [
  { id: 1, name: 'HTML', image: '/html.png', designation: "Markup Language" },
  { id: 2, name: 'CSS', image: '/css.webp', designation: "Styling Language" },
  { id: 3, name: 'JavaScript', image: '/js.png', designation: "Programming Language" },
  { id: 4, name: 'TypeScript', image: '/ts.png', designation: "Typed JavaScript" },
  { id: 5, name: 'Tailwind CSS', image: '/tailwind.png', designation: "Utility-First CSS Framework" },
  { id: 6, name: 'React', image: '/react.webp', designation: "JavaScript Library" },
  { id: 7, name: 'Redux Toolkit', image: '/redux.png', designation: "State Management" },
  { id: 8, name: 'Git', image: '/git.png', designation: "Version Control" },
  { id: 9, name: 'GitHub', image: '/github.png', designation: "Code Hosting Platform" },
  { id: 10, name: 'Next.js', image: '/nextjs.svg', designation: "React Framework" },
  { id: 11, name: 'Node.js', image: '/nodejs.png', designation: "JavaScript Runtime" }
];


export default function Skills() {
  
  return (
    <section 
      id="skills" 
      className=" text-white min-h-[30rem] h-full px-3 py-20 overflow-hidden "
    >

      <Container>
        <div className="text-center mb-14">
          <AuroraText className="text-4xl md:text-5xl font-bold mb-2" colors={["#c084fc","#60a5fa"]}>My Skills</AuroraText>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4 rounded-full"></div>
          
          <TextAnimate animation="slideLeft" by="character" className="text-gray-400 mt-2 md:text-xl max-w-2xl mx-auto">Technologies I&apos;ve mastered to build modern, responsive web applications</TextAnimate>
        
        </div>

        <div className="flex flex-row items-center justify-center gap-6 flex-wrap w-full">
           <AnimatedTooltip items={skills} />
        </div>
      </Container>
    </section>
  );
}
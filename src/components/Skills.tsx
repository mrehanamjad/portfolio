"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Container from "./Container";

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
    <section className="bg-violet-300 text-black min-h-[30rem] h-full rounded-t-2xl mx-2 py-16 sticky top-4 ">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">My Skills</h2>
          <p className="text-gray-600 mt-2 md:text-xl">Technologies I have experience with</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-6 flex-wrap w-full">
          <AnimatedTooltip items={skills} />
        </div>
      </Container>
    </section>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeroRib } from "./HeroRib";
import { TypingAnimation } from "./magicui/typing-animation";
import { TextAnimate } from "./magicui/text-animate";

const Hero = () => {
  return (
    <section className="relative h-full w-full flex flex-col items-center justify-center  text-white px-6 md:px-12 lg:px-2 py-24 -z-30">
      
      {/* Profile Image with Glow Effect */}
      <motion.div
        className="relative  w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-8 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute  inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-1">
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src="https://avatars.githubusercontent.com/u/144995992?v=4"
              alt="Profile Picture"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-50 -z-10"></div>
      </motion.div>
      <HeroRib />

      {/* Hero Content */}
      <div className="max-w-5xl text-center z-10">
        <motion.p
          className="text-lg md:text-2xl font-medium mb-3 text-blue-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         👋 Hi, I&apos;m
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb- bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
         <TypingAnimation startOnView={true} duration={200}>M.Rehan Amjad</TypingAnimation>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6,delay:2.5 }}
        
        >
          <TextAnimate animation="blurInUp" by="character" duration={5}>
          Full Stack Developer
    </TextAnimate>
          
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
        <TextAnimate animation="slideLeft" by="character"> I&apos;m a passionate developer specializing in creating beautiful, functional, and user-friendly websites and applications. With expertise in modern web technologies, I turn ideas into reality.</TextAnimate> 
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-purple-500/20 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          
          <motion.button
            className="bg-transparent border border-purple-500 text-purple-400 px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-purple-500/10 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;






"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {  HeroRib } from "./HeroRib";

const Hero = () => {
  return (
    <section className="sticky -top-40 w-full  flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300 text-black px-6 md:px-12 lg:px-2 py-20 -z-30">
      {/* Profile Image */}
      <motion.div
        className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg border-4 border-white mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/144995992?v=4" // Replace with actual image path
          alt="Profile Picture"
          width={192}
          height={192}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="max-w-5xl text-center">
        <motion.p
          className="text-lg md:text-2xl font-medium mb-3 text-gray-700"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          M.Rehan Amjad
        </motion.h1>
       

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Full Stack Developer
        </motion.h2>
          <HeroRib />

        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-800 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          I&apos;m a passionate developer specializing in creating beautiful, functional, and user-friendly websites and applications. With expertise in modern web technologies, I turn ideas into reality.
        </motion.p>

        <motion.button
          className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-gray-800 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </div>
     
    </section>
  );
};

export default Hero;

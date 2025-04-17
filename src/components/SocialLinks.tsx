"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SocialLinks = () => {
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/mrehanamjad/" },
    { name: "Github", href: "https://github.com/mrehanamjad/" },
    { name: "X", href: "" },
  ];

  return (
    <section className="w-full py-20 container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-sm:mx-2">
          {socialLinks.map((sl) => (
            <div
              key={sl.name}
              className="relative"
            >
              <Link href={sl.href} target="_blank" className="group cursor-pointer"> 
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-4 md:p-10 h-28 md:h-36 flex justify-between items-center hover:bg-gray-800/50 ">
                    <div className=" text-gray-300  text-2xl font-medium group-hover:underline ">
                      {sl.name}
                    </div>
                
                  <div
                    className="text-gray-400 group-hover:text-white group-hover:-translate-y-3 group-hover:translate-x-4  transition-all duration-200"
                  >
                    <ArrowUpRight size={70} strokeWidth={1} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
    </section>
  );
};

export default SocialLinks;
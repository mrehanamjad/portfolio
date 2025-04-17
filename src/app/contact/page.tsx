"use client";
import React from "react";
import { Github, Linkedin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const RetroLanding = () => {
  return (
    <div className="min-h-screen relative bg-gray-950 text-white">
      {/* Graph paper background (dark variant) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(#1f2937 1px, transparent 1px),
            linear-gradient(90deg, #1f2937 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundColor: "#0f172a", // Slate-950
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28">
        {/* Let's Connect banner */}
        <div className="border-b-4 mb-10 border-yellow-400 w-fit mx-auto -rotate-1">
          <div className="text-center mb-2 border-b-8 border-yellow-400">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              LET&apos;S CONNECT
            </h2>
          </div>
        </div>

        <div className="h-12 w-full"></div>

        {/* Content grid */}
        <div className="grid grid-cols-2 gap-12">
          {/* Left side */}
          <div>
            <Link
              href="mailto:rehanamjad520@gmail.com"
              className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors"
            >
              REHANAMJAD520@GMAIL.COM
            </Link>
          </div>

          {/* Right side */}
          <div className="text-right">
            <div className="flex justify-end gap-4">
              <Link
                href="#"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Github size={32} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mrehanamjad"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Linkedin size={32} />
              </Link>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default RetroLanding;

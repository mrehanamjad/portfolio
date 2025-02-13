"use client"
import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

const RetroLanding = () => {

  return (
    <div className="min-h-screen relative">
      {/* Graph paper background */}
      <div 
        className="absolute inset-0 bg-cyan-50"
        // style={{
        //   backgroundImage: `
        //     linear-gradient(#cbd5e1 1px, transparent 1px),
        //     linear-gradient(90deg, #cbd5e1 1px, transparent 1px)
        //   `,
        //   backgroundSize: '20px 20px'
        // }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28">
        {/* Let's Talk banner */}
        <div className=' border-b-4 mb-10 border-yellow-400  w-fit mx-auto -rotate-1'>
        <div className="text-center mb-2 border-b-8 border-yellow-400">
          <h2 className="text-4xl md:text-5xl font-bold">LET&apos;S CONNECT</h2>
        </div>
        </div>
        <div className="h-12 w-full"></div>

        {/* Content grid */}
        <div className="grid grid-cols-2 gap-12">
          {/* Left side */}
          <div className=''>
            <Link 
              href="mailto:rehanamjad520@gmail.com" 
              className="text-2xl font-bold text-green-500 hover:text-green-600 transition-colors"
            >
              REHANAMJAD520@GMAIL.COM
            </Link>
          </div>

          {/* Right side */}
          <div className="text-right">
            {/* Social links */}
            <div className="flex justify-end gap-4">
              <Link href="#" className="text-pink-500 hover:text-pink-600">
                <Github size={32} />
              </Link>
              <Link href="https://www.linkedin.com/in/mrehanamjad" target='_blank' className="text-blue-500 hover:text-blue-600">
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
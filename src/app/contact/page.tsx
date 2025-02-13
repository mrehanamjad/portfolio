"use client"
import React, { useState } from 'react';
import { Instagram, Linkedin, Send } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const RetroLanding = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e:any) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e:any) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

  return (
    <div className="min-h-screen relative">
      {/* Graph paper background */}
      <div 
        className="absolute inset-0 bg-cyan-50"
        style={{
          backgroundImage: `
            linear-gradient(#cbd5e1 1px, transparent 1px),
            linear-gradient(90deg, #cbd5e1 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Brown wavy header */}
      <div className="relative">
        <div className="h-32 bg-amber-700 w-full transform -skew-y-6 origin-left translate-y-[-20px]">
          {/* Decorative elements */}
          <div className="absolute top-4 left-8">
            <div className="w-8 h-8 bg-pink-300 rounded-full" />
          </div>
          <div className="absolute top-2 right-16">
            <div className="w-12 h-12 bg-pink-200 rounded-full" />
          </div>
          {/* "Look at the pants" text in corner */}
          <div className="absolute top-4 right-4 bg-blue-600 p-2 transform rotate-[-5deg]">
            <span className="text-white font-hand">Look at the pants</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-6 pt-8">
        {/* Let's Talk banner */}
        <div className="flex justify-center mb-12">
          <div className="bg-yellow-300 border-4 border-black p-4 transform rotate-[-2deg] shadow-lg">
            <h1 className="text-4xl font-bold">LET'S TALK</h1>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-2 gap-12">
          {/* Left side */}
          <div>
            <h2 className="text-3xl mb-4 font-bold text-gray-800">Do you believe in aliens?</h2>
            <a 
              href="mailto:vz.gurbov@gmail.com" 
              className="text-2xl font-bold text-green-500 hover:text-green-600 transition-colors"
            >
              VZ.GURBOV@GMAIL.COM
            </a>
            {/* Logo */}
            <div className="mt-12">
              <div className="w-24 h-24 bg-yellow-300 border-4 border-black flex items-center justify-center">
                <span className="text-4xl font-bold">G</span>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="text-right">
            <p className="text-2xl mb-2">Gabrovo, Bulgaria</p>
            <p className="text-2xl mb-4">+359 88 5868 793</p>
            <p className="text-blue-600 italic mb-8">I bet you can't find me</p>
            
            {/* Social links */}
            <div className="flex justify-end gap-4">
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <Instagram size={32} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>

      <ContactForm />

        {/* Navigation */}
        <nav className="mt-16">
          <ul className="flex justify-end gap-8 text-xl font-bold">
            {['HOME', 'PROJECTS', 'SERVICES', 'CONTACTS'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default RetroLanding;
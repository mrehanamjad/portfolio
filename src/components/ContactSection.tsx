"use client"
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { AuroraText } from './magicui/aurora-text';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate sending form
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="w-full mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
        <AuroraText className="text-4xl md:text-5xl font-bold mb-2" colors={["#c084fc","#60a5fa"]}>Contact Me</AuroraText>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4 rounded-full"></div>        </div>

        <div className="rounded-lg border-4 bg-gray-900 text-white border-purple-700 shadow-lg p-6 md:p-8 relative overflow-hidden">
          
          {/* Retro background elements */}
          <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-purple-800/30"></div>
          <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-blue-800/20"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-bold mb-2 tracking-wide text-blue-300"
                >
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded border-2 bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white focus:outline-none"
                  placeholder="Jane Doe"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-bold mb-2 tracking-wide text-blue-300"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded border-2 bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white focus:outline-none"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-bold mb-2 tracking-wide text-blue-300"
              >
                YOUR MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded border-2 bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white focus:outline-none resize-none"
                placeholder="Hello! I'd like to talk about..."
              />
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSending}
                className={`flex items-center justify-center gap-2 py-3 px-6 rounded font-bold text-white uppercase transition-transform hover:-translate-y-1 transform bg-purple-600 hover:bg-purple-700 shadow-[0_0_15px_rgba(147,51,234,0.5)] ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSending ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>SEND IT</span>
                  </>
                )}
              </button>
            </div>
            
            {isSuccess && (
              <div className="p-4 rounded border-l-4 bg-green-900/30 border-green-500 text-green-300">
                <p className="font-medium">Message sent successfully! I&apos;ll get back to you soon.</p>
              </div>
            )}
          </form>
        </div>
        
        {/* Retro footer decoration */}
        <div className="mt-8 flex justify-center">
          <div className="h-2 w-16 bg-purple-600 rounded-full mx-1"></div>
          <div className="h-2 w-16 bg-blue-600 rounded-full mx-1"></div>
          <div className="h-2 w-16 bg-purple-600 rounded-full mx-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
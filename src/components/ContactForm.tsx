// "use client"
// import React, { useState } from 'react';
// import { Send } from 'lucide-react';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     // Here you would typically send the form data to your server
//   }

//   return (
//      <div className="mt-16 mb-16 text-black">
//      <div className="max-w-2xl mx-auto bg-white p-8 border-4 border-black transform rotate-1 shadow-lg">
//        <h2 className="text-3xl font-bold mb-6 text-center">Send me a message!</h2>
//        <form onSubmit={handleSubmit} className="space-y-6">
//          <div className="relative">
//            <input
//              type="text"
//              name="name"
//              value={formData.name}
//              onChange={handleChange}
//              className="w-full border-4 border-black p-3 bg-yellow-100 focus:bg-yellow-50 focus:border-orange-500  transition-colors outline-none text-lg"
//              placeholder="Your Name"
//              required
//            />
//            <div className="absolute -bottom-2 -right-2 w-full h-full border-4 border-black bg-yellow-300 -z-10"></div>
//          </div>
         
//          <div className="relative">
//            <input
//              type="email"
//              name="email"
//              value={formData.email}
//              onChange={handleChange}
//              className="w-full border-4 border-black p-3 bg-pink-100 focus:bg-pink-50 transition-colors outline-none text-lg"
//              placeholder="Your Email"
//              required
//            />
//            <div className="absolute -bottom-2 -right-2 w-full h-full border-4 border-black bg-pink-300 -z-10"></div>
//          </div>
         
//          <div className="relative">
//            <textarea
//              name="message"
//              value={formData.message}
//              onChange={handleChange}
//              rows={4}
//              className="w-full border-4 border-black p-3 bg-blue-100 focus:bg-blue-50 transition-colors outline-none text-lg"
//              placeholder="Your Message"
//              required
//            ></textarea>
//            <div className="absolute -bottom-2 -right-2 w-full h-full border-4 border-black bg-blue-300 -z-10"></div>
//          </div>
         
//          <button
//            type="submit"
//            className="w-full bg-green-400 border-4 border-black p-4 font-bold text-xl hover:bg-green-500 transition-colors flex items-center justify-center gap-2 transform hover:-translate-y-1 hover:shadow-lg duration-200"
//          >
//            Send Message
//            <Send size={24} />
//          </button>
//        </form>
//      </div>
//    </div>
//   )
// }


"use client"
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the form data to your server
  }

  return (
    <div className="mt-16 mb-16 text-gray-100  p-8 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto bg-gray-800 p-8 border-4 border-purple-500 transform rotate-1 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">Send me a message!</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-4 border-purple-500 p-3 bg-gray-700 focus:bg-gray-600 focus:border-purple-400 transition-colors outline-none text-lg"
              placeholder="Your Name"
              required
            />
            <div className="absolute -bottom-2 -right-2 w-full h-full border-4 border-purple-500 bg-purple-900 -z-10"></div>
          </div>
          
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-4 border-teal-500 p-3 bg-gray-700 focus:bg-gray-600 transition-colors outline-none text-lg"
              placeholder="Your Email"
              required
            />
            <div className="absolute -bottom-2 -right-2 w-full h-full border-4 border-teal-500 bg-teal-900 -z-10"></div>
          </div>
          
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border-4 border-blue-500 p-3 bg-gray-700 focus:bg-gray-600 transition-colors outline-none text-lg"
              placeholder="Your Message"
              required
            ></textarea>
            <div className="absolute -bottom-2 -right-2 w-full h-full border-4 border-blue-500 bg-blue-900 -z-10"></div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-700 border-4 border-green-500 p-4 font-bold text-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2 transform hover:-translate-y-1 hover:shadow-lg duration-200"
          >
            Send Message
            <Send size={24} />
          </button>
        </form>
      </div>
    </div>
  )
}
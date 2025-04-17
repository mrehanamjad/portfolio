// "use client";
// import { PanelsTopLeft, Phone, User, Wrench } from "lucide-react";
// import Link from "next/link";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navItems = [
//     {
//       name: "About",
//       href: "/",
//       icon: User,
//     },
//     {
//       name: "Skills",
//       href: "#skills",
//       icon: Wrench,
//     },
//     {
//       name: "Projects",
//       href: "#projects",
//       icon: PanelsTopLeft,
//     },
//     {
//       name: "/Contact",
//       href: "/contact",
//       icon: Phone,
//     },
//   ];

//   return (
//     <div className="fixed  max-w-[35rem] w-full my-4 mx-auto z-50 -translate-x-1/2 left-1/2">
//       {/* Navbar */}
//       <nav className="bg-gray-900 z-50 text-white p-4 rounded-full">
//         <div className="container mx-auto flex justify-between items-center px-2">
//            {/* Logo */}
//            <div className="flex items-center">
//             <Link href={"/"}>
//               <motion.span 
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-2xl font-bold"
//               >
//                 M.Rehan Amjad
//               </motion.span>
//             </Link>
//           </div>

//           {/* Hamburger Menu */}
//           <button
//             onClick={toggleMenu}
//             className="p-3 hover:bg-gray-800 rounded-3xl transition-colors"
//           >
//             <div className="w-6 h-4 flex flex-col justify-between">
//               <span
//                 className={`w-full h-0.5 bg-white transition-transform ${
//                   isMenuOpen ? "rotate-45 translate-y-1.5" : ""
//                 }`}
//               ></span>
//               <span
//                 className={`w-full h-0.5 bg-white transition-opacity ${
//                   isMenuOpen ? "opacity-0" : ""
//                 }`}
//               ></span>
//               <span
//                 className={`w-full h-0.5 bg-white transition-transform ${
//                   isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
//                 }`}
//               ></span>
//             </div>
//           </button>
//         </div>
//       </nav>

//       {/* Cards Menu */}
//       <div
//         className={`absolute w-full max-w-[35rem] z-50 mx-auto left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-md shadow-xl rounded-3xl mt-4 p-6 transition-all duration-300 ${
//           isMenuOpen
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 -translate-y-4 pointer-events-none"
//         }`}
//       >
//         <div className="grid grid-cols-2 gap-4 mb-4 z-50">
//           {navItems.map((item) => (
//             <Link href={item.href} key={item.name}>
//               <div className={`bg-gradient-to-r from-blue-500 to-purple-500 p-6 z-50 rounded-2xl flex items-center justify-between hover:scale-105 duration-300 ${
//                 isMenuOpen
//             ? "opacity-100 translate-y-0 scale-1 duration-500"
//             : "opacity-0 -translate-y-4 scale-50 pointer-events-none"
//                 }`}>
//                 <span className="text-white text-lg md:text-xl font-semibold">
//                   {item.name}
//                 </span>
//                 <item.icon size={40} />
//               </div>
//              </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




"use client";
import { PanelsTopLeft, Phone, User, Wrench } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: "About",
      href: "/",
      icon: User,
      color: "from-purple-500 to-blue-500"
    },
    {
      name: "Skills",
      href: "#skills",
      icon: Wrench,
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Projects",
      href: "#projects",
      icon: PanelsTopLeft,
      color: "from-purple-600 to-blue-600"
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Phone,
      color: "from-blue-600 to-purple-600"
    },
  ];

  return (
    <div className="fixed  max-w-[35rem] w-full my-4 mx-auto z-50 -translate-x-1/2 left-1/2 px-4">
      {/* Navbar */}
      <motion.nav 
        className={`${
          scrolled ? "bg-gray-900/90 backdrop-blur-lg" : "bg-gray-900"
        } z-50 text-white p-4 rounded-full shadow-lg border border-gray-800 transition-all duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto flex justify-between items-center px-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={"/"}>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-2xl font-bold"
              >
                M.Rehan Amjad
              </motion.span>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <motion.button
            onClick={toggleMenu}
            className="p-3 hover:bg-gray-800 rounded-3xl transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                animate={{ 
                  rotate: isMenuOpen ? 45 : 0,
                  translateY: isMenuOpen ? 8 : 0
                }}
                transition={{ duration: 0.3 }}
              ></motion.span>
              <motion.span
                className="w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                animate={{ 
                  opacity: isMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              ></motion.span>
              <motion.span
                className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                animate={{ 
                  rotate: isMenuOpen ? -45 : 0,
                  translateY: isMenuOpen ? -8 : 0
                }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Cards Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute w-full max-w-[35rem] z-40 mx-auto left-0 -translate-x-1/2 bg-gray-900/95 backdrop-blur-md rounded-3xl mt-4 p-6 border border-gray-800 shadow-xl"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            // exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 mb-4 z-50">
              {navItems.map((item, index) => (
                <Link href={item.href} key={item.name} onClick={() => setIsMenuOpen(false)}>
                  <motion.div 
                    // className="bg-gradient-to-r p-0.5 rounded-2xl shadow-lg overflow-hidden"
                    style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`bg-gradient-to-r ${item.color} p-0.5 rounded-2xl overflow-hidden shadow-lg`}
                  >
                    <div className="bg-gray-900 p-5 rounded-xl flex items-center justify-between">
                      <span className="text-white text-lg md:text-xl font-semibold">
                        {item.name} 
                      </span>
                      <item.icon size={32} className="text-gray-300" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
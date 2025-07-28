import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-white">
        <h1 className="text-xl md:text-2xl font-bold text-accent tracking-widest">
          Musaddiqie.dev 🚀
        </h1>

        <div className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item, i) => (
            <ScrollLink
              key={i}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              activeClass="text-accent underline underline-offset-4"
              className="cursor-pointer hover:text-accent transition"
            >
              {item.label}
            </ScrollLink>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a]/95 py-4 px-6 text-center text-white space-y-4">
          {navItems.map((item, i) => (
            <ScrollLink
              key={i}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
              activeClass="text-accent"
              className="block text-lg hover:text-accent transition cursor-pointer"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;

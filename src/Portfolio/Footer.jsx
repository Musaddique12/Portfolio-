import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-light py-8 px-6 md:px-20 border-t border-accent/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left - Developer Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-light/70">
            © {new Date().getFullYear()} Designed & Developed by{" "}
            <span className="text-white font-semibold">Musaddiqie Momin</span>
          </p>
        </motion.div>

        {/* Middle - Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-5 text-xl"
        >
          <a
            href="https://github.com/Musaddique12"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/musaddique-momin-a4900a270/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* Right - Scroll to Top */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-accent transition flex items-center gap-2 text-sm"
          >
            <FaArrowUp /> Back to Top
          </ScrollLink>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

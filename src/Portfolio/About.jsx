import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import CV from "./Musaddique_CV.pdf";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-[#0f172a] text-light">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-accent"
        >
          About Me 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-light/80 leading-7 text-sm md:text-base"
        >
          I'm <span className="text-white font-semibold">Musaddiqie Momin</span>, a passionate final-year BCA student
          focused on building dynamic, responsive, and user-friendly web applications.  
          I specialize in modern frontend tools like React, Firebase, Tailwind, and Web3,  
          and I'm always learning to push my creative limits. <br /><br />
          I love building interfaces that not only work — but *feel* great to interact with.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 text-sm md:text-base">
          <div>
            <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
            <p>BCA (Final Year)</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📍 Location</h3>
            <p>India</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
            <p>8600379880</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
            <p>musaddique.webdev@gmail.com</p>
          </div>
        </div>

        {/* Uncomment below when .NET learning complete */}
        {/*
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">🧰 Skills in Progress</h3>
          <p>.NET, MVC (Currently learning and building projects)</p>
        </div>
        */}

        <div className="mt-8">
          <a
            href={CV}
            className="inline-flex items-center gap-2 bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition"
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

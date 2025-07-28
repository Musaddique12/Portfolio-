import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiDotnet, SiVite } from "react-icons/si";

const skills = [
  {
    title: "Frontend Development",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    ],
  },
  {
    title: "Backend / Database",
    items: [
      { name: "Firebase", icon: <SiFirebase className="text-orange-300" /> },
      // .NET shown as learning, commented by default
      // { name: ".NET (Learning)", icon: <SiDotnet className="text-blue-500" /> },
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-accent text-center"
        >
          🛠️ My Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-md shadow-lg"
            >
              <h3 className="text-xl font-semibold text-accent mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.items.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-md text-sm hover:scale-105 transition"
                  >
                    {skill.icon}
                    <span className="text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔧 Uncomment this when you're done with .NET */}
        {/* 
        <div className="mt-10 text-center">
          <p className="text-white/70 text-sm">
            📘 I'm currently learning <span className="text-blue-400 font-medium">.NET</span> and MVC!
          </p>
        </div>
        */}
      </div>
    </section>
  );
};

export default Skills;

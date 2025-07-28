import React from "react";
import { motion } from "framer-motion";
import treeData from "./treeData";
import TreeCard from "./TreeCard";

const SkillTree = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-accent text-center"
        >
          🚀 Project Evolution Tree
        </motion.h2>

        {/* Glowing timeline effect */}
        <div className="relative pl-6 space-y-12 before:absolute before:top-0 before:bottom-0 before:left-[6px] before:w-1 before:bg-gradient-to-b before:from-cyan-400 before:to-blue-500">
          {treeData.map((item, index) => (
            <TreeCard
              key={index}
              title={item.title}
              description={item.description}
              tools={item.tools}
              icon={item.icon}
              live={item.live}
              github={item.github}
              delay={index * 0.2}
              hidden={item.hidden}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillTree;

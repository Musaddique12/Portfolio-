import React from "react";
import { motion } from "framer-motion";

const TreeCard = ({ title, description, tools, icon, live, github, delay, hidden }) => {
  if (hidden) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative ml-4"
    >
      <span className="absolute -left-6 top-3 w-4 h-4 bg-accent rounded-full shadow-md animate-pulse" />
      
      <div className="bg-white/5 backdrop-blur-md rounded-lg shadow-lg p-5 border border-white/10 hover:scale-[1.02] transition">
        <div className="flex items-center gap-3 mb-2">
          {icon}
          <h3 className="text-lg md:text-xl font-bold">{title}</h3>
        </div>
        <p className="text-sm text-white/80">{description}</p>

        {tools && (
          <div className="flex flex-wrap gap-2 mt-3 text-xs text-accent">
            {tools.map((tool, i) => (
              <span key={i} className="bg-accent/10 px-2 py-1 rounded-md border border-accent/30">
                {tool}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4 mt-4">
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline text-sm">
              🌐 Live
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="text-gray-300 hover:underline text-sm">
              🐱 GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TreeCard;

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaMagic, FaRocket, FaTabletAlt } from "react-icons/fa";
import { SiFirebase, SiDotnet, SiWeb3Dotjs } from "react-icons/si";

const services = [
    {
        title: "Frontend Development",
        icon: <FaCode className="text-2xl text-accent" />,
        desc: "Building responsive and interactive web UIs using React, Tailwind CSS, and modern libraries.",
    },
    {
        title: "Realtime & Auth Apps",
        icon: <SiFirebase className="text-2xl text-yellow-400" />,
        desc: "Projects with Firebase for auth, Firestore database, and live updates.",
    },
    {
        title: "Web3 & Crypto DApps",
        icon: <SiWeb3Dotjs className="text-2xl text-green-400" />,
        desc: "Experience in building crypto-based features like token swap, wallet creation, and referrals.",
    },
    {
        title: "UI/UX Animation & Design",
        icon: <FaMagic className="text-2xl text-pink-400" />,
        desc: "Eye-catching animations and smooth UI experiences using Framer Motion and CSS transitions.",
    },
    {
        title: "Responsive Design & Cross-Device UI",
        icon: <FaTabletAlt className="text-2xl text-violet-400" />, // Represents multi-device layout perfectly
        desc: "Created pixel-perfect layouts that adapt seamlessly across mobile, tablet, and desktop devices.",
    },
    //   {
    //     title: ".NET Developer (Learning)",
    //     icon: <SiDotnet className="text-2xl text-blue-400" />,
    //     desc: "// Learning backend and full-stack development with .NET — will uncomment soon 😄",
    //   },
];

const Services = () => {
    return (
        <section
            id="services"
            className="py-20 px-6 md:px-20 bg-[#1e293b] text-light"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-accent"
                >
                    ⚙️ Services & Expertise
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="bg-[#0f172a] p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-light/10"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {service.icon}
                                <h3 className="text-lg font-semibold">{service.title}</h3>
                            </div>
                            <p className="text-sm text-light/80 leading-6">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

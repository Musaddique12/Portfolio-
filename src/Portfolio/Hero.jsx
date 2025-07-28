import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Text3D, OrbitControls } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaDownload, FaReact, FaFire, FaGlobe } from "react-icons/fa";
import profile from "./profile.jpg"

const FloatingText = () => (
  <Float floatIntensity={2} speed={2} rotationIntensity={1}>
    <Text3D font="/fonts/helvetiker_regular.typeface.json" size={1} height={0.3}>
      MominDev
      <meshStandardMaterial color="#38bdf8" />
    </Text3D>
  </Float>
);

const Hero = () => {
  const particlesInit = async (engine) => await loadFull(engine);

  return (
    <section className="relative h-screen w-full bg-[#0f172a] text-white" id="hero">
      {/* Background particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "#0f172a" },
          particles: {
            number: { value: 50 },
            size: { value: 2 },
            move: { enable: true, speed: 0.5 },
            color: { value: "#ffffff" },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-6 gap-8">
        {/* Profile photo */}
        <img
          src={profile}
          alt="Musaddiqie Momin"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-cyan-400 shadow-lg"
        />

        {/* Text and info */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Musaddiqie Momin</h1>

          <TypeAnimation
            sequence={[
              "React Developer ⚛️",
              2000,
              "Web3 & Firebase Explorer 🚀",
              2000,
              "Aspiring Full Stack .NET Dev 🧠",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            className="text-cyan-400 text-xl md:text-2xl font-medium"
          />

          <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-300">
            I’m a passionate React developer who has built real-world apps —
            from crypto tools to full-featured Firebase systems. Currently expanding into full-stack development with ASP.NET MVC. Always learning. Always building.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/Momin_CV.pdf"
              download
              className="bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-3 rounded-md font-bold inline-flex items-center gap-2 transition"
            >
              <FaDownload /> Download CV
            </a>

            <a href="#projects" className="text-cyan-300 hover:underline font-medium">
              Scroll to explore ↓
            </a>
          </div>
        </div>
      </div>

      {/* 3D Canvas with floating text */}
      <div className="absolute right-4 bottom-4 md:right-10 md:bottom-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <FloatingText />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;

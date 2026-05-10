import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const projects = [
    {
      title: "DevStreak",
      desc: "Gamified coding streak tracker with badges, analytics, and productivity features.",
    },
    {
      title: "BhookIt",
      desc: "Food ordering startup application with Firebase backend and authentication.",
    },
    {
      title: "AI/ML Research Interface",
      desc: "Research workflow platform for machine learning driven materials science systems.",
    },
    {
      title: "Gesture Game Controller",
      desc: "Computer vision based hand gesture gaming controller using AI interaction.",
    },
  ];

  if (loading) {
    return (
      <div className="bg-black h-screen flex items-center justify-center text-white">
        <motion.h1
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-black text-cyan-400"
        >
          Manishika.
        </motion.h1>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">

      {/* GLOW CURSOR */}
      <div
        className="fixed w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none z-0"
        style={{
          left: cursorPosition.x - 150,
          top: cursorPosition.y - 150,
        }}
      />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-black text-cyan-400">
            Manishika.
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300">

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

        </div>

        {mobileMenu && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-gray-300">

            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

          </div>
        )}

      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative z-10">

        <img
          src="/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-2xl mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 uppercase tracking-[6px] mb-4"
        >
          AI/ML Engineer • Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-6"
        >
          Manishika
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Gupta
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-2xl text-lg leading-8 mb-10"
        >
          Building intelligent applications, startup products,
          and interactive digital experiences.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-5">

          <a
            href="#projects"
            className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-400 hover:text-black transition"
          >
            Download Resume
          </a>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6 max-w-6xl mx-auto relative z-10"
      >

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

          <p className="text-gray-300 leading-8 text-lg">
            I am a second-year BTech Computer Science student specializing in
            AI & ML. Passionate about building scalable products,
            intelligent systems, and modern user experiences.
          </p>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-24 px-6 relative z-10"
      >

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Projects
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
            >

              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {project.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 relative z-10 text-center"
      >

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-8"
        >
          Contact Me
        </motion.h2>

        <p className="text-gray-400 text-lg mb-12">
          Let's connect and build something amazing.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="mailto:gmanishika@gmail.com"
            className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="tel:+916386621999"
            className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-400 hover:text-black transition"
          >
            Call Me
          </a>

          <a
            href="https://github.com/Manishika09"
            target="_blank"
            className="border border-white/20 px-8 py-4 rounded-2xl hover:border-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/manishika-gupta-a715812a4"
            target="_blank"
            className="border border-white/20 px-8 py-4 rounded-2xl hover:border-cyan-400 transition"
          >
            LinkedIn
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 relative z-10">

        © 2026 Manishika Gupta. Built with React & Tailwind CSS.

      </footer>

    </div>
  );
}
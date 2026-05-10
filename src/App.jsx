export default function App() {
  const projects = [
    {
      title: "DevStreak",
      desc: "Gamified coding streak tracker with badges and analytics.",
    },
    {
      title: "BhookIt",
      desc: "Food ordering startup application with Firebase backend.",
    },
    {
      title: "AI/ML Research Interface",
      desc: "Research workflow platform for ML-driven materials science.",
    },
    {
      title: "Gesture Game Controller",
      desc: "AI hand gesture gaming controller using computer vision.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <img
  src="/profile.jpg"
  alt="profile"
  className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-lg mb-8"
/>

        <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
          AI/ML Engineer • Full Stack Developer
        </p>

        <h1 className="text-6xl md:text-8xl font-black mb-6">
          Manishika
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Gupta
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl text-lg leading-8 mb-10">
          Building intelligent applications, startup products,
          and interactive digital experiences.
        </p>

        <div className="flex gap-5 flex-wrap justify-center">
          <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
            View Projects
          </button>

          <a
  href="/resume.pdf"
  download
  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-400 hover:text-black transition"
>
  Download Resume
</a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

          <p className="text-gray-300 leading-8 text-lg">
            I am a second-year BTech CSE student specializing in AI & ML.
            Passionate about building scalable products, intelligent systems,
            and modern user experiences.
          </p>

        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-24 px-6 bg-white/5">

        <h2 className="text-5xl font-bold mb-16 text-center">
          Skills
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-black/40 border border-white/10 rounded-3xl p-8">
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">
              Languages
            </h3>

            <div className="space-y-3 text-gray-300">
              <p>JavaScript</p>
              <p>Python</p>
              <p>Java</p>
              <p>SQL</p>
            </div>
          </div>

          <div className="bg-black/40 border border-white/10 rounded-3xl p-8">
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">
              Frontend
            </h3>

            <div className="space-y-3 text-gray-300">
              <p>React</p>
              <p>Tailwind CSS</p>
              <p>Firebase</p>
            </div>
          </div>

          <div className="bg-black/40 border border-white/10 rounded-3xl p-8">
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">
              Backend
            </h3>

            <div className="space-y-3 text-gray-300">
              <p>Node.js</p>
              <p>Express</p>
              <p>REST APIs</p>
            </div>
          </div>

          <div className="bg-black/40 border border-white/10 rounded-3xl p-8">
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">
              AI/ML
            </h3>

            <div className="space-y-3 text-gray-300">
              <p>OpenCV</p>
              <p>NumPy</p>
              <p>Pandas</p>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 px-6">

        <h2 className="text-5xl font-bold mb-16 text-center">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
            >

              <div className="h-56 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-3xl font-bold">
                {project.title}
              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.desc}
                </p>

                <div className="flex gap-4">
                  <button className="bg-white text-black px-5 py-3 rounded-2xl font-bold hover:scale-105 transition">
                    GitHub
                  </button>

                  <button className="border border-cyan-400 text-cyan-400 px-5 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black transition">
                    Live Demo
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-24 px-6 bg-white/5">

        <h2 className="text-5xl font-bold mb-16 text-center">
          Experience
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">

          <div className="bg-black/40 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              AI/ML Research Interface Development
            </h3>

            <p className="text-gray-400 leading-7">
              Developed GUI-based systems for machine learning research
              workflows focused on materials science applications under
              IIT Kanpur guidance.
            </p>

          </div>

          <div className="bg-black/40 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Product & Startup Development
            </h3>

            <p className="text-gray-400 leading-7">
              Designed and developed startup-focused applications with
              authentication systems, dashboards, analytics,
              and interactive user experiences.
            </p>

          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-5xl font-bold mb-8">
          Contact
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Let's build something amazing together.
        </p>

        <div className="flex gap-5 justify-center flex-wrap">

          <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
            GitHub
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-2xl hover:border-cyan-400 transition">
            LinkedIn
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-2xl hover:border-cyan-400 transition">
            Email
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">

        © 2026 Manishika Gupta. Built with React & Tailwind CSS.

      </footer>

    </div>
  );
}
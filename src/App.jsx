import { useState } from "react"

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Research", id: "research" },
  { name: "Achievements", id: "achievements" },
  { name: "Contact", id: "contact" },
]

const projects = [
  {
    name: "AI Sign Language Converter",
    desc: "Real-time computer vision system with low-latency inference.",
    details:
      "Built a real-time gesture recognition system using OpenCV with an optimized pipeline for sub-second inference. Designed efficient data flow for continuous video input and classification.",
    tech: ["Python", "OpenCV", "Computer Vision"],
    github: "https://github.com/Anmxll/Sign-Language-Converter",
  },
  {
    name: "Mindwell AI Platform",
    desc: "Scalable full-stack application with NLP-based chatbot.",
    details:
      "Developed a full-stack platform integrating NLP-based conversational AI. Designed modular backend logic and API-driven communication ensuring scalability and performance.",
    tech: ["Python", "NLP", "REST APIs"],
    github: "https://github.com/Anmxll/MindWell",
  },
  {
    name: "Student Management System",
    desc: "Backend-driven CRUD system with optimized database queries.",
    details:
      "Designed relational schema and implemented optimized SQL queries to improve performance and ensure data integrity.",
    tech: ["Java", "MySQL", "SQL"],
    // no github
  },
]

const achievements = [
  "Solved 350+ DSA problems (LeetCode)",
  "2★ CodeChef rating (~1400)",
  "Top 10 finishes in 7+ hackathons",
  "Top 100 – Microsoft Hackathon",
  "Rank 182 / 3000 – GeeksforGeeks Contest",
]

export default function App() {
  const [active, setActive] = useState(null)

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-gray-200 relative">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0B0B0F]/70 border-b border-[#1F1F2B]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-sm font-semibold text-purple-400">
          Anmxll
          </h1>

          <div className="flex gap-6 text-sm text-gray-400">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="hover:text-purple-400 transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#ffffff0f_1px,transparent_1px),linear-gradient(to_right,#ffffff0f_1px,transparent_1px)] [background-size:40px_40px]"></div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 space-y-24">

        {/* HERO */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Anmol Malhotra
          </h1>
          <p className="text-gray-400">
            Full Stack Developer | Scalable Systems | AI/ML Engineer
          </p>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-[#12121A] p-8 rounded-xl border border-[#1F1F2B]">
          <h2 className="text-xl font-semibold text-purple-400">About</h2>
          <p className="mt-3 text-gray-400">
            Full-stack developer with strong foundations in Data Structures, system design, and AI-driven applications.
            Experienced in building scalable backend systems, designing REST APIs, and developing real-time applications.
            Focused on performance, low-latency systems, and production-ready code.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Python", "Java", "C++", "JavaScript",
              "React", "Node.js", "OpenCV", "TensorFlow",
              "MongoDB", "MySQL", "REST APIs"
            ].map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-sm rounded-full bg-[#1A1A24] border border-[#2A2A38] hover:border-purple-400 transition"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* BACKEND FOCUS */}
        <section>
          <h2 className="text-xl font-semibold text-purple-400 mb-4">
            Backend & Systems Focus
          </h2>

          <ul className="space-y-2 text-gray-400">
            <li>• REST API design and scalable architectures</li>
            <li>• Low-latency and real-time processing systems</li>
            <li>• SQL query optimization and database design</li>
            <li>• Strong problem-solving with 350+ DSA problems</li>
          </ul>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-2xl font-semibold text-center text-purple-400 mb-10">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.name}
                onClick={() => setActive(p)}
                className="cursor-pointer bg-[#12121A] p-6 rounded-xl border border-[#1F1F2B] hover:border-purple-400 hover:-translate-y-1 transition duration-300"
              >
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm mt-2 text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">
            Research & Exploration
          </h2>

          <div className="space-y-4 text-gray-400">

            <div className="bg-[#12121A] p-6 rounded-xl border border-[#1F1F2B]">
              <h3 className="font-semibold text-gray-200">
                Real-Time Gesture Recognition Systems
              </h3>
              <p className="text-sm mt-2">
                Explored computer vision pipelines for real-time gesture classification using OpenCV.
                Focused on optimizing frame processing, improving inference speed, and designing efficient
                data flow for continuous input streams.
              </p>
            </div>

            <div className="bg-[#12121A] p-6 rounded-xl border border-[#1F1F2B]">
              <h3 className="font-semibold text-gray-200">
                NLP-Based Conversational Systems
              </h3>
              <p className="text-sm mt-2">
                Studied and implemented NLP-driven chatbot systems focusing on response generation,
                user interaction flow, and integrating AI models into scalable application architectures.
              </p>
            </div>

          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">
            Achievements
          </h2>

          <ul className="space-y-2 text-gray-400">
            {achievements.map((a) => (
              <li key={a}>• {a}</li>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="text-center">
          <h2 className="text-xl font-semibold text-purple-400">
            Contact
          </h2>

          <div className="mt-4 flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:manmol844@gmail.com"
              className="bg-purple-500 px-5 py-2 rounded-full text-black hover:scale-105 transition"
            >
              Email
            </a>

            <a
              href="https://github.com/Anmxll"
              className="border px-5 py-2 rounded-full hover:border-purple-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/anmol-malhotra-01023b286"
              className="border px-5 py-2 rounded-full hover:border-purple-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </section>

      </div>

      {/* MODAL */}
      {active && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#12121A] p-8 rounded-xl w-[90%] md:w-[500px] border border-[#2A2A38]">

            <h3 className="text-xl font-bold text-purple-400">
              {active.name}
            </h3>

            <p className="mt-3 text-gray-400 leading-relaxed">
              {active.details}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {active.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-[#1A1A24] px-2 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* GitHub Button */}
            <div className="mt-6 flex gap-3 flex-wrap">

              {active.github ? (
                <a
                  href={active.github}
                  target="_blank"
                  className="bg-purple-500 px-4 py-2 rounded-full text-black hover:scale-105 transition"
                >
                  View GitHub →
                </a>
              ) : (
                <span className="text-xs text-gray-500 italic">
                  GitHub repo not available
                </span>
              )}

              <button
                onClick={() => setActive(null)}
                className="border px-4 py-2 rounded-full hover:border-purple-400 transition"
              >
                Close
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  )
}
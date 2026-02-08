"use client"

import { motion } from "framer-motion"
import { Code, Github, ExternalLink } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export function ProjectsSection() {
  const { isDark } = useTheme()

  const projects = [
    {
      title: "Employee Management System",
      description:
        "Designed and implemented an Employee Management System for streamlined HR operations and data management.",
      github: "https://github.com/Tharun01012005/Employee-Management",
      demo: "https://tharun-employee-management.netlify.app",
      tech: ["HTML", "CSS", "JavaScript", "Database"],
    },
    {
      title: "Landing Page for OLA",
      description:
        "Created a responsive and user-centric landing page for Ola, enhancing engagement and boosting conversions.",
      github: "https://github.com/Tharun01012005/Landing-Page",
      demo: "https://tharun-ola-landing.netlify.app",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
    {
      title: "Tic-Tac-Toe Game",
      description:
        "Developed a Tic-Tac-Toe game with optimized logic and interactive UI, enhancing problem-solving and front-end development skills.",
      github: "https://github.com/Tharun01012005/TIC-TAC-TOE",
      demo: "https://tharun-tictactoe-game.netlify.app",
      tech: ["JavaScript", "HTML", "CSS", "Game Logic"],
    },
  ]

  return (
    <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-12 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            <span className={isDark ? "text-red-400" : "text-red-600"}>Projects</span>
          </h2>
          <div className={`w-24 h-1 mx-auto ${isDark ? "bg-red-400" : "bg-red-600"}`}></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 border-gray-700 hover:border-red-400"
                  : "bg-white border-gray-200 hover:border-red-600"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Code className={isDark ? "text-red-400" : "text-red-600"} size={24} />
                <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{project.title}</h3>
              </div>

              <p className={`mb-4 text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDark ? "bg-red-500/20 text-red-300" : "bg-red-500/20 text-red-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 transition-colors duration-300 text-sm ${
                    isDark ? "text-red-400 hover:text-white" : "text-red-600 hover:text-gray-900"
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <Github size={16} />
                  <span>View on GitHub</span>
                  <ExternalLink size={12} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

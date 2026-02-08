"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Code, Zap, Database, BookOpen, GitBranch, Settings } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export function AboutSection() {
  const { isDark } = useTheme()

  const skillsWithIcons = [
    { name: "HTML/CSS", icon: Code },
    { name: "JavaScript", icon: Zap },
    { name: "MongoDB", icon: Database },
    { name: "Python", icon: BookOpen },
    { name: "Git & GitHub", icon: GitBranch },
    { name: "MULTISIM Software", icon: Settings },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            About <span className={isDark ? "text-red-400" : "text-red-600"}>Me</span>
          </h2>
          <div className={`w-24 h-1 mx-auto ${isDark ? "bg-red-400" : "bg-red-600"}`}></div>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>Profile</h3>
            <p className={`text-lg leading-relaxed mb-8 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              I am a motivated and enthusiastic fresher looking to start my career in a reputed company. I am eager to
              learn, take on new challenges, and contribute to the growth of the organization while developing my own
              skills and knowledge.
            </p>

            <div className="space-y-4">
              <motion.a
                href="tel:+919952846406"
                className={`flex items-center space-x-3 cursor-pointer ${isDark ? "text-gray-300" : "text-gray-700"}`}
                whileHover={{ x: 10 }}
              >
                <Phone className={isDark ? "text-red-400" : "text-red-600"} size={20} />
                <span>9952846406</span>
              </motion.a>
              <motion.a
                href="mailto:tharun01012005@gmail.com"
                className={`flex items-center space-x-3 cursor-pointer ${isDark ? "text-gray-300" : "text-gray-700"}`}
                whileHover={{ x: 10 }}
              >
                <Mail className={isDark ? "text-red-400" : "text-red-600"} size={20} />
                <span>tharun01012005@gmail.com</span>
              </motion.a>
              <motion.div
                className={`flex items-center space-x-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                whileHover={{ x: 10 }}
              >
                <MapPin className={isDark ? "text-red-400" : "text-red-600"} size={20} />
                <span>Bhavani, Tamil Nadu, India</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div id="skills">
              <h3 className={`text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>Skills & Interests</h3>

            <div className="mb-8">
              <h4 className={`text-xl font-semibold mb-4 ${isDark ? "text-red-400" : "text-red-600"}`}>
                Technical Skills
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {skillsWithIcons.map((skill) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      className={`border-2 rounded-lg px-4 py-4 text-center transition-all duration-300 flex flex-col items-center gap-2 ${
                        isDark
                          ? "border-red-400/30 text-red-300 hover:border-red-400 hover:bg-red-400/10"
                          : "border-red-400/30 text-red-700 hover:border-red-400 hover:bg-red-400/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <IconComponent size={24} />
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div>
              <h4 className={`text-xl font-semibold mb-4 ${isDark ? "text-red-400" : "text-red-600"}`}>
                Areas of Interest
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Web Development", "UI/UX", "Digital Marketing"].map((interest) => (
                  <motion.span
                    key={interest}
                    className={`border-2 rounded-full px-6 py-2 ${
                      isDark ? "border-red-400/30 text-red-300" : "border-red-400/30 text-red-700"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

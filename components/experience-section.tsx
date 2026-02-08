"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export function ExperienceSection() {
  const { isDark } = useTheme()

  const presentations = [
    {
      title: "RED TACTON",
      venue: "Kongu Engineering College",
      description: "Presented research on RED TACTON technology and its applications in human area networking",
    },
    {
      title: "Hybrid Electric Two-Wheeler",
      venue: "Coimbatore Institute of Technology",
      description:
        "Presented innovative concepts for hybrid electric vehicle technology and sustainable transportation",
    },
    {
      title: "Hybrid Electric Two-Wheeler",
      venue: "Kongu Engineering College",
      description: "Follow-up presentation on hybrid electric vehicle advancements and implementation strategies",
    },
  ]

  const openCertificate = () => {
    window.open("https://drive.google.com/file/d/14bp4lNc3SagtCsMqwDnSiKTOxXUyHI_o/view?usp=sharing", "_blank")
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            <span className={isDark ? "text-red-400" : "text-red-600"}>Experience</span>
          </h2>
          <div className={`w-24 h-1 mx-auto ${isDark ? "bg-red-400" : "bg-red-600"}`}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Paper Presentations Card */}
          <motion.div
            className={`p-8 rounded-xl border-2 transition-all duration-300 ${
              isDark
                ? "bg-gray-800 border-gray-700 hover:border-red-400"
                : "bg-white border-gray-200 hover:border-red-600"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Award className={isDark ? "text-red-400" : "text-red-600"} size={24} />
              <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Paper Presentations</h3>
            </div>

            <div className="space-y-6">
              {presentations.map((presentation, index) => (
                <motion.div
                  key={index}
                  className={`border-l-4 pl-6 py-3 ${isDark ? "border-red-400" : "border-red-600"}`}
                  whileHover={{ x: 10 }}
                >
                  <h4 className={`text-xl font-semibold ${isDark ? "text-red-400" : "text-red-600"}`}>
                    {presentation.title}
                  </h4>
                  <p className={`mb-2 font-medium ${isDark ? "text-red-300" : "text-red-700"}`}>{presentation.venue}</p>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    {presentation.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certification Card */}
          <motion.div
            className={`p-8 rounded-xl border-2 transition-all duration-300 ${
              isDark
                ? "bg-gray-800 border-gray-700 hover:border-red-400"
                : "bg-white border-gray-200 hover:border-red-600"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Award className={isDark ? "text-red-400" : "text-red-600"} size={24} />
              <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Certification</h3>
            </div>

            <motion.div
              className={`border-l-4 pl-6 py-3 mb-6 ${isDark ? "border-red-400" : "border-red-600"}`}
              whileHover={{ x: 10 }}
            >
              <h4 className={`text-xl font-semibold ${isDark ? "text-red-400" : "text-red-600"}`}>
                MongoDB Associate Developer
              </h4>
              <p className={`text-sm leading-relaxed mt-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Certified in MongoDB database development and management. Demonstrates proficiency in database design,
                query optimization, and modern NoSQL database technologies.
              </p>
            </motion.div>

            {/* View Certification Button */}
            <motion.button
              onClick={openCertificate}
              className={`flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isDark ? "bg-red-600 text-white hover:bg-red-700" : "bg-red-600 text-white hover:bg-red-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              <span>View Certification</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

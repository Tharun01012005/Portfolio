"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export function EducationSection() {
  const { isDark } = useTheme()

  const educationData = [
    {
      degree: "B.Tech Information Technology",
      institution: "Kongu Engineering College - Perundurai",
      period: "2023 - 2026",
      grade: "6.58 CGPA",
      status: "Current",
      description:
        "Currently pursuing Bachelor's degree in Information Technology.",
    },
    {
      degree: "Diploma in ECE",
      institution: "Kongu Polytechnic College - Perundurai",
      period: "2020 - 2023",
      grade: "89%",
      status: "Completed",
      description:
        "Completed Diploma in Electronics and Communication Engineering with excellent academic performance and practical knowledge.",
    },
    {
      degree: "SSLC",
      institution: "Adharsh Vidhyalaya Matric Higher Secondary School - Paruvachi",
      period: "2019 - 2020",
      grade: "72.8%",
      status: "Completed",
      description: "Completed secondary education with strong foundation in mathematics and science subjects.",
    },
  ]

  return (
    <section id="education" className={`py-20 px-4 sm:px-6 lg:px-12 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            <span className={isDark ? "text-red-400" : "text-red-600"}>Education</span>
          </h2>
          <div className={`w-24 h-1 mx-auto ${isDark ? "bg-red-400" : "bg-red-600"}`}></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 hidden sm:block ${
              isDark ? "bg-gradient-to-b from-red-400 to-red-600" : "bg-gradient-to-b from-red-600 to-red-800"
            }`}
          />

          <div className="space-y-8 sm:space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="relative flex items-start space-x-4 sm:space-x-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`relative z-10 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 flex-shrink-0 mt-2 ${
                    isDark ? "bg-red-400 border-red-600" : "bg-red-600 border-red-800"
                  }`}
                  whileHover={{ scale: 1.5 }}
                />

                {/* Card */}
                <motion.div
                  className={`flex-1 border-2 rounded-xl p-6 sm:p-8 transition-all duration-300 ${
                    isDark
                      ? "bg-gray-800 border-gray-700 hover:border-red-400"
                      : "bg-white border-gray-200 hover:border-red-600"
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0">
                      <GraduationCap className={isDark ? "text-red-400" : "text-red-600"} size={20} />
                      <h3
                        className={`text-lg sm:text-xl lg:text-2xl font-bold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {edu.degree}
                      </h3>
                      <span
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold border-2 self-start ${
                          edu.status === "Current"
                            ? isDark
                              ? "bg-green-500/20 text-green-400 border-green-400"
                              : "bg-green-500/20 text-green-600 border-green-600"
                            : isDark
                              ? "bg-blue-500/20 text-blue-400 border-blue-400"
                              : "bg-blue-500/20 text-blue-600 border-blue-600"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <p className={`text-base sm:text-lg ${isDark ? "text-red-300" : "text-red-700"}`}>
                      {edu.institution}
                    </p>
                    <div
                      className={`flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm sm:text-base ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award size={16} />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                    <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

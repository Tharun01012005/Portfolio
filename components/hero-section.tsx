"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Linkedin, Code } from "lucide-react"
import Image from "next/image"
import { useTheme } from "@/contexts/theme-context"
import { TypingAnimation } from "@/components/typing-animation"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { isDark } = useTheme()

  const openResume = () => {
    window.open("https://drive.google.com/file/d/1OOGJ4VN6TF4n2dpXZTWHH2ssW8XleX4D/view?usp=drive_link", "_blank")
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Tharun01012005",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/tharun-m-929108279",
    },
    {
      name: "LeetCode",
      icon: Code,
      url: "https://leetcode.com/u/Tharun_M_01",
    },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.p
              className={`text-lg sm:text-xl mb-4 ${isDark ? "text-red-400" : "text-red-600"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hello!!!
            </motion.p>

            <motion.div
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <TypingAnimation text="I'm Tharun M" className={`${isDark ? "text-white" : "text-gray-900"}`} />
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div
                className={`inline-block border-2 rounded-full px-6 py-3 ${
                  isDark ? "border-red-400 bg-red-400/10" : "border-red-600 bg-red-600/10"
                }`}
              >
                <span
                  className={`font-semibold text-sm tracking-widest uppercase ${
                    isDark ? "text-red-400" : "text-red-600"
                  }`}
                >
                  Web Developer
                </span>
              </div>
            </motion.div>

            <motion.p
              className={`text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              A motivated and enthusiastic developer specializing in modern web technologies and user experience design.
              Passionate about creating innovative solutions that make a difference.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-4 mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                    isDark
                      ? "border-gray-700 bg-gray-800 text-gray-400 hover:border-red-400 hover:text-red-400"
                      : "border-gray-300 bg-white text-gray-600 hover:border-red-600 hover:text-red-600"
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.button
                onClick={openResume}
                className={`flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isDark ? "bg-red-600 text-white hover:bg-red-700" : "bg-red-600 text-white hover:bg-red-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
                <span>View Resume</span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 ${
                  isDark
                    ? "border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                    : "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className={`w-80 h-96 rounded-2xl overflow-hidden border-4 ${
                  isDark ? "border-red-400" : "border-red-600"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Tharun M - Web Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

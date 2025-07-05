"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sun, Moon, Menu, X, User, GraduationCap, Briefcase, FolderOpen, MessageSquare } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const navigationItems = [
    { id: "hero", label: "Home", icon: User },
    { id: "about", label: "About Me", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ]

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className={`text-2xl font-bold ${isDark ? "text-red-400" : "text-red-600"}`}
            whileHover={{ scale: 1.05 }}
          >
            Tharun M
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navigationItems.map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                onClick={() => handleScrollToSection(id)}
                className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  activeSection === id
                    ? isDark
                      ? "text-red-400 bg-red-400/10 border-2 border-red-400"
                      : "text-red-600 bg-red-600/10 border-2 border-red-600"
                    : isDark
                      ? "text-white hover:text-red-400"
                      : "text-gray-700 hover:text-red-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} />
                <span>{label}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile & Desktop Controls */}
          <div className="flex items-center space-x-3">
            <motion.button
              onClick={toggleTheme}
              className={`p-3 rounded-lg transition-all duration-300 border-2 ${
                isDark
                  ? "bg-gray-800 text-yellow-400 border-gray-700 hover:border-red-400"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:border-red-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-3 rounded-lg transition-all duration-300 border-2 ${
                isDark
                  ? "bg-gray-800 text-red-400 border-gray-700 hover:border-red-400"
                  : "bg-gray-100 text-red-600 border-gray-300 hover:border-red-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden ${mobileMenuOpen ? "max-h-96" : "max-h-0"}`}
          initial={false}
          animate={{ height: mobileMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2">
            {navigationItems.map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                onClick={() => handleScrollToSection(id)}
                className={`w-full flex items-center space-x-3 text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? isDark
                      ? "text-red-400 bg-red-400/10 border-2 border-red-400"
                      : "text-red-600 bg-red-600/10 border-2 border-red-600"
                    : isDark
                      ? "text-white hover:text-red-400 hover:bg-gray-800"
                      : "text-gray-700 hover:text-red-600 hover:bg-gray-100"
                }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
                <span>{label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

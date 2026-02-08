"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Menu, X, User, GraduationCap, Briefcase, FolderOpen, MessageSquare, Sparkles } from "lucide-react"
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
    { id: "skills", label: "Skills & Interests", icon: Sparkles },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ]

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (mobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
          isDark ? "bg-gray-900/95 backdrop-blur-sm border-gray-800" : "bg-white/95 backdrop-blur-sm border-gray-200"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className={`text-xl sm:text-2xl font-bold ${isDark ? "text-red-400" : "text-red-600"} cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleScrollToSection("hero")}
            >
              Tharun M
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
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
                        ? "text-white hover:text-red-400 hover:bg-red-400/5"
                        : "text-gray-700 hover:text-red-600 hover:bg-red-600/5"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </motion.button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 sm:p-3 rounded-lg transition-all duration-300 border-2 ${
                  isDark
                    ? "bg-gray-800 text-yellow-400 border-gray-700 hover:border-red-400"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:border-red-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDark ? (
                  <Sun size={16} className="sm:w-[18px] sm:h-[18px]" />
                ) : (
                  <Moon size={16} className="sm:w-[18px] sm:h-[18px]" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 sm:p-3 rounded-lg transition-all duration-300 border-2 mobile-menu-container ${
                  isDark
                    ? "bg-gray-800 text-red-400 border-gray-700 hover:border-red-400"
                    : "bg-gray-100 text-red-600 border-gray-300 hover:border-red-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden mobile-menu-container ${
                isDark ? "bg-gray-900 border-l border-gray-800" : "bg-white border-l border-gray-200"
              }`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Mobile Menu Header */}
              <div
                className={`flex items-center justify-between p-4 sm:p-6 border-b ${
                  isDark ? "border-gray-800" : "border-gray-200"
                }`}
              >
                <h2 className={`text-lg sm:text-xl font-bold ${isDark ? "text-red-400" : "text-red-600"}`}>
                  Navigation
                </h2>
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? "text-gray-400 hover:text-red-400" : "text-gray-600 hover:text-red-600"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Mobile Menu Items */}
              <div className="py-4 sm:py-6">
                {navigationItems.map(({ id, label, icon: Icon }, index) => (
                  <motion.button
                    key={id}
                    onClick={() => handleScrollToSection(id)}
                    className={`w-full flex items-center space-x-3 sm:space-x-4 text-left px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 ${
                      activeSection === id
                        ? isDark
                          ? "text-red-400 bg-red-400/10 border-r-4 border-red-400"
                          : "text-red-600 bg-red-600/10 border-r-4 border-red-600"
                        : isDark
                          ? "text-white hover:text-red-400 hover:bg-gray-800"
                          : "text-gray-700 hover:text-red-600 hover:bg-gray-100"
                    }`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                    <span className="text-base sm:text-lg font-medium">{label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t ${
                  isDark ? "border-gray-800" : "border-gray-200"
                }`}
              >
                <p className={`text-xs sm:text-sm text-center ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  © 2025 Tharun M
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

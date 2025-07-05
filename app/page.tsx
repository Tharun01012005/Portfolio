"use client"

import { useState, useEffect } from "react"
import { ThemeProvider, useTheme } from "@/contexts/theme-context"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

function PortfolioContent() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { isDark } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "education", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={`transition-all duration-500 ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}>
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default function Portfolio() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  )
}

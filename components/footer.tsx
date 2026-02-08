"use client"

import { useTheme } from "@/contexts/theme-context"

export function Footer() {
  const { isDark } = useTheme()

  return (
    <footer
      className={`py-8 px-4 sm:px-6 lg:px-12 border-t ${
        isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
          © 2025 Designed by Tharun M.
        </p>
        <p className={`font-mono text-sm mt-2 ${isDark ? "text-red-400/60" : "text-red-600/60"}`}>PORTFOLIO 2025</p>
      </div>
    </footer>
  )
}

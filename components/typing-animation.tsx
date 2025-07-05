"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingAnimationProps {
  text: string
  className?: string
}

export function TypingAnimation({ text, className }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block w-1 h-full bg-current ml-1"
      >
        |
      </motion.span>
    </span>
  )
}

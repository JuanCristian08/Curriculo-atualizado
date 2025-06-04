"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Menu, X, User, Briefcase, Code, Layout, Mail } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

type FloatingNavProps = {
  activeSection: string
  onSectionClick: (section: string) => void
  onThemeToggle: () => void
  isDark: boolean
}

export function FloatingNav({ activeSection, onSectionClick, onThemeToggle, isDark }: FloatingNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "about", label: "Sobre", icon: <User className="h-4 w-4" /> },
    { id: "experience", label: "Experiência", icon: <Briefcase className="h-4 w-4" /> },
    { id: "skills", label: "Habilidades", icon: <Code className="h-4 w-4" /> },
    { id: "projects", label: "Projetos", icon: <Layout className="h-4 w-4" /> },
    { id: "contact", label: "Contato", icon: <Mail className="h-4 w-4" /> },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 right-4 z-50"
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="icon"
            className={`rounded-full w-12 h-12 ${
              isScrolled
                ? "bg-black/80 backdrop-blur-md border border-purple-500/30"
                : "bg-purple-900/50 backdrop-blur-sm"
            }`}
          >
            {isOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </Button>
        </motion.div>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    onSectionClick(item.id)
                    setIsOpen(false)
                  }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  {item.label}
                </motion.button>
              ))}

              <div className="mt-6">
                <Button
                  onClick={onThemeToggle}
                  size="icon"
                  variant="outline"
                  className="rounded-full w-12 h-12 border-purple-500/30"
                >
                  {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-purple-400" />}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 ${
            isScrolled
              ? "bg-black/80 backdrop-blur-md border border-purple-500/30"
              : "bg-purple-900/30 backdrop-blur-sm"
          } rounded-full px-2 py-2 shadow-lg shadow-purple-500/20`}
        >
          <div className="flex items-center">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full mx-1 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                {item.label}
              </motion.button>
            ))}

            <div className="h-6 mx-2 border-l border-purple-500/30"></div>

            <Button
              onClick={onThemeToggle}
              size="icon"
              variant="ghost"
              className="rounded-full w-9 h-9 text-gray-300 hover:text-white hover:bg-white/10"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </motion.div>
      )}
    </>
  )
}

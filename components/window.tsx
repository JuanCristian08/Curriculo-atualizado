"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { X, Minus, Square, Maximize2 } from "lucide-react"
import { AboutApp } from "@/components/apps/about-app"
import { SkillsApp } from "@/components/apps/skills-app"
import { ProjectsApp } from "@/components/apps/projects-app"
import { ExperienceApp } from "@/components/apps/experience-app"
import { ContactApp } from "@/components/apps/contact-app"
import { TerminalApp } from "@/components/apps/terminal-app"
import type { WindowState } from "@/types/os"

type WindowProps = {
  window: WindowState
  isActive: boolean
  onClose: () => void
  onMinimize: () => void
  onMaximize: () => void
  onFocus: () => void
  windowDimensions: { width: number; height: number }
}

export function Window({ window, isActive, onClose, onMinimize, onMaximize, onFocus, windowDimensions }: WindowProps) {
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef<HTMLDivElement>(null)

  const renderApp = () => {
    switch (window.appId) {
      case "about":
        return <AboutApp />
      case "skills":
        return <SkillsApp />
      case "projects":
        return <ProjectsApp />
      case "experience":
        return <ExperienceApp />
      case "contact":
        return <ContactApp />
      case "terminal":
        return <TerminalApp />
      default:
        return <div className="p-4 text-white">App não encontrado</div>
    }
  }

  if (window.minimized) return null

  const maxWidth = windowDimensions.width - 40
  const maxHeight = windowDimensions.height - 100

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: window.maximized ? 0 : Math.min(window.position.x, maxWidth - window.size.width),
        y: window.maximized ? 0 : Math.min(window.position.y, maxHeight - window.size.height),
        width: window.maximized ? windowDimensions.width : Math.min(window.size.width, maxWidth),
        height: window.maximized ? windowDimensions.height : Math.min(window.size.height, maxHeight),
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      drag={!window.maximized && !isDragging}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{
        left: 0,
        right: Math.max(0, windowDimensions.width - window.size.width),
        top: 0,
        bottom: Math.max(0, windowDimensions.height - window.size.height - 60),
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onClick={onFocus}
      className={`fixed bg-gray-900/95 backdrop-blur-xl border border-purple-500/30 rounded-lg overflow-hidden shadow-2xl ${
        isActive ? "z-50" : "z-40"
      } ${window.maximized ? "rounded-none" : ""}`}
      style={{
        left: window.maximized ? 0 : undefined,
        top: window.maximized ? 0 : undefined,
      }}
    >
      {/* Title Bar */}
      <div
        ref={dragRef}
        className="bg-gray-800/90 border-b border-purple-500/20 px-4 py-2 flex items-center justify-between cursor-move select-none"
      >
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                onClose()
              }}
              className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                onMinimize()
              }}
              className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                onMaximize()
              }}
              className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
            />
          </div>
          <span className="text-white text-sm font-medium truncate">{window.title}</span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onMinimize()
            }}
            className="p-1 hover:bg-gray-700 rounded transition-colors"
          >
            <Minus className="h-4 w-4 text-gray-400" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onMaximize()
            }}
            className="p-1 hover:bg-gray-700 rounded transition-colors"
          >
            {window.maximized ? (
              <Square className="h-4 w-4 text-gray-400" />
            ) : (
              <Maximize2 className="h-4 w-4 text-gray-400" />
            )}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="p-1 hover:bg-red-600 rounded transition-colors"
          >
            <X className="h-4 w-4 text-gray-400 hover:text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="h-[calc(100%-40px)] overflow-auto">{renderApp()}</div>
    </motion.div>
  )
}

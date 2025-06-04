"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Power, Wifi, Volume2, Battery } from "lucide-react"
import type { WindowState } from "@/types/os"

type TaskBarProps = {
  openWindows: WindowState[]
  currentTime: Date
  onWindowClick: (id: string) => void
  onStartClick: () => void
}

export function TaskBar({ openWindows, currentTime, onWindowClick, onStartClick }: TaskBarProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-xl border-t border-purple-500/30 flex items-center px-4 z-50"
    >
      {/* Start Button */}
      <Button
        onClick={onStartClick}
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium"
      >
        Juan OS
      </Button>

      {/* Open Windows */}
      <div className="flex-1 flex items-center space-x-2 ml-4">
        {openWindows
          .filter((w) => !w.minimized)
          .map((window) => (
            <motion.button
              key={window.id}
              onClick={() => onWindowClick(window.id)}
              className="bg-gray-800/50 hover:bg-gray-700/50 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {window.title}
            </motion.button>
          ))}
      </div>

      {/* System Tray */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-gray-400">
          <Wifi className="h-4 w-4" />
          <Volume2 className="h-4 w-4" />
          <Battery className="h-4 w-4" />
        </div>

        <div className="text-white text-sm text-right">
          <div className="font-medium">{formatTime(currentTime)}</div>
          <div className="text-xs text-gray-400">{formatDate(currentTime)}</div>
        </div>

        <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800/50">
          <Power className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}

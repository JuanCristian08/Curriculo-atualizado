"use client"

import { motion } from "framer-motion"
import type { App } from "@/types/os"

type DesktopIconProps = {
  app: App
  onClick: () => void
}

export function DesktopIcon({ app, onClick }: DesktopIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex flex-col items-center cursor-pointer group w-16 sm:w-20"
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-2 shadow-lg group-hover:shadow-xl transition-shadow">
        <app.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
      </div>
      <span className="text-white text-xs text-center font-medium group-hover:text-purple-300 transition-colors leading-tight">
        {app.name}
      </span>
    </motion.div>
  )
}

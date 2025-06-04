"use client"

import { motion } from "framer-motion"
import { DesktopIcon } from "@/components/desktop-icon"
import type { App } from "@/types/os"

type DesktopProps = {
  apps: App[]
  onAppClick: (appId: string) => void
}

export function Desktop({ apps, onAppClick }: DesktopProps) {
  return (
    <div className="fixed inset-0 p-4 z-10">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 h-full">
        {apps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex justify-center"
          >
            <DesktopIcon app={app} onClick={() => onAppClick(app.id)} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

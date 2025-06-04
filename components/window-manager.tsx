"use client"

import { AnimatePresence } from "framer-motion"
import { Window } from "@/components/window"
import type { WindowState } from "@/types/os"

type WindowManagerProps = {
  windows: WindowState[]
  activeWindow: string | null
  onClose: (id: string) => void
  onMinimize: (id: string) => void
  onMaximize: (id: string) => void
  onFocus: (id: string) => void
  windowDimensions: { width: number; height: number }
}

export function WindowManager({
  windows,
  activeWindow,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  windowDimensions,
}: WindowManagerProps) {
  return (
    <AnimatePresence>
      {windows.map((window) => (
        <Window
          key={window.id}
          window={window}
          isActive={activeWindow === window.id}
          onClose={() => onClose(window.id)}
          onMinimize={() => onMinimize(window.id)}
          onMaximize={() => onMaximize(window.id)}
          onFocus={() => onFocus(window.id)}
          windowDimensions={windowDimensions}
        />
      ))}
    </AnimatePresence>
  )
}

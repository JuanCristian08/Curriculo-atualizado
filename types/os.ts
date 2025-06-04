import type { LucideIcon } from "lucide-react"

export interface App {
  id: string
  name: string
  icon: LucideIcon
}

export interface WindowState {
  id: string
  appId: string
  title: string
  position: { x: number; y: number }
  size: { width: number; height: number }
  minimized: boolean
  maximized: boolean
}

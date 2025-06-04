"use client"

import { useState, useCallback } from "react"
import { User, Code, Briefcase, FolderOpen, Mail, Terminal } from "lucide-react"
import type { App, WindowState } from "@/types/os"

export function useOS() {
  const apps: App[] = [
    {
      id: "about",
      name: "Sobre Mim",
      icon: User,
    },
    {
      id: "skills",
      name: "Habilidades",
      icon: Code,
    },
    {
      id: "experience",
      name: "Experiência",
      icon: Briefcase,
    },
    {
      id: "projects",
      name: "Projetos",
      icon: FolderOpen,
    },
    {
      id: "contact",
      name: "Contato",
      icon: Mail,
    },
    {
      id: "terminal",
      name: "Terminal",
      icon: Terminal,
    },
  ]

  const [openWindows, setOpenWindows] = useState<WindowState[]>([])
  const [activeWindow, setActiveWindow] = useState<string | null>(null)

  const openWindow = useCallback(
    (appId: string) => {
      const app = apps.find((a) => a.id === appId)
      if (!app) return

      const existingWindow = openWindows.find((w) => w.appId === appId)
      if (existingWindow) {
        setActiveWindow(appId)
        if (existingWindow.minimized) {
          setOpenWindows((prev) => prev.map((w) => (w.id === appId ? { ...w, minimized: false } : w)))
        }
        return
      }

      const windowWidth = Math.min(800, window.innerWidth - 40)
      const windowHeight = Math.min(600, window.innerHeight - 100)

      const newWindow: WindowState = {
        id: appId,
        appId,
        title: app.name,
        position: {
          x: Math.max(20, 100 + openWindows.length * 30),
          y: Math.max(20, 100 + openWindows.length * 30),
        },
        size: { width: windowWidth, height: windowHeight },
        minimized: false,
        maximized: false,
      }

      setOpenWindows((prev) => [...prev, newWindow])
      setActiveWindow(appId)
    },
    [openWindows],
  )

  const closeWindow = useCallback(
    (windowId: string) => {
      setOpenWindows((prev) => prev.filter((w) => w.id !== windowId))
      setActiveWindow((current) => {
        if (current === windowId) {
          const remainingWindows = openWindows.filter((w) => w.id !== windowId && !w.minimized)
          return remainingWindows.length > 0 ? remainingWindows[remainingWindows.length - 1].id : null
        }
        return current
      })
    },
    [openWindows],
  )

  const minimizeWindow = useCallback(
    (windowId: string) => {
      setOpenWindows((prev) => prev.map((w) => (w.id === windowId ? { ...w, minimized: true } : w)))
      setActiveWindow((current) => {
        if (current === windowId) {
          const visibleWindows = openWindows.filter((w) => w.id !== windowId && !w.minimized)
          return visibleWindows.length > 0 ? visibleWindows[visibleWindows.length - 1].id : null
        }
        return current
      })
    },
    [openWindows],
  )

  const maximizeWindow = useCallback((windowId: string) => {
    setOpenWindows((prev) => prev.map((w) => (w.id === windowId ? { ...w, maximized: !w.maximized } : w)))
  }, [])

  const focusWindow = useCallback((windowId: string) => {
    setActiveWindow(windowId)
    setOpenWindows((prev) => prev.map((w) => (w.id === windowId ? { ...w, minimized: false } : w)))
  }, [])

  return {
    apps,
    openWindows,
    activeWindow,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
  }
}

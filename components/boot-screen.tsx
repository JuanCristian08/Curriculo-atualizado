"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function BootScreen() {
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState("")

  const bootMessages = [
    "Inicializando Juan OS v2.0...",
    "Carregando módulos do sistema...",
    "Verificando habilidades técnicas...",
    "Conectando com TosaTech...",
    "Carregando projetos Flutter...",
    "Inicializando interface de usuário...",
    "Sistema pronto!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2
        const messageIndex = Math.floor((newProgress / 100) * bootMessages.length)
        if (messageIndex < bootMessages.length) {
          setCurrentMessage(bootMessages[messageIndex])
        }
        return newProgress > 100 ? 100 : newProgress
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-green-400 font-mono">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"
        >
          JUAN OS
        </motion.h1>

        <div className="w-96 h-2 bg-gray-800 rounded-full mb-4 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <p className="text-lg mb-2">{progress}%</p>
        <motion.p
          key={currentMessage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-green-300"
        >
          {currentMessage}
        </motion.p>

        <div className="mt-8 flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function TerminalApp() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([
    "Juan OS Terminal v2.0",
    "Digite 'help' para ver os comandos disponíveis",
    "",
  ])
  const [currentPath, setCurrentPath] = useState("~/juan")
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands = {
    help: () => [
      "Comandos disponíveis:",
      "  about     - Informações sobre Juan",
      "  skills    - Lista de habilidades",
      "  projects  - Projetos desenvolvidos",
      "  contact   - Informações de contato",
      "  clear     - Limpar terminal",
      "  whoami    - Usuário atual",
      "  date      - Data e hora atual",
      "  ls        - Listar arquivos",
      "",
    ],
    about: () => [
      "Juan Cristian Kunz de Borba",
      "Desenvolvedor Flutter & Web",
      "18 anos, Blumenau/SC",
      "Trabalha na TosaTech",
      "",
    ],
    skills: () => [
      "Hard Skills:",
      "  - Dart (80%)",
      "  - Flutter (75%)",
      "  - JavaScript (70%)",
      "  - Angular (65%)",
      "  - Git (85%)",
      "  - Firebase (70%)",
      "  - HTML/CSS (90%)",
      "  - Node.js (60%)",
      "",
      "Soft Skills:",
      "  - Proativo, Organizado, Comunicativo",
      "  - Trabalho em equipe, Resolução de problemas",
      "",
    ],
    projects: () => [
      "Projetos principais:",
      "  1. App Mobile Flutter - Aplicativo com Firebase",
      "  2. Sistema Web Angular - Dashboard completo",
      "  3. Landing Page Responsiva - Design moderno",
      "  4. API RESTful - Backend Node.js",
      "",
    ],
    contact: () => [
      "Contato:",
      "  Email: juan@email.com",
      "  Telefone: (47) 99999-9999",
      "  Localização: Blumenau, SC",
      "",
    ],
    whoami: () => ["juan", ""],
    date: () => [new Date().toLocaleString("pt-BR"), ""],
    ls: () => ["about.txt    skills.json    projects/", "contact.md   resume.pdf     photos/", ""],
    clear: () => {
      setHistory([])
      return []
    },
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    const output = commands[trimmedCmd as keyof typeof commands]

    if (output) {
      const result = output()
      setHistory((prev) => [...prev, `${currentPath}$ ${cmd}`, ...result])
    } else if (trimmedCmd === "") {
      setHistory((prev) => [...prev, `${currentPath}$ `])
    } else {
      setHistory((prev) => [...prev, `${currentPath}$ ${cmd}`, `Comando não encontrado: ${cmd}`, ""])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput("")
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  return (
    <div className="h-full bg-black text-green-400 font-mono text-sm">
      <div ref={terminalRef} className="h-full p-4 overflow-auto">
        {history.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="whitespace-pre-wrap"
          >
            {line}
          </motion.div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-green-400 mr-2">{currentPath}$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none text-green-400 flex-1"
            autoFocus
          />
        </form>
      </div>
    </div>
  )
}

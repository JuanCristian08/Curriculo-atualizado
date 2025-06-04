// Criar um novo componente para o footer com links sociais
"use client"

import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-8 z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-purple-400 text-sm sm:text-base">
              &copy; 2024 Juan Cristian Kunz de Borba. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/JuanCristian08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/juan-de-borba-9855882a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

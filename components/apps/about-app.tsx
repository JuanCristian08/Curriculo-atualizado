"use client"

import { motion } from "framer-motion"
import { User, MapPin, Calendar, GraduationCap, Github, Linkedin } from "lucide-react"

export function AboutApp() {
  return (
    <div className="p-6 text-white min-h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500/30 mr-8">
            <img
              src="/images/juan-profile.jpg"
              alt="Juan Cristian Kunz de Borba"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Juan Cristian Kunz de Borba
            </h1>
            <p className="text-xl text-gray-300">Desenvolvedor Flutter & Web</p>
            <div className="flex items-center mt-2 text-gray-400">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Blumenau, SC</span>
              <Calendar className="h-4 w-4 ml-4 mr-2" />
              <span>18 anos</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <User className="h-6 w-6 mr-3 text-purple-400" />
              Sobre Mim
            </h2>
            <p className="text-gray-300 leading-relaxed">
                Me chamo Juan Cristian Kunz de Borba, tenho 18 anos e sou natural de Blumenau/SC. Atualmente
                    estou cursando o Entra21, onde aplico minhas habilidades em desenvolvimento mobile. Sou apaixonado por tecnologia e sempre busco aprender novas ferramentas e metodologias para
                    criar soluções inovadoras e eficientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <GraduationCap className="h-6 w-6 mr-3 text-blue-400" />
              Formação
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Ensino Médio Completo</h3>
                  <p className="text-gray-400">Blumenau, SC</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-gray-800/50 rounded-xl p-6 border border-purple-500/20"
        >
          <h2 className="text-2xl font-bold mb-4">Objetivos</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-purple-900/30 rounded-lg">
              <h3 className="font-semibold mb-2">Inovação</h3>
              <p className="text-sm text-gray-300">Criar soluções tecnológicas inovadoras</p>
            </div>
            <div className="text-center p-4 bg-blue-900/30 rounded-lg">
              <h3 className="font-semibold mb-2">Crescimento</h3>
              <p className="text-sm text-gray-300">Desenvolvimento contínuo de habilidades</p>
            </div>
            <div className="text-center p-4 bg-indigo-900/30 rounded-lg">
              <h3 className="font-semibold mb-2">Impacto</h3>
              <p className="text-sm text-gray-300">Gerar valor através da tecnologia</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gray-800/50 rounded-xl p-6 border border-purple-500/20"
        >
          <h2 className="text-2xl font-bold mb-4">Redes Sociais</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/JuanCristian08"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
            >
              <Github className="h-5 w-5 text-white" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/juan-de-borba-9855882a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-900/50 rounded-lg hover:bg-blue-800/50 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-white" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

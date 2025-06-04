"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

export function ExperienceTimeline() {
  return (
    <div className="relative">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute left-[25px] top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-500"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative ml-[50px] mb-12"
      >
        <div className="absolute -left-[50px] w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
          <Briefcase className="h-6 w-6 text-white" />
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl"></div>
          <div className="relative backdrop-blur-sm bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Auxiliar Administrativo</h3>
                <h4 className="text-xl text-purple-400 font-medium">TosaTech</h4>
              </div>
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <Calendar className="h-5 w-5 text-purple-400" />
                <span className="text-purple-300">Agosto 2024/Janeiro 2025</span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Atuei como Auxiliar Administrativo na TosaTech, onde fui responsável por auxiliar nas atividades administrativas e de suporte técnico. Minhas funções envolveram organização de documentos, atendimento ao cliente e suporte em tarefas diárias para garantir o bom funcionamento da equipe.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-500/30">
                Excel
              </span>
              <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-500/30">
                Abertura e Fechamento de OS
              </span>
              <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-500/30">
                Emissão de Notas Fiscais
              </span>
              <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-500/30">
                Suporte Técnico
              </span>
              <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-500/30">
                Marketing
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

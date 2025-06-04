"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

export function ExperienceApp() {
  const experience = {
    company: "TosaTech",
    position: "Auxiliar Administrativo",
    period: "Agosto 2024 / Janeiro 2025",
    location: "Blumenau, SC",
    description:
      "Atuei como Auxiliar Administrativo na TosaTech, onde fui responsável por auxiliar nas atividades administrativas e de suporte técnico. Minhas funções envolveram organização de documentos, atendimento ao cliente e suporte em tarefas diárias para garantir o bom funcionamento da equipe.",
    technologies: [
      "Excel",
      "Abertura e Fechamento de OS",
      "Emissão de notas fiscais"
    ],
  };

  return (
    <div className="p-6 text-white min-h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Experiência Profissional
        </h1>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Linha da timeline */}
          <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

          <div className="bg-gray-800/50 rounded-xl p-8 border border-purple-500/20 relative">
            {/* Ponto da timeline */}
            <div className="absolute -left-2 top-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Briefcase className="h-6 w-6 text-white" />
            </div>

            <div className="ml-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{experience.position}</h2>
                  <h3 className="text-xl text-purple-400 font-semibold">{experience.company}</h3>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-300 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{experience.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gray-900/50 rounded-lg p-6 border border-purple-500/20"
                >
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-purple-400" />
                    Responsabilidades
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Desenvolvimento de aplicativos mobile em Flutter",
                      "Criação de interfaces web responsivas com Angular",
                      "Integração com APIs e serviços backend",
                      "Colaboração em equipe usando metodologias ágeis",
                      "Manutenção e otimização de código existente",
                      "Participação em code reviews e documentação"
                    ].map((responsibility, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start text-gray-300 text-sm"
                      >
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gray-900/50 rounded-lg p-6 border border-purple-500/20"
                >
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-blue-400" />
                    Tecnologias
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gray-800/50 rounded-xl p-6 border border-purple-500/20"
        >
          <h3 className="text-xl font-bold mb-4">Conquistas e Resultados</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-purple-900/30 rounded-lg">
              <div className="text-2xl font-bold text-purple-400 mb-1">10+</div>
              <div className="text-sm text-gray-300">Projetos Concluídos</div>
            </div>
            <div className="text-center p-4 bg-blue-900/30 rounded-lg">
              <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
              <div className="text-sm text-gray-300">Entregas no Prazo</div>
            </div>
            <div className="text-center p-4 bg-indigo-900/30 rounded-lg">
              <div className="text-2xl font-bold text-indigo-400 mb-1">5★</div>
              <div className="text-sm text-gray-300">Avaliação da Equipe</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

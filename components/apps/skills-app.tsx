"use client"

import { motion } from "framer-motion"
import { Code, Star, Award } from "lucide-react"

export function SkillsApp() {
  const hardSkills = [
    { name: "Dart", level: 80, color: "#0175C2" },
    { name: "Flutter", level: 75, color: "#02569B" },
    { name: "JavaScript", level: 70, color: "#F7DF1E" },
    { name: "Angular", level: 65, color: "#DD0031" },
    { name: "Git", level: 85, color: "#F05032" },
    { name: "Firebase", level: 70, color: "#FFCA28" },
    { name: "HTML/CSS", level: 90, color: "#E34F26" },
    { name: "Node.js", level: 60, color: "#339933" },
  ]

  const softSkills = [
    "Proativo",
    "Organizado",
    "Trabalho em Equipe",
    "Comunicativo",
    "Resolução de Problemas",
    "Adaptabilidade",
    "Criatividade",
    "Liderança",
  ]

  const courses = [
    { name: "Curso de inglês básico", icon: "🌐" },
    { name: "VMF Escola", icon: "🎓" },
    { name: "Entra21", icon: "⚡" },
  ]

  return (
    <div className="p-6 text-white min-h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Habilidades & Competências
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Hard Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Code className="h-6 w-6 mr-3 text-purple-400" />
              Hard Skills
            </h2>
            <div className="space-y-4">
              {hardSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="relative"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Star className="h-6 w-6 mr-3 text-blue-400" />
              Soft Skills
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg p-3 text-center border border-purple-500/20"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="h-6 w-6 mr-3 text-green-400" />
            Cursos Complementares
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg p-6 text-center border border-purple-500/20 cursor-pointer"
              >
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="font-semibold text-lg">{course.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsApp() {
  const projects = [
    {
      id: 1,
      title: "Laura Manicure Artist",
      description:
        "Landing page elegante para manicure profissional com design responsivo, integração WhatsApp e galeria de trabalhos. Interface moderna focada na conversão de clientes.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "/images/laura-manicure-project.jpg",
      status: "Concluído",
      year: "2024",
      url: "https://bejewelled-lollipop-9a99f2.netlify.app/",
    },
  ]

  return (
    <div className="p-6 text-white min-h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Meu Projeto
          </h1>
          <div className="flex items-center space-x-2 text-gray-400">
            <Code className="h-5 w-5" />
            <span>{projects.length} projeto</span>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-purple-500/20 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Concluído"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white font-bold text-lg">{project.year}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      onClick={() => project.url && window.open(project.url, "_blank")}
                      disabled={!project.url}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

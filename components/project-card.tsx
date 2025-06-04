"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

type ProjectCardProps = {
  project: {
    title: string
    description: string
    tech: string[]
    image: string
    color: string
    url?: string
    status?: string
    year?: string
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 blur-xl`}></div>
        <div className="relative backdrop-blur-sm bg-black/40 border border-purple-500/20 rounded-2xl h-full flex flex-col">
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Status Badge */}
            {project.status && (
              <div className="absolute top-4 right-4 z-20">
                <Badge
                  className={`${
                    project.status === "Concluído"
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                  }`}
                >
                  {project.status}
                </Badge>
              </div>
            )}

            {/* Year Badge */}
            {project.year && (
              <div className="absolute bottom-4 left-4 z-20">
                <Badge className="bg-black/50 text-white border-white/20">{project.year}</Badge>
              </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full"
              >
                <ExternalLink className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 flex-1 text-sm leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className="border-purple-500/30 text-purple-300 bg-purple-900/30 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex space-x-3 mt-auto">
              {project.url && (
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Demo
                </Button>
              )}
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
        </div>
      </div>
    </motion.div>
  )
}

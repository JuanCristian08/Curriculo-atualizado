"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type CourseCardProps = {
  course: {
    name: string
    description: string
    icon: ReactNode
    color: string
  }
  index: number
}

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="relative h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-20 blur-xl`}></div>
        <div className="relative backdrop-blur-sm bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-xl h-full flex flex-col items-center text-center">
          <div
            className={`w-16 h-16 rounded-full bg-gradient-to-r ${course.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            {course.icon}
          </div>
          <h4 className="text-xl font-bold text-white mb-3">{course.name}</h4>
          <p className="text-gray-300">{course.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

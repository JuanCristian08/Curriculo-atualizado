"use client"

import { motion } from "framer-motion"
import { useState } from "react"

type SkillOrbProps = {
  skill: {
    name: string
    level: number
    color: string
  }
  index: number
}

export function SkillOrb({ skill, index }: SkillOrbProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center">
        <div className="relative mb-3">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="8" />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={skill.color}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - skill.level / 100)}`}
              initial={{ strokeDashoffset: `${2 * Math.PI * 45}` }}
              whileInView={{ strokeDashoffset: `${2 * Math.PI * 45 * (1 - skill.level / 100)}` }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: skill.color }}
            >
              <span className="text-white font-bold text-xl">{skill.level}%</span>
            </motion.div>
          </div>
        </div>
        <motion.span
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white font-medium text-lg"
        >
          {skill.name}
        </motion.span>
      </div>
    </motion.div>
  )
}

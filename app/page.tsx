"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Desktop } from "@/components/desktop"
import { BootScreen } from "@/components/boot-screen"
import { LoginScreen } from "@/components/login-screen"
import { TaskBar } from "@/components/taskbar"
import { WindowManager } from "@/components/window-manager"
import { useOS } from "@/hooks/use-os"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Award, Mail, Phone, MapPin, ChevronRight, Github, Linkedin, Zap, Globe } from "lucide-react"
import { ParticleCanvas } from "@/components/particle-canvas"
import { SkillOrb } from "@/components/skill-orb"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { FloatingNav } from "@/components/floating-nav"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { CourseCard } from "@/components/course-card"
import { useMobile } from "@/hooks/use-mobile"
import { Footer } from "@/components/footer"

export default function JuanOS() {
  const [bootComplete, setBootComplete] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeSection, setActiveSection] = useState("hero")
  const [darkMode, setDarkMode] = useState(true)
  const [showParticles, setShowParticles] = useState(true)
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const isMobile = useMobile()

  const { openWindows, activeWindow, openWindow, closeWindow, minimizeWindow, maximizeWindow, focusWindow, apps } =
    useOS()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    // Boot sequence
    const bootTimer = setTimeout(() => {
      setBootComplete(true)
    }, 3000)
    return () => clearTimeout(bootTimer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionRefs.current).forEach(([section, ref]) => {
        if (!ref) return

        const offsetTop = ref.offsetTop
        const height = ref.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const registerSection = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current = { ...sectionRefs.current, [id]: ref }
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = {
    hard: [
      { name: "Dart", level: 90, color: "#0175C2" },
      { name: "Flutter", level: 90, color: "#02569B" },
      { name: "JavaScript", level: 70, color: "#F7DF1E" },
      { name: "Angular", level: 50, color: "#DD0031" },
      { name: "Git", level: 85, color: "#F05032" },
      { name: "Firebase", level: 85, color: "#FFCA28" },
      { name: "HTML/CSS", level: 95, color: "#E34F26" },
      { name: "Node.js", level: 80, color: "#339933" },
    ],
    soft: [
      "Proativo",
      "Organizado",
      "Trabalho em Equipe",
      "Comunicativo",
      "Resolução de Problemas",
      "Adaptabilidade",
      "Criatividade",
      "Liderança",
      "Empatia",
      "Pensamento Crítico",
      "Gestão do Tempo",
      "Foco em Resultados",
      "Aprendizado Contínuo",
      "Colaboração",
      "Inovação",
      "Empreendedorismo",
    ],
  }

  const projects = [
    {
      title: "Laura Manicure Artist",
      description:
        "Landing page elegante para manicure profissional com design responsivo, integração WhatsApp e galeria de trabalhos. Interface moderna focada na conversão de clientes.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "/images/laura-manicure-project.jpg",
      color: "from-pink-500 to-rose-400",
      url: "https://bejewelled-lollipop-9a99f2.netlify.app/",
      status: "Concluído",
      year: "2025",
    },
  ]

  const courses = [
    {
      name: "Curso de inglês básico",
      description: "Inglês básico no SESC",
      icon: <Globe className="h-6 w-6" />,
      color: "from-blue-600 to-cyan-400",
    },
    {
      name: "VMF Escola",
      description: "Formação técnica especializada em desenvolvimento",
      icon: <Code className="h-6 w-6" />,
      color: "from-purple-600 to-pink-400",
    },
    {
      name: "Entra21",
      description: "Programa de capacitação em tecnologia e inovação",
      icon: <Zap className="h-6 w-6" />,
      color: "from-amber-500 to-orange-400",
    },
  ]

  const handleLogin = () => {
    setLoggedIn(true)
  }

  if (!bootComplete) {
    return <BootScreen />
  }

  if (!loggedIn) {
    return <LoginScreen onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%239C92AC fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      {/* Desktop */}
      <Desktop apps={apps} onAppClick={openWindow} />

      {/* Window Manager */}
      <WindowManager
        windows={openWindows}
        activeWindow={activeWindow}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onMaximize={maximizeWindow}
        onFocus={focusWindow}
        windowDimensions={windowDimensions}
      />

      {/* Taskbar */}
      <TaskBar
        openWindows={openWindows}
        currentTime={currentTime}
        onWindowClick={focusWindow}
        onStartClick={() => openWindow("start-menu")}
      />

      {/* Floating Particles */}
      {windowDimensions.width > 0 && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(isMobile ? 10 : 20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              animate={{
                x: [0, Math.random() * windowDimensions.width],
                y: [0, Math.random() * windowDimensions.height],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                left: Math.random() * windowDimensions.width,
                top: Math.random() * windowDimensions.height,
              }}
            />
          ))}
        </div>
      )}

      {/* CV Page Content */}
      <div className="relative min-h-screen bg-black text-white z-10 pb-20">
        {showParticles && <ParticleCanvas />}

        <FloatingNav
          activeSection={activeSection}
          onSectionClick={scrollToSection}
          onThemeToggle={() => setDarkMode(!darkMode)}
          isDark={darkMode}
        />

        {/* Hero Section */}
        <section
          id="hero"
          ref={(el) => registerSection("hero", el)}
          className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 blur-xl opacity-70 animate-pulse"></div>
                <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src="/images/juan-profile.jpg"
                    alt="Juan Cristian Kunz de Borba"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-purple-600 to-pink-600 p-2 sm:p-3 rounded-full shadow-lg">
                  <Code className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tighter">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Juan Cristian
                </span>
              </h1>
              <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white/90">
                Kunz de Borba
              </h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur-xl"></div>
                <div className="relative z-10 p-4 sm:p-6 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
                  <p className="text-lg sm:text-xl md:text-2xl text-purple-200 max-w-2xl">
                    Desenvolvedor Flutter & Web apaixonado por criar experiências digitais inovadoras e impactantes
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex justify-center mt-8"
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Entre em Contato
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
              >
                <button
                  onClick={() => scrollToSection("about")}
                  className="flex flex-col items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span className="text-sm mb-2">Scroll</span>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <ChevronRight className="h-6 w-6 rotate-90" />
                  </motion.div>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          ref={(el) => registerSection("about", el)}
          className="relative py-20 min-h-screen flex items-center"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <Badge
                  className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900 px-4 py-2 text-sm rounded-full"
                  variant="secondary"
                >
                  Sobre Mim
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Quem sou eu
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl"></div>
                <div className="relative backdrop-blur-sm bg-black/40 border border-purple-500/20 rounded-2xl p-6 sm:p-8 shadow-xl">
                  <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
                    Me chamo Juan Cristian Kunz de Borba, tenho 18 anos e sou natural de Blumenau/SC. Atualmente
                    estou cursando o Entra21, onde aplico minhas habilidades em desenvolvimento mobile. Sou apaixonado por tecnologia e sempre busco aprender novas ferramentas e metodologias para
                    criar soluções inovadoras e eficientes.
                  </p>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  Formação Acadêmica
                </h3>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl"></div>
                  <div className="relative backdrop-blur-sm bg-black/40 border border-purple-500/20 rounded-2xl p-6 sm:p-8 shadow-xl">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg">
                        <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Ensino Médio Completo</h4>
                        <p className="text-purple-300">Blumenau, SC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          ref={(el) => registerSection("experience", el)}
          className="relative py-20 min-h-screen flex items-center"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <Badge
                  className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900 px-4 py-2 text-sm rounded-full"
                  variant="secondary"
                >
                  Experiência
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Minha Jornada Profissional
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
              </div>

              <ExperienceTimeline />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          ref={(el) => registerSection("skills", el)}
          className="relative py-20 min-h-screen flex items-center"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge
                  className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900 px-4 py-2 text-sm rounded-full"
                  variant="secondary"
                >
                  Habilidades
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Minhas Competências
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Hard Skills */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                      <Code className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    Hard Skills
                  </h3>

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl"></div>
                    <div className="relative backdrop-blur-sm bg-black/40 border border-purple-500/20 rounded-2xl p-6 sm:p-8 shadow-xl">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        {skills.hard.map((skill, index) => (
                          <SkillOrb key={index} skill={skill} index={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Soft Skills */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    Soft Skills
                  </h3>

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl"></div>
                    <div className="relative backdrop-blur-sm bg-black/40 border border-purple-500/20 rounded-2xl p-6 sm:p-8 shadow-xl">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {skills.soft.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30"
                          >
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                              <span className="text-white font-bold text-xs sm:text-sm">{index + 1}</span>
                            </div>
                            <span className="text-white font-medium text-sm sm:text-base">{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Courses */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-20"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  Cursos Complementares
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {courses.map((course, index) => (
                    <CourseCard key={index} course={course} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={(el) => registerSection("projects", el)}
          className="relative py-20 min-h-screen flex items-center"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge
                  className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900 px-4 py-2 text-sm rounded-full"
                  variant="secondary"
                >
                  Projetos
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Meu Trabalho
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
              </div>

              <div className="flex justify-center">
                <div className="max-w-md">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={(el) => registerSection("contact", el)}
          className="relative py-20 min-h-screen flex items-center"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge
                  className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900 px-4 py-2 text-sm rounded-full"
                  variant="secondary"
                >
                  Contato
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Vamos Conversar
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl"></div>
                    <div className="relative backdrop-blur-sm bg-black/40 border border-purple-500/20 rounded-2xl p-6 sm:p-8 shadow-xl">
                      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Informações de Contato</h3>

                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                            <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-base sm:text-lg font-semibold text-white">Localização</h4>
                            <p className="text-purple-300">Blumenau, SC</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                            <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-base sm:text-lg font-semibold text-white">Telefone</h4>
                            <p className="text-purple-300">(47) 99247-8107</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                            <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-base sm:text-lg font-semibold text-white">E-mail</h4>
                            <p className="text-purple-300">juanborba033@gmail.com</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 pt-8 border-t border-purple-500/20">
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Redes Sociais</h4>
                        <div className="flex gap-4">
                          <a
                            href="https://github.com/JuanCristian08"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
                          >
                            <Github className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </a>
                          <a
                            href="https://www.linkedin.com/in/juan-de-borba-9855882a0/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
                          >
                            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

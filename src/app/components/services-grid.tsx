"use client"

import { motion } from "framer-motion"
import { Home, Building, Bell, Lock, Wifi, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { ChevronDown } from "lucide-react"

const services = [
  {
    title: "Home Surveillance",
    description: "Complete security solutions for residential properties with 24/7 monitoring",
    icon: Home,
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Office Security",
    description: "Enterprise-grade surveillance systems for commercial spaces",
    icon: Building,
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "Smart Alarms",
    description: "AI-powered alert systems that detect unusual activities",
    icon: Bell,
    color: "from-blue-500 to-purple-700",
  },
  {
    title: "Access Control",
    description: "Manage who enters your premises with advanced access systems",
    icon: Lock,
    color: "from-purple-500 to-blue-700",
  },
  {
    title: "Video Analytics",
    description: "Intelligent video analysis for enhanced security insights",
    icon: Eye,
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Remote Monitoring",
    description: "Monitor your property from anywhere using our mobile app",
    icon: Wifi,
    color: "from-purple-500 to-purple-700",
  },
]

export default function ServicesGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      id="services"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {services.map((service, index) => (
        <motion.div key={index} variants={item}>
          <Card className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 h-full overflow-hidden group relative hover:shadow-[0_0_20px_rgba(96,165,250,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

            <CardHeader className="pb-2 relative z-10">
              <div className="mb-4 w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-gray-700 group-hover:border-blue-500/50 shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500">
                <service.icon className="h-7 w-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 transition-all duration-300">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </CardDescription>

              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors duration-300">
                  Learn more <ChevronDown className="h-4 w-4 transform rotate-270" />
                </button>
              </div>
            </CardContent>
            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-500 ease-out"></div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import { CalendarCheck, Search, Wrench, HeartHandshake } from "lucide-react"

const steps = [
  {
    icon: CalendarCheck,
    title: "Book",
    description: "Schedule a free consultation with our security experts",
  },
  {
    icon: Search,
    title: "Inspect",
    description: "We assess your property to design the optimal security system",
  },
  {
    icon: Wrench,
    title: "Install",
    description: "Professional installation of your customized security solution",
  },
  {
    icon: HeartHandshake,
    title: "Maintain",
    description: "Ongoing support and maintenance to ensure optimal performance",
  },
]

export default function ProcessTimeline() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_0_25px_rgba(96,165,250,0.3)]">
            Our Process
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A simple, efficient approach to securing your property
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={item} className="relative">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full hover:border-blue-500/50 transition-all duration-500 group hover:shadow-[0_0_20px_rgba(96,165,250,0.2)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                <div className="mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-gray-700 group-hover:border-blue-500/50 shadow-lg group-hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all duration-500 relative z-10">
                  <step.icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 relative z-10">
                  {step.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                  {step.description}
                </p>

                <div className="absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-8 hidden lg:block"></div>

                <div className="absolute top-2 right-1/2 text-3xl font-bold text-gray-700 transform translate-y-24 hidden lg:block">
                  {index + 1}
                </div>

                <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

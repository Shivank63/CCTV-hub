"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const brands = ["CP Plus", "Hikvision", "Dahua", "Axis", "Bosch", "Honeywell", "Panasonic", "Samsung"]

export default function TrustedBrands() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <div ref={containerRef} className="overflow-hidden py-10">
      <motion.div style={{ x }} className="flex gap-16 min-w-max">
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="w-48 h-24 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg flex items-center justify-center group transition-all duration-500 hover:border-blue-500/50 hover:bg-gray-800/80 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <span className="text-xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10">
              {brand}
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-500 ease-out"></div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock3, Medal, Zap, DollarSign } from "lucide-react"

const features = [
  {
    icon: Clock3,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance and monitoring services",
  },
  {
    icon: Medal,
    title: "Certified Experts",
    description: "Team of professionals with industry-recognized certifications",
  },
  {
    icon: Zap,
    title: "Fast Setup",
    description: "Quick and efficient installation with minimal disruption",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates with flexible payment options",
  },
]

export default function WhyChooseUs() {
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
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_0_25px_rgba(96,165,250,0.3)]">
            Why Choose Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We deliver excellence in every aspect of our security solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-500 group hover:shadow-[0_0_20px_rgba(96,165,250,0.2)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                  <div className="mb-4 w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-gray-700 group-hover:border-blue-500/50 shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500 relative z-10">
                    <feature.icon className="h-7 w-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gray-900 border border-gray-800 group-hover:border-blue-500/50 rounded-xl p-8 transition-all duration-500 hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Trusted by <span className="text-blue-400">5,000+</span> Clients
                </h3>
                <p className="text-gray-300 mb-6">
                  At Infotechistan, we pride ourselves on delivering exceptional security solutions that meet the unique
                  needs of each client. Our commitment to quality, innovation, and customer satisfaction has made us the
                  preferred choice for thousands of homes and businesses.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-blue-600/10 px-3 py-2 rounded-lg border border-blue-500/30 hover:bg-blue-600/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(96,165,250,0.2)]">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-300">Premium Equipment</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-600/10 px-3 py-2 rounded-lg border border-purple-500/30 hover:bg-purple-600/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-300">Expert Installation</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-600/10 px-3 py-2 rounded-lg border border-blue-500/30 hover:bg-blue-600/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(96,165,250,0.2)]">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-300">Lifetime Support</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-600/10 px-3 py-2 rounded-lg border border-purple-500/30 hover:bg-purple-600/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-300">Warranty Included</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

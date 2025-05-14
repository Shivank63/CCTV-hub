"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import HeroSection from "./components/hero-section"
import Navbar from "./components/navbar"
import ServicesGrid from "./components/services-grid"
import WhyChooseUs from "./components/why-choose-us"
import TrustedBrands from "./components/trusted-brands"
import ProcessTimeline from "./components/process-timeline"
import FaqAccordion from "./components/faq-accordion"
import ContactForm from "./components/contact-form"
import Footer from "./components/footer"

export default function Home() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <Navbar />

      <HeroSection />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Our Premium Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Cutting-edge surveillance solutions tailored to your specific security needs
          </p>
        </motion.div>

        <ServicesGrid />
      </motion.div>

      <WhyChooseUs />

      <div className="py-24 bg-gray-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Trusted by Leading Brands
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              We partner with the most reliable security technology providers
            </p>
          </motion.div>

          <TrustedBrands />
        </div>
      </div>

      <ProcessTimeline />

      <div className="py-24 bg-gray-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Everything you need to know about our surveillance solutions
            </p>
          </motion.div>

          <FaqAccordion />
        </div>
      </div>

      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Get in Touch
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Ready to enhance your security? Contact us for a free consultation
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </div>

      <Footer />
    </main>
  )
}

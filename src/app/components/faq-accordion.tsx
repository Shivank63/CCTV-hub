"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { PlusCircle, MinusCircle } from "lucide-react"

const faqs = [
  {
    question: "What types of CCTV cameras do you offer?",
    answer:
      "We offer a wide range of CCTV cameras including dome cameras, bullet cameras, PTZ cameras, wireless cameras, and IP cameras. Each type is suitable for different environments and security needs.",
  },
  {
    question: "How long does installation typically take?",
    answer:
      "Installation time varies depending on the complexity of the system and the size of your property. A basic residential setup can be completed in 1-2 days, while larger commercial installations may take 3-5 days.",
  },
  {
    question: "Do you offer remote monitoring services?",
    answer:
      "Yes, we provide comprehensive remote monitoring services that allow you to view your security footage from anywhere using our mobile app or web portal. Our systems can be integrated with your smartphone for real-time alerts.",
  },
  {
    question: "What is the warranty period for your products?",
    answer:
      "All our products come with a standard 2-year warranty. We also offer extended warranty options and maintenance packages to ensure your system remains in optimal condition for years to come.",
  },
  {
    question: "Can I upgrade my existing security system?",
    answer:
      "We specialize in upgrading existing systems to incorporate the latest technology. Our experts will assess your current setup and recommend the most cost-effective upgrade path.",
  },
]

export default function FaqAccordion() {
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 group hover:shadow-[0_0_20px_rgba(96,165,250,0.2)]"
          >
            <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-white hover:text-blue-400 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600/10 group-hover:to-purple-600/10">
              <div className="flex items-center justify-between w-full">
                <span>{faq.question}</span>
                <div className="flex-shrink-0 ml-4">
                  <PlusCircle className="h-5 w-5 text-blue-400 accordion-plus" />
                  <MinusCircle className="h-5 w-5 text-blue-400 accordion-minus" />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300 bg-gradient-to-r from-blue-600/5 to-purple-600/5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/ui/header";
import { Card } from "@/components/ui/card";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What is an MVP and why do I need one?",
      answer: "An MVP (Minimum Viable Product) is a basic version of your product with core features that solve your target users' primary needs. It helps validate your business idea, gather user feedback, and attract early adopters or investors while minimizing initial development costs and time to market."
    },
    {
      question: "How long does it take to develop an MVP?",
      answer: "Typically, we can develop and launch an MVP in 4-8 weeks, depending on the complexity and features required. Our agile development process ensures quick iterations and regular updates, allowing you to test your product with real users as soon as possible."
    },
    {
      question: "What is your development process?",
      answer: "Our process includes: 1) Discovery & Strategy - understanding your goals and defining core features, 2) Design & Architecture - creating user-focused designs and technical plans, 3) Rapid Development - building your MVP using agile methodologies, 4) Testing & Launch - ensuring quality and successful deployment."
    },
    {
      question: "How much does MVP development cost?",
      answer: "MVP development costs vary based on features, complexity, and timeline. Our starter packages begin at $499 for basic MVPs, with professional packages at $2,499 for more complex solutions. We provide detailed quotes after understanding your specific requirements."
    },
    {
      question: "Do you provide support after launch?",
      answer: "Yes, we provide post-launch support and maintenance to ensure your MVP runs smoothly. Our support packages include bug fixes, performance monitoring, and essential updates. We can also help plan and implement future iterations based on user feedback."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, scalable technologies including React, Next.js, Node.js, and TypeScript for frontend and backend development. Our tech stack is chosen based on your specific needs and includes cloud services like AWS and Firebase for reliable hosting and scaling."
    },
    {
      question: "Can you help with my existing project?",
      answer: "Yes, we can help optimize, scale, or add features to your existing project. Our team will assess your current solution and provide recommendations for improvements while maintaining your core functionality."
    },
    {
      question: "What makes your MVP development different?",
      answer: "We focus on rapid development without compromising quality. Our approach combines technical expertise with business strategy, ensuring your MVP not only works well but also aligns with your business goals and user needs."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container px-4 mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our MVP development services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <h3 className="font-semibold text-lg">{item.question}</h3>
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-primary" />
                    ) : (
                      <Plus className="h-5 w-5 text-primary" />
                    )}
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-muted-foreground">{item.answer}</p>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
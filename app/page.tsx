"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Laptop, Rocket, Lightbulb, BarChart3, Search, PenTool, Repeat, DollarSign, Timer, HeartHandshake, Database, Code, Target, Scale, Users, LineChart, Shield, Clock, Heart, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/ui/header";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const techStack = [
    { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "TypeScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
    { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
    { name: "AWS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Firebase", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" },
    { name: "Docker", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-background"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-block">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                  MVP Development Experts
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Turn Your Vision Into a
                <span className="block mt-2 pb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Winning Product
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                We transform ideas into market-ready MVPs in weeks, not months. Validate faster, launch sooner, and scale smarter.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group" asChild>
                  <Link href="/contact">
                    Start Your MVP Journey
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">
                    View Pricing
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">98%</span>
                  <span className="text-muted-foreground">Success Rate</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">2 Weeks</span>
                  <span className="text-muted-foreground">Avg. MVP Launch</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">50+</span>
                  <span className="text-muted-foreground">MVPs Launched</span>
                </div>
              </div>
            </motion.div>

            {/* Updated Hero Image Section */}
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1630673287511-4d477913d7a0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="MVP Dashboard Preview"
                  className="rounded-2xl shadow-2xl border border-border"
                />
                <div className="absolute -bottom-4 -right-4 bg-background rounded-xl p-4 shadow-xl border border-border">
                  <div className="flex items-center gap-3">
                    
                    <span className="text-sm font-medium">Strategies for you</span>
                  </div>
                </div>
              </div>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="Development"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Team meeting"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800"
                  alt="Design process"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background" id="services">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive solutions to help your business thrive in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="h-10 w-10" />,
                title: "MVP Development",
                description: "Transform your idea into a working product with our rapid MVP development approach."
              },
              {
                icon: <Lightbulb className="h-10 w-10" />,
                title: "Proof of Concept",
                description: "Validate your ideas quickly with our PoC development services."
              },
              {
                icon: <BarChart3 className="h-10 w-10" />,
                title: "Product Strategy",
                description: "Define clear roadmaps and strategies for your digital product success."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50 dark:bg-secondary/5">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our MVP Development
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine speed, expertise, and innovation to build MVPs that stand out
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="h-10 w-10" />,
                title: "Rapid Development",
                description: "Launch your MVP in 2-4 weeks with our proven agile methodology"
              },
              {
                icon: <Target className="h-10 w-10" />,
                title: "Market Validation",
                description: "Test your ideas with real users and get actionable feedback"
              },
              {
                icon: <Scale className="h-10 w-10" />,
                title: "Scalable Architecture",
                description: "Built to grow with your success using enterprise-grade tech"
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Dedicated Team",
                description: "Work with experienced developers, designers, and product strategists"
              },
              {
                icon: <LineChart className="h-10 w-10" />,
                title: "Data-Driven Approach",
                description: "Make informed decisions with built-in analytics and metrics"
              },
              {
                icon: <Shield className="h-10 w-10" />,
                title: "Future-Proof",
                description: "Secure, maintainable, and ready for future iterations"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all border-primary/10 hover:border-primary/20">
                  <div className="mb-4 p-2 rounded-full bg-primary/10 w-fit text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        
        <div className="container px-4 mx-auto relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1 mb-4 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Our Methodology
            </span>
            <h2 className="text-4xl md:text-5xl pb-3 font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Building MVPs That Matter
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven approach combines speed, innovation, and market validation
            </p>
          </motion.div>

          {/* Rapid Validation Section with enhanced design */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative">
                <div className="absolute -left-6 -top-6 w-16 h-16 bg-accent/10 rounded-2xl rotate-6"></div>
                <div className="absolute -left-3 -top-3 w-16 h-16 bg-primary/10 rounded-2xl -rotate-3"></div>
                <h3 className="text-3xl font-bold mb-4 relative z-10">Rapid Validation & Testing</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in validating ideas quickly through real-world testing. Our approach focuses on getting your MVP in front of actual users as early as possible.
              </p>
              <ul className="space-y-6">
                {[
                  "User feedback integration from day one",
                  "Continuous testing and iteration",
                  "Data-driven decision making",
                  "Quick pivot capability"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-lg group-hover:text-primary transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl"></div>
              <div className="relative p-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2070"
                  alt="Team collaboration"
                  className="relative rounded-xl shadow-2xl transform transition-transform hover:scale-[1.02] duration-500"
                />
              </div>
            </motion.div>
          </div>

          {/* Success Metrics with enhanced cards */}
          <div className="grid md:grid-cols-4 gap-8 mb-32">
            {[
              {
                metric: "60%",
                label: "Faster Time to Market",
                icon: <Clock className="h-8 w-8" />
              },
              {
                metric: "85%",
                label: "Cost Reduction",
                icon: <DollarSign className="h-8 w-8" />
              },
              {
                metric: "95%",
                label: "Client Satisfaction",
                icon: <Heart className="h-8 w-8" />
              },
              {
                metric: "40+",
                label: "Industries Served",
                icon: <Building2 className="h-8 w-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-background to-primary/5">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {item.metric}
                  </div>
                  <div className="text-lg text-muted-foreground">{item.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technology Stack with enhanced design */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="relative p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                      alt="Modern technology"
                      className="rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="relative p-2 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                      alt="Development process"
                      className="rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <div className="relative p-2 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                      alt="Team collaboration"
                      className="rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -left-6 -top-6 w-16 h-16 bg-primary/10 rounded-2xl rotate-6"></div>
                <div className="absolute -left-3 -top-3 w-16 h-16 bg-accent/10 rounded-2xl -rotate-3"></div>
                <h3 className="text-3xl font-bold mb-4 relative z-10">Cutting-Edge Tech Stack</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We use the latest technologies to build scalable, secure, and high-performance MVPs that can grow with your business.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    title: "Frontend",
                    items: ["React", "Next.js", "Vue.js", "Tailwind CSS"]
                  },
                  {
                    title: "Backend",
                    items: ["Node.js", ".Net", "Php", "Python"]
                  },
                  {
                    title: "Database",
                    items: [ "MSSQL","MySql", "MongoDB", "PostgreSQL", "Firebase", "Redis"]
                  },
                  {
                    title: "DevOps",
                    items: ["AWS","Azure", "GCP", "Docker", "Kubernetes", "CI/CD"]
                  }
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <Card className="p-4 bg-gradient-to-br from-background to-primary/5">
                      <h4 className="font-semibold text-lg text-primary mb-3">{category.title}</h4>
                      <ul className="space-y-2">
                        {category.items.map((item, i) => (
                          <li key={i} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary/60"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section with Timeline */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container px-4 mx-auto relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our MVP Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to bring your product to market
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "Define core features and target audience through strategic planning",
                duration: "Week 1"
              },
              {
                step: "02",
                title: "Design & Architecture",
                description: "Create user-focused designs and scalable technical architecture",
                duration: "Week 1-2"
              },
              {
                step: "03",
                title: "Rapid Development",
                description: "Build core features using agile methodologies",
                duration: "Week 2-3"
              },
              {
                step: "04",
                title: "Testing & Launch",
                description: "Quality assurance and market deployment",
                duration: "Week 4"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2">
                  <Card className="p-6 relative">
                    <div className="absolute top-2 right-2 text-sm font-medium text-primary">
                      {phase.duration}
                    </div>
                    <div className="text-4xl font-bold text-primary mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </Card>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground z-10">
                  {phase.step}
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90"></div>
        <div className="container px-4 mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your MVP?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get your product to market in weeks, not months. Schedule a free consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground" asChild>
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
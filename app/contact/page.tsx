"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/ui/header";

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container px-4 mx-auto relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Your MVP Together
            </h1>
            <p className="text-xl text-muted-foreground">
              Schedule a free consultation and get started on your journey to a successful product launch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Type</label>
                    <select className="w-full p-2 rounded-md border border-input bg-background">
                      <option>MVP Development</option>
                      <option>Proof of Concept</option>                      
                      <option>Other</option>
                    </select>
                  </div>                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="Tell us about your project" rows={4} />
                  </div>
                  <Button className="w-full">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-muted-foreground">contact@yourcompany.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-2">Live Chat</h3>
                    <p className="text-muted-foreground">Available 24/7 for quick queries</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-2">Response Time</h3>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-2">Book a Call</h3>
                    <p className="text-muted-foreground mb-4">Schedule a free 30-minute consultation</p>
                    <Button variant="outline" className="w-full">
                      View Calendar
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
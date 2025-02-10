"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Users, BarChart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/ui/header";
import Link from "next/link";

export default function SuccessStories() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const successStories = [
    {
      name: "HealthTech Connect",
      type: "Healthcare MVP",
      duration: "6 weeks",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
      logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=200",
      description: "A revolutionary telemedicine platform connecting patients with specialists.",
      results: {
        users: "50K+",
        growth: "300%",
        timeToMarket: "6 weeks"
      },
      testimonial: {
        text: "LaunchPad Labs helped us validate our concept and launch in record time. Their MVP-first approach saved us months of development.",
        author: "Sarah Chen",
        position: "CEO, HealthTech Connect"
      }
    },
    {
      name: "FinFlow",
      type: "FinTech PoC",
      duration: "4 weeks",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070",
      logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=200",
      description: "AI-powered financial planning and investment management platform.",
      results: {
        users: "25K+",
        growth: "200%",
        timeToMarket: "4 weeks"
      },
      testimonial: {
        text: "The team's expertise in MVP development helped us secure our Series A funding. Their focus on core features was crucial.",
        author: "Michael Ross",
        position: "Founder, FinFlow"
      }
    },
    {
      name: "EcoTrack",
      type: "GreenTech MVP",
      duration: "8 weeks",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070",
      logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=200",
      description: "Sustainable supply chain tracking and carbon footprint monitoring.",
      results: {
        users: "100K+",
        growth: "400%",
        timeToMarket: "8 weeks"
      },
      testimonial: {
        text: "From concept to MVP in just 8 weeks. LaunchPad Labs helped us validate our market fit and scale rapidly.",
        author: "Emma Watson",
        position: "CTO, EcoTrack"
      }
    }
  ];

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
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've helped startups and enterprises launch successful MVPs and validate their ideas.
            </p>
          </motion.div>

          <div className="space-y-20">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
                  <Card className="relative overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-[420px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={story.logo}
                          alt={`${story.name} logo`}
                          className="w-12 h-12 rounded-full bg-white"
                        />
                        <div className="text-white">
                          <h3 className="font-semibold">{story.name}</h3>
                          <p className="text-sm opacity-90">{story.type}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">{story.name}</h2>
                    <p className="text-muted-foreground">{story.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <Card className="p-4 text-center">
                      <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <div className="font-bold">{story.results.users}</div>
                      <div className="text-sm text-muted-foreground">Users</div>
                    </Card>
                    <Card className="p-4 text-center">
                      <BarChart className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <div className="font-bold">{story.results.growth}</div>
                      <div className="text-sm text-muted-foreground">Growth</div>
                    </Card>
                    <Card className="p-4 text-center">
                      <Clock className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <div className="font-bold">{story.results.timeToMarket}</div>
                      <div className="text-sm text-muted-foreground">Launch Time</div>
                    </Card>
                  </div>

                  <Card className="p-6 bg-primary/5">
                    <div className="flex gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="italic mb-4">{story.testimonial.text}</p>
                    <div>
                      <div className="font-semibold">{story.testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{story.testimonial.position}</div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center"
          >
            <Card className="p-8 bg-primary text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4">Ready to Build Your Success Story?</h2>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Join our growing list of successful launches and transformative MVPs.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
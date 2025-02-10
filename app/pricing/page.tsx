"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/ui/header";
import Link from "next/link";

export default function Pricing() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const plans = [
    {
      name: "Starter MVP",
      price: "499",
      duration: "1 weeks",
      features: [
        "Core Feature Development",
        "Basic UI/UX Design",
        "Essential Analytics",
        "Basic Security Features",
        "1 Month Support",
        "Cloud Hosting Setup"
      ]
    },
    {
      name: "Professional",
      price: "1,999",
      duration: "4 weeks",
      popular: true,
      features: [
        "Advanced Feature Set",
        "Premium UI/UX Design",
        "Advanced Analytics",
        "Enhanced Security",
        "3 Months Support",
        "Cloud Hosting Setup",
        "Performance Optimization",
        "API Integration"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "Custom",
      features: [
        "Full Feature Development",
        "Custom UI/UX Design",
        "Advanced Analytics Suite",
        "Enterprise Security",
        "12 Months Support",
        "Custom Infrastructure",
        "Scaling Strategy",
        "Dedicated Team"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Pricing for Your MVP
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan to bring your vision to life. All plans include our core MVP development methodology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-6 ${plan.popular ? 'border-primary' : ''} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold mb-2">
                      ${plan.price}
                    </div>
                    <p className="text-muted-foreground">{plan.duration}</p>
                  </div>
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>                  
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />                  
                  </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>

         {/*  <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Need a custom solution? Let's discuss your specific requirements.
            </p>
            <Button variant="outline">
              Contact Sales
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div> */}
        </div>
      </section>
    </div>
  );
} 
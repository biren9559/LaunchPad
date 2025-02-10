"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";

export default function Privacy() {
  const sections = [
    {
      title: "Introduction",
      content: "This Privacy Policy explains how LaunchPad Labs ('we', 'us', 'our') collects, uses, and protects your personal information when you use our services. We are committed to ensuring your privacy is protected and maintaining the security of any personal information received from you."
    },
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, including: name, email address, phone number, company details, and project requirements. We also automatically collect certain information about your device, including: IP address, browser type, operating system, and usage patterns."
    },
    {
      title: "How We Use Your Information",
      content: "We use the collected information to: provide and improve our services, communicate with you about our services, send you technical notices and updates, respond to your comments and questions, and protect our rights and prevent fraud."
    },
    {
      title: "Information Sharing",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and serving our clients, subject to confidentiality agreements."
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    },
    {
      title: "Your Rights",
      content: "You have the right to: access your personal information, correct inaccurate data, request deletion of your data, object to processing of your data, and request transfer of your data. Contact us to exercise these rights."
    },
    {
      title: "Cookies",
      content: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent."
    },
    {
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date."
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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sections.length * 0.1 }}
              className="pt-8"
            >
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@launchpadlabs.com" className="text-primary hover:underline">
                  privacy@launchpadlabs.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 
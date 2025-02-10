"use client";

import { Rocket, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

export function Footer() {
  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" }
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Content */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">LaunchPad Labs</span>
            </Link>
            <p className="text-muted-foreground">
              Transform your ideas into market-ready MVPs in weeks. Fast, reliable, and scalable development for startups and enterprises.
            </p>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-3">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <span>contact@launchpadlabs.com</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>123 Innovation Street, Tech City</span>
              </li>
            </ul>
            <Button className="mt-6" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} LaunchPad Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 
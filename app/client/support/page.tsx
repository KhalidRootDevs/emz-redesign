"use client";

import type React from "react";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Send,
  MessageCircle,
  Clock,
  HeadphonesIcon,
  Zap,
  Shield,
} from "lucide-react";
import FAQ from "../faq/page";
import FAQPage from "../faq/FAQ-Page";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const supportFeatures = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs",
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Typically respond within 2-4 hours",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your information is always protected",
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Help",
      description: "Knowledgeable support team",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8E62A]/10 border border-[#C8E62A]/20">
            <HeadphonesIcon className="w-4 h-4 text-[#C8E62A]" />
            <span className="text-sm font-medium text-[#C8E62A]">
              Customer Support
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-balance bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            How Can We Help You?
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Get instant help and support from our dedicated team
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border/50 hover:border-[#C8E62A]/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#C8E62A]/10 mb-4 group-hover:bg-[#C8E62A]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#C8E62A]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <Card className="lg:col-span-2 p-4 lg:p-8 border-border/50 shadow-lg">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Send us a message
                </h2>
                <p className="text-muted-foreground mt-2">
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="h-12 border-border focus:border-[#C8E62A] focus:ring-[#C8E62A]/20 transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="h-12 border-border focus:border-[#C8E62A] focus:ring-[#C8E62A]/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-foreground"
                  >
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="h-12 border-border focus:border-[#C8E62A] focus:ring-[#C8E62A]/20 transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your issue in detail..."
                    rows={6}
                    required
                    className="border-border focus:border-[#C8E62A] focus:ring-[#C8E62A]/20 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-black font-semibold text-lg py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5 mr-3" />
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-4 border-border/50 shadow-lg">
              <h3 className="text-xl font-bold text-foreground">
                Contact Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
                  <div className="w-12 h-12 bg-[#C8E62A]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#C8E62A]/20 transition-colors">
                    <Mail className="w-6 h-6 text-[#C8E62A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Email Support
                    </p>
                    <a
                      href="mailto:support@emzsports.com"
                      className="text-[#C8E62A] hover:underline font-medium transition-colors"
                    >
                      support@emzsports.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Telegram Channel
                    </p>
                    <a
                      href="https://t.me/emzsports_support"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline font-medium transition-colors"
                    >
                      @emzsports_support
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Tips */}
            <Card className="p-6 border-border/50">
              <h4 className="font-semibold text-foreground mb-4">Quick Tips</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#C8E62A] rounded-full mt-1.5 shrink-0" />
                  <span>Include your account email for faster resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#C8E62A] rounded-full mt-1.5 shrink-0" />
                  <span>
                    Describe the issue in detail with any error messages
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#C8E62A] rounded-full mt-1.5 shrink-0" />
                  <span>Attach screenshots if possible (via email)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#C8E62A] rounded-full mt-1.5 shrink-0" />
                  <span>Check our FAQ section for common solutions</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        <FAQPage />
      </div>
    </div>
  );
}

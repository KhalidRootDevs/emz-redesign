import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const faqs = [
  {
    id: "672b2c17ea39c4d2bb4d9260",
    question: "How can I remove pop ups?",
    answer:
      "To remove pop ups, please upgrade your account by purchasing a package. If you are already a VIP member and the pop ups still appear, please contact our customer service for support.",
    defaultOpen: true,
    status: "active",
    position: 1,
  },
  {
    id: "672b2c3cea39c4d2bb4d9274",
    question: "How can I watch fullscreen?",
    answer:
      "To watch fullscreen, please upgrade your account by purchasing a package. If you are already a VIP member and still cannot watch fullscreen, please contact our customer service for support.",
    defaultOpen: false,
    status: "active",
    position: 2,
  },
  {
    id: "672b2c93ea39c4d2bb4d92b3",
    question: "Can I use 1 account on 2 or more devices?",
    answer:
      "Yes! You can use your account on multiple devices including mobile phones, tablets, and laptops. However, you can only stream on one device at a time to ensure optimal performance for all users.",
    defaultOpen: false,
    status: "active",
    position: 3,
  },
  {
    id: "672b2d87ea39c4d2bb4d92d5",
    question: "Can I still watch after I cancel my subscription?",
    answer:
      "When you cancel your subscription, you will be able to continue watching until the end of your current billing period. After that, you will no longer have access to premium features and live streams.",
    defaultOpen: false,
    status: "active",
    position: 4,
  },
  {
    id: "1",
    question: "What sports and leagues do you cover?",
    answer:
      "We cover a wide range of sports including football, basketball, tennis, cricket, and more. Our platform features major leagues like Premier League, Champions League, La Liga, NBA, NFL, and many other international competitions.",
  },
  {
    id: "2",
    question: "Do I need a subscription to watch live matches?",
    answer:
      "Yes, live streaming is available exclusively for paid subscribers. Free users can access match updates, highlights, and basic features, but live matches require an active subscription.",
  },
  {
    id: "3",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards through Stripe, as well as various cryptocurrencies including Bitcoin, Ethereum, USDT, and more. All payments are processed securely with encryption.",
  },
  {
    id: "4",
    question: "How do I create an account?",
    answer:
      "You can easily create an account using your email address or by signing in with your Google account. The process takes less than a minute and you'll have immediate access to free features.",
  },
];

export default function FAQPage() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(
    "672b2c17ea39c4d2bb4d9260"
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently asked questions
          </h1>
          <p className="text-xl text-gray-300">
            Answers to the most frequently asked questions.
          </p>
        </div>

        {/* FAQ Items - Simple List Design */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-gray-700 pb-6 last:border-b-0"
            >
              <button
                className="w-full flex items-center justify-between text-left py-4 group"
                onClick={() =>
                  setOpenFaqId(openFaqId === faq.id ? null : faq.id)
                }
              >
                <span className="text-lg font-semibold text-white group-hover:text-[#C8E62A] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#C8E62A] transition-transform duration-300 shrink-0 ml-4 ${
                    openFaqId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openFaqId === faq.id
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300 text-base leading-relaxed pb-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <Card className="mt-16 bg-gray-800 border-gray-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            Can't find the answer you're looking for? Please contact our
            friendly team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/client/support"
              className="bg-[#C8E62A] text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-[#C8E62A]/90 transition-colors duration-200"
            >
              Contact support
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

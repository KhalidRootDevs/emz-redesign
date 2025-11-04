"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Crown,
  CreditCard,
  Coins,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FAQPage from "../faq/FAQ-Page";

const subscriptionsData = [
  {
    _id: "6767bdb3f87a4d0d4924ae22",
    title: "1 Month",
    packageDetails: "25% off. Get uninterrupted streaming for one month.",
    durationType: "monthly",
    duration: 1,
    price: 20,
    salePrice: 10,
    providers: [
      {
        name: "stripe",
        displayName: "Card",
        icon: "",
        description:
          "Make secure payments with Stripe. Once your payment is completed, your account will be updated within a minute.",
        images: [
          "visa.svg",
          "mastercard.svg",
          "americanexpress.svg",
          "maestro.png",
        ],
        status: "on",
      },
      {
        name: "crypto",
        displayName: "Crypto",
        icon: "",
        description:
          "Pay using cryptocurrencies such as ETH, BTC, USDT, USDC, or BNB.",
        images: ["btc.svg", "bnb.svg", "ethereum.svg", "usdt.svg"],
        status: "on",
      },
    ],
    status: "active",
    descriptions: [
      "Unlimited access to all videos",
      "Priority customer support",
      "Ad-free experience",
      "HD video",
    ],
    discount: 50,
    currency: "USD",
    deviceLimit: 2,
    support: "priority",
    featured: false,
    subscriptionType: "universal",
  },
  {
    _id: "6889f2e5d356b0bfcffc774e",
    title: "Premier League",
    packageDetails: "Watch every Premier League match live or catch up anytime",
    durationType: "monthly",
    duration: 30,
    price: 39.99,
    salePrice: 39.99,
    providers: [
      {
        name: "stripe",
        displayName: "Stripe",
        icon: "",
        description:
          "Make secure payments with Stripe. Once your payment is completed, your account will be updated within a minute.",
        images: [
          "visa.svg",
          "mastercard.svg",
          "americanexpress.svg",
          "elco.svg",
          "maestro.png",
        ],
        status: "on",
      },
    ],
    status: "active",
    descriptions: [
      "Full Premier League season match access",
      "24/7 dedicated support",
      "Watch on any device",
      "No ads/popups",
      "Access to fan community features",
    ],
    discount: 0,
    currency: "USD",
    deviceLimit: 2,
    support: "priority",
    featured: true,
    league: {
      _id: "686220b76dd45d70cdc633c5",
      uId: 39,
      name: "Premier League",
      image: "https://media.api-sports.io/football/leagues/39.png",
      position: 2,
    },
    subscriptionType: "league",
    leagueId: 39,
  },
  {
    _id: "6889f12ad356b0bfcffc7731",
    title: "Champion League",
    packageDetails: "Watch every La Liga match live or catch up anytime",
    durationType: "monthly",
    duration: 30,
    price: 39.99,
    salePrice: 39.99,
    providers: [
      {
        name: "stripe",
        displayName: "Stripe",
        icon: "",
        description:
          "Make secure payments with Stripe. Once your payment is completed, your account will be updated within a minute.",
        images: ["visa.svg"],
        status: "on",
      },
      {
        name: "crypto",
        displayName: "Crypto",
        icon: "",
        description:
          "Pay using cryptocurrencies such as ETH, BTC, USDT, USDC, or BNB.",
        images: ["btc.svg"],
        status: "on",
      },
    ],
    status: "active",
    descriptions: [
      "access to all La Liga matches",
      "24/7 dedicated support",
      "English commentary",
      "No ads/popups",
    ],
    discount: 0,
    currency: "USD",
    deviceLimit: 2,
    support: "priority",
    featured: true,
    league: {
      _id: "686220a36dd45d70cdc633b7",
      uId: 2,
      name: "UEFA Champions League",
      image: "https://media.api-sports.io/football/leagues/2.png",
      position: 4,
    },
    subscriptionType: "league",
    leagueId: 2,
  },
];

export default function PricingPage() {
  const featuredPlan = subscriptionsData.find((plan) => plan.featured);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(
    featuredPlan?._id || null
  );
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);
  const [termsAccepted, setTermsAccepted] = useState(true); // Default to true since checkbox is removed

  const selectedPlanData = subscriptionsData.find(
    (plan) => plan._id === selectedPlan
  );

  // Set first payment method as default when plan changes
  useEffect(() => {
    if (selectedPlanData && selectedPlanData.providers.length > 0) {
      setSelectedPaymentMethod(selectedPlanData.providers[0].name);
    }
  }, [selectedPlanData]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8E62A]/10 border border-[#C8E62A]/20">
            <Crown className="w-4 h-4 text-[#C8E62A]" />
            <span className="text-sm font-medium text-[#C8E62A]">
              Premium Plans
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the perfect subscription plan for your sports streaming needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {subscriptionsData.map((plan) => (
            <Card
              key={plan._id}
              className={`relative p-4 transition-all duration-300 cursor-pointer group overflow-hidden border-none rounded-xl ${
                plan.featured
                  ? "bg-[#C8E62A] shadow-lg scale-[1.02]"
                  : "bg-[#C8E62A] hover:shadow-md"
              } ${
                selectedPlan === plan._id
                  ? "ring-2 ring-white ring-opacity-60"
                  : ""
              }`}
              onClick={() => {
                setSelectedPlan(plan._id);
                // Payment method will be auto-selected via useEffect
              }}
            >
              {/* Header with badges */}
              <div className="flex justify-between items-start mb-3">
                {/* Featured Badge - Left aligned */}
                {plan.featured && (
                  <Badge className="bg-gray-900 text-white px-2 py-1 text-xs font-semibold border-none whitespace-nowrap">
                    <Crown className="w-3 h-3 mr-1" />
                    POPULAR
                  </Badge>
                )}

                {/* Discount Badge - Right aligned */}
                {plan.discount > 0 && (
                  <Badge className="bg-red-500 text-white px-2 py-1 text-xs font-bold border-none whitespace-nowrap">
                    {plan.discount}% OFF
                  </Badge>
                )}
              </div>

              {/* Selected Badge - Absolute Position */}
              {selectedPlan === plan._id && (
                <div className="absolute top-2 right-2 z-10">
                  <div className="flex items-center justify-center gap-1.5 font-semibold text-xs py-1.5 px-3 rounded-full bg-gray-900 text-white shadow-lg">
                    <Check className="w-3 h-3" />
                    Selected
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {/* League Logo */}
                {plan.league && (
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 relative">
                      <Image
                        src={plan.league.image || "/placeholder.svg"}
                        alt={plan.league.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* Plan Title */}
                <div className="text-center space-y-1">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-gray-700 leading-tight line-clamp-2 min-h-8">
                    {plan.packageDetails}
                  </p>
                </div>

                {/* Pricing - More compact */}
                <div className="text-center space-y-0.5">
                  <div className="flex items-center justify-center gap-1.5">
                    {plan.discount > 0 && (
                      <span className="text-sm text-gray-600 line-through">
                        ${plan.price}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-gray-900">
                      ${plan.salePrice}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">
                    per {plan.durationType === "monthly" ? "month" : "year"}
                  </p>
                </div>

                {/* Features - More compact */}
                <div className="space-y-2 py-1">
                  {plan.descriptions.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-800 leading-tight line-clamp-2">
                        {feature}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-800">
                      Up to {plan.deviceLimit} devices
                    </span>
                  </div>
                </div>

                {/* Removed the inline selection indicator to prevent height shifting */}
              </div>
            </Card>
          ))}
        </div>

        {/* Payment Method Selection Card */}
        {selectedPlan && selectedPlanData && (
          <Card className="p-6 bg-gray-800 rounded-xl border-gray-700 shadow-lg mb-6">
            <div className="space-y-5">
              {/* Header - More compact */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">
                    Complete Subscription
                  </h3>
                  <p className="text-gray-400 text-sm mt-0.5">
                    Pay for{" "}
                    <span className="font-semibold text-[#C8E62A]">
                      {selectedPlanData.title}
                    </span>
                  </p>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-2xl font-bold text-[#C8E62A]">
                    ${selectedPlanData.salePrice}
                  </p>
                  <p className="text-xs text-gray-400">
                    per{" "}
                    {selectedPlanData.durationType === "monthly"
                      ? "month"
                      : "year"}
                  </p>
                </div>
              </div>

              {/* Payment Methods - Compact grid */}
              <div className="grid grid-cols-1 gap-3">
                {selectedPlanData.providers.map((provider) => (
                  <Card
                    key={provider.name}
                    className={`p-4 cursor-pointer transition-all duration-200 group relative overflow-hidden border rounded-xl ${
                      selectedPaymentMethod === provider.name
                        ? "border-[#C8E62A] bg-gray-750 shadow-md"
                        : "border-gray-600 bg-gray-800 hover:border-gray-500 hover:bg-gray-750"
                    }`}
                    onClick={() => setSelectedPaymentMethod(provider.name)}
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${
                          selectedPaymentMethod === provider.name
                            ? "bg-[#C8E62A] text-gray-900 scale-110"
                            : "bg-gray-700 text-gray-300 group-hover:bg-gray-600"
                        }`}
                      >
                        {provider.name === "stripe" ? (
                          <CreditCard className="w-5 h-5" />
                        ) : (
                          <Coins className="w-5 h-5" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-white text-base truncate">
                            {provider.displayName}
                          </h4>
                          {selectedPaymentMethod === provider.name && (
                            <div className="w-5 h-5 rounded-full bg-[#C8E62A] flex items-center justify-center shrink-0 ml-2">
                              <Check className="w-3 h-3 text-gray-900" />
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mb-2 line-clamp-1">
                          {provider.description}
                        </p>
                        <div className="flex gap-1.5">
                          {provider.images.map((image, index) => (
                            <div
                              key={index}
                              className="w-8 h-6 relative bg-white rounded border shadow-xs overflow-hidden shrink-0"
                            >
                              <Image
                                src={`/.jpg?key=bjbwn&height=24&width=32&query=${image}`}
                                alt={image}
                                fill
                                className="object-contain p-0.5"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Terms - Text only without checkbox */}
              <div className="text-center p-3 bg-gray-750 rounded-lg">
                <p className="text-xs text-gray-300">
                  By proceeding you agree to our{" "}
                  <Link
                    href="/terms"
                    className="text-[#C8E62A] hover:underline font-medium"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-[#C8E62A] hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>

              {/* Payment Button - More compact */}
              <Button
                className="w-full bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-gray-900 font-semibold text-base py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed border-none"
                size="lg"
                disabled={!selectedPaymentMethod}
              >
                Confirm & Pay ${selectedPlanData.salePrice}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        )}

        <FAQPage />
      </div>
    </div>
  );
}

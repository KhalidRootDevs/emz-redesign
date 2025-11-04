import React, { useState } from "react";
import { Card } from "./ui/card";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const bannerSlides = [
  {
    id: 1,
    team1: {
      name: "Manchester City",
      logo: "https://media.api-sports.io/football/teams/50.png",
    },
    team2: {
      name: "Arsenal",
      logo: "https://media.api-sports.io/football/teams/42.png",
    },
    league: {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/39.png",
    },
    date: "Feb 10, 2025",
    time: "15:00",
    isLive: true,
  },
  {
    id: 2,
    team1: {
      name: "Real Madrid",
      logo: "https://media.api-sports.io/football/teams/541.png",
    },
    team2: {
      name: "Barcelona",
      logo: "https://media.api-sports.io/football/teams/529.png",
    },
    league: {
      name: "La Liga",
      logo: "https://media.api-sports.io/football/leagues/140.png",
    },
    date: "Feb 12, 2025",
    time: "20:00",
    isLive: false,
  },
  {
    id: 3,
    team1: {
      name: "Liverpool",
      logo: "https://media.api-sports.io/football/teams/40.png",
    },
    team2: {
      name: "Chelsea",
      logo: "https://media.api-sports.io/football/teams/49.png",
    },
    league: {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/39.png",
    },
    date: "Feb 15, 2025",
    time: "17:30",
    isLive: false,
  },
];

export default function HotMatchesBanner() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const nextBanner = () => {
    setCurrentBannerIndex((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevBanner = () => {
    setCurrentBannerIndex(
      (prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length
    );
  };

  const currentBanner = bannerSlides[currentBannerIndex];

  return (
    <Card className="bg-[#C8E62A] rounded-2xl overflow-hidden relative">
      {/* Live Badge */}
      {currentBanner.isLive && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-red-600 px-3 py-1.5 rounded-full z-10 shadow-lg">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          <span className="text-xs font-bold text-white uppercase tracking-wide">
            LIVE
          </span>
        </div>
      )}

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center gap-4 p-6">
        {/* Left Sidebar with Navigation Dots */}
        <div className="flex flex-col items-center gap-2 bg-gray-900 rounded-md p-3">
          <button
            onClick={prevBanner}
            className="p-1.5 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Previous banner"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <div className="flex flex-col gap-1.5 py-2">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBannerIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentBannerIndex ? "bg-[#C8E62A]" : "bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextBanner}
            className="p-1.5 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Next banner"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex items-center justify-between gap-4 flex-1">
          {/* Team 1 */}
          <div className="flex items-center gap-3 flex-1">
            <Image
              src={currentBanner.team1.logo || "/placeholder.svg"}
              alt={currentBanner.team1.name}
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <p className="font-bold text-gray-900 text-lg">
              {currentBanner.team1.name}
            </p>
          </div>

          {/* Center - League & Date/Time or Watch Button */}
          <div className="flex flex-col items-center gap-2 px-6">
            <div className="flex items-center gap-2">
              <Image
                src={currentBanner.league.logo || "/placeholder.svg"}
                alt={currentBanner.league.name}
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <span className="font-semibold text-gray-900 text-sm">
                {currentBanner.league.name}
              </span>
            </div>
            {currentBanner.isLive ? (
              <Button
                size="sm"
                className="bg-gray-900 hover:bg-gray-800 text-[#C8E62A] h-8 px-4 font-semibold"
              >
                <Play className="w-3 h-3 mr-1" />
                Watch Now
              </Button>
            ) : (
              <div className="text-center">
                <p className="text-xs text-gray-700">{currentBanner.date}</p>
                <p className="text-sm font-bold text-gray-900">
                  {currentBanner.time}
                </p>
              </div>
            )}
          </div>

          {/* Team 2 */}
          <div className="flex items-center gap-3 flex-1 justify-end">
            <p className="font-bold text-gray-900 text-lg">
              {currentBanner.team2.name}
            </p>
            <Image
              src={currentBanner.team2.logo || "/placeholder.svg"}
              alt={currentBanner.team2.name}
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex items-center gap-3 p-4">
          {/* Navigation Arrows - Mobile */}
          <div className="flex items-center gap-1">
            <button
              onClick={prevBanner}
              className="p-1.5 hover:bg-gray-900/10 rounded-lg transition-colors"
              aria-label="Previous banner"
            >
              <ChevronLeft className="w-4 h-4 text-gray-900" />
            </button>
            <button
              onClick={nextBanner}
              className="p-1.5 hover:bg-gray-900/10 rounded-lg transition-colors"
              aria-label="Next banner"
            >
              <ChevronRight className="w-4 h-4 text-gray-900" />
            </button>
          </div>

          {/* League Info */}
          <div className="flex items-center gap-2 flex-1">
            <Image
              src={currentBanner.league.logo || "/placeholder.svg"}
              alt={currentBanner.league.name}
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
            <span className="font-semibold text-gray-900 text-sm">
              {currentBanner.league.name}
            </span>
          </div>

          {/* Navigation Dots - Mobile */}
          <div className="flex gap-1.5">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBannerIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentBannerIndex
                    ? "bg-gray-900"
                    : "bg-gray-900/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Teams - Mobile */}
        <div className="flex items-center justify-between px-4 pb-3">
          {/* Team 1 */}
          <div className="flex items-center gap-2 flex-1">
            <Image
              src={currentBanner.team1.logo || "/placeholder.svg"}
              alt={currentBanner.team1.name}
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <p className="font-bold text-gray-900 text-sm truncate">
              {currentBanner.team1.name}
            </p>
          </div>

          {/* VS Separator */}
          <div className="px-2">
            <span className="text-xs font-bold text-gray-900">VS</span>
          </div>

          {/* Team 2 */}
          <div className="flex items-center gap-2 flex-1 justify-end">
            <p className="font-bold text-gray-900 text-sm truncate text-right">
              {currentBanner.team2.name}
            </p>
            <Image
              src={currentBanner.team2.logo || "/placeholder.svg"}
              alt={currentBanner.team2.name}
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* Date/Time or Watch Button - Mobile Bottom */}
        <div className="border-t border-gray-900/20 px-4 py-3">
          {currentBanner.isLive ? (
            <Button
              size="sm"
              className="w-full bg-gray-900 hover:bg-gray-800 text-[#C8E62A] font-semibold py-2"
            >
              <Play className="w-3 h-3 mr-1" />
              Watch Live
            </Button>
          ) : (
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <p className="text-xs text-gray-700">{currentBanner.date}</p>
                <p className="text-sm font-bold text-gray-900">
                  {currentBanner.time}
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#C8E62A] ml-2"
              >
                Details
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

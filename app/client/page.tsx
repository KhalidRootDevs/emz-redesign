"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Play, Info } from "lucide-react";
import Image from "next/image";
import SponsoredApps from "@/components/sponsored-apps";
import UpcomingMatches from "@/components/upcoming-matches";
import HotMatchesBanner from "@/components/hot-matches-banner";
import LiveMatchSlider from "@/components/live-match-slider";
import { LiveMatchesList } from "@/components/live-matches-list";

export default function HomePage() {
  const [currentHotMatchIndex, setCurrentHotMatchIndex] = useState(0);

  const liveMatches = [
    {
      id: "6902e8bb2bb1abfe1fe7c411",
      name: "Pro League",
      matchId: 1762610892610,
      fixtureId: 1435971,
      league: {
        id: 307,
        name: "Pro League",
        image: "https://media.api-sports.io/football/leagues/307.png",
      },
      startingAt: "1767139200",
      startingAtTimestamps: 1767139200,
      matchType: "normal",
      participants: [
        {
          id: 2956,
          name: "Damac",
          image: "https://media.api-sports.io/football/teams/2956.png",
          score: 2,
        },
        {
          id: 2931,
          name: "Al-Fateh",
          image: "https://media.api-sports.io/football/teams/2931.png",
          score: 1,
        },
      ],
      status: "active",
      liveStatus: true,
      position: 99999,
      dateOnly: "2025-02-01",
    },
    {
      id: "6902e8bb2bb1abfe1fe7c412",
      name: "Pro League",
      matchId: 1762610892611,
      fixtureId: 1435972,
      league: {
        id: 307,
        name: "Pro League",
        image: "https://media.api-sports.io/football/leagues/307.png",
      },
      startingAt: "1767146400",
      startingAtTimestamps: 1767146400,
      matchType: "normal",
      participants: [
        {
          id: 2932,
          name: "Al-Hilal Saudi FC",
          image: "https://media.api-sports.io/football/teams/2932.png",
          score: 3,
        },
        {
          id: 2929,
          name: "Al-Ahli Jeddah",
          image: "https://media.api-sports.io/football/teams/2929.png",
          score: 2,
        },
      ],
      status: "active",
      liveStatus: true,
      position: 99999,
      dateOnly: "2025-02-01",
    },
  ];

  const formatMatchTime = (timestamp: string) => {
    const date = new Date(Number.parseInt(timestamp) * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Hero & Matches */}
        <div className="lg:col-span-2 space-y-6">
          <HotMatchesBanner />

          {/* Mobile Live Match Slider */}
          <LiveMatchSlider
            matches={liveMatches}
            currentMatchIndex={currentHotMatchIndex}
            onMatchChange={setCurrentHotMatchIndex}
            formatMatchTime={formatMatchTime}
            isMobile={true}
          />

          {/* Live Match List */}
          <LiveMatchesList matches={liveMatches} />

          {/* Upcoming Matches */}
          <UpcomingMatches />
        </div>

        {/* Right Column - Hot Matches & Sponsored Apps */}
        <div className="space-y-6">
          {/* Desktop Live Match Slider */}
          <LiveMatchSlider
            matches={liveMatches}
            currentMatchIndex={currentHotMatchIndex}
            onMatchChange={setCurrentHotMatchIndex}
            formatMatchTime={formatMatchTime}
            isMobile={false}
          />

          <SponsoredApps />
        </div>
      </div>
    </div>
  );
}

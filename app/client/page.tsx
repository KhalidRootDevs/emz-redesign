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
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Live Match</h3>
            <Card className="rounded-md divide-y divide-gray-800 border-gray-700">
              {liveMatches.map((match, index) => (
                <div
                  key={match.id}
                  className="hover:bg-gray-750 transition-colors"
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Image
                          src={match.league.image || "/placeholder.svg"}
                          alt={match.league.name}
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                        <span className="text-sm font-semibold text-gray-300">
                          {match.league.name}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="bg-red-600 hover:bg-red-700 text-white h-8 text-xs px-3"
                      >
                        <Play className="w-3 h-3 mr-1" />
                        Watch Now
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                        <div className="w-10 h-10 bg-gray-700 rounded-lg p-1.5">
                          <Image
                            src={
                              match.participants[0].image || "/placeholder.svg"
                            }
                            alt={match.participants[0].name}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-base font-semibold text-white">
                          {match.participants[0].name}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 px-4">
                        <span className="text-xl font-bold text-white">
                          {match.participants[0].score}
                        </span>
                        <span className="text-gray-500 text-lg">:</span>
                        <span className="text-xl font-bold text-white">
                          {match.participants[1].score}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 flex-1 justify-end">
                        <span className="text-base font-semibold text-white">
                          {match.participants[1].name}
                        </span>
                        <div className="w-10 h-10 bg-gray-700 rounded-lg p-1.5">
                          <Image
                            src={
                              match.participants[1].image || "/placeholder.svg"
                            }
                            alt={match.participants[1].name}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          </div>

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

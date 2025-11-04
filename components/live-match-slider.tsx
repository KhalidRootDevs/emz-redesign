"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Info } from "lucide-react";
import Image from "next/image";

interface Team {
  id: number;
  name: string;
  image: string;
  score: number;
}

interface League {
  id: number;
  name: string;
  image: string;
}

interface Match {
  id: string;
  name: string;
  league: League;
  startingAt: string;
  participants: Team[];
  liveStatus: boolean;
}

interface LiveMatchSliderProps {
  matches: Match[];
  currentMatchIndex: number;
  onMatchChange: (index: number) => void;
  formatMatchTime: (timestamp: string) => string;
  isMobile?: boolean;
}

export default function LiveMatchSlider({
  matches,
  currentMatchIndex,
  onMatchChange,
  formatMatchTime,
  isMobile = false,
}: LiveMatchSliderProps) {
  const currentMatch = matches[currentMatchIndex];

  return (
    <Card
      className={`p-5 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-2xl ${
        isMobile ? "lg:hidden" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-[#C8E62A] rounded-full"></div>
          <div>
            <h3 className="font-bold text-xl text-white">Live Now</h3>
            <p className="text-sm text-gray-400">Matches in progress</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-gray-700 rounded-lg p-1">
          <button
            onClick={() =>
              onMatchChange(
                (currentMatchIndex - 1 + matches.length) % matches.length
              )
            }
            className="p-2 hover:bg-gray-600 rounded-md transition-all duration-200 hover:scale-105"
            aria-label="Previous match"
          >
            <ChevronLeft className="w-4 h-4 text-gray-300" />
          </button>
          <div className="px-2 min-w-8 text-center">
            <span className="text-sm font-semibold text-[#C8E62A]">
              {currentMatchIndex + 1}
            </span>
            <span className="text-xs text-gray-400">/{matches.length}</span>
          </div>
          <button
            onClick={() =>
              onMatchChange((currentMatchIndex + 1) % matches.length)
            }
            className="p-2 hover:bg-gray-600 rounded-md transition-all duration-200 hover:scale-105"
            aria-label="Next match"
          >
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </button>
        </div>
      </div>

      {/* Match Card */}
      <div className="bg-gradient-to-br from-gray-750 to-gray-800 rounded-md p-5 mb-4 border border-gray-600 shadow-lg relative overflow-hidden">
        {/* Live Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-red-600 px-3 py-1 rounded-full">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          <span className="text-xs font-bold text-white uppercase tracking-wide">
            LIVE
          </span>
        </div>

        {/* League Info */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-5 h-5 relative">
            <Image
              src={currentMatch.league.image || "/placeholder.svg"}
              alt={currentMatch.league.name}
              fill
              className="object-contain"
            />
          </div>
          <span className="text-sm font-medium text-gray-300">
            {currentMatch.league.name}
          </span>
        </div>

        {/* Teams & Score - Responsive Layout */}
        <div className="grid grid-cols-3 items-center gap-4">
          {/* Team 1 */}
          <div className="text-center">
            <div
              className={`${
                isMobile ? "w-16 h-16" : "w-12 h-12 lg:w-16 lg:h-16"
              } mx-auto mb-3 bg-gray-700 rounded-md p-2 border-2 border-gray-600`}
            >
              <Image
                src={currentMatch.participants[0].image || "/placeholder.svg"}
                alt={currentMatch.participants[0].name}
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
            <p className="font-semibold text-white text-sm leading-tight line-clamp-2">
              {currentMatch.participants[0].name}
            </p>
          </div>

          {/* Score */}
          <div className="text-center">
            <div>
              <div className="flex items-center justify-center gap-2">
                <span
                  className={`${
                    isMobile ? "text-2xl" : "text-xl lg:text-2xl"
                  } font-bold text-white`}
                >
                  {currentMatch.participants[0].score}
                </span>
                <span className="text-lg font-bold text-gray-400">:</span>
                <span
                  className={`${
                    isMobile ? "text-2xl" : "text-xl lg:text-2xl"
                  } font-bold text-white`}
                >
                  {currentMatch.participants[1].score}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="w-1.5 h-1.5 bg-[#C8E62A] rounded-full"></div>
                <span className="text-xs text-gray-400 font-medium">
                  {formatMatchTime(currentMatch.startingAt)}
                </span>
              </div>
            </div>
          </div>

          {/* Team 2 */}
          <div className="text-center">
            <div
              className={`${
                isMobile ? "w-16 h-16" : "w-12 h-12 lg:w-16 lg:h-16"
              } mx-auto mb-3 bg-gray-700 rounded-md p-2 border-2 border-gray-600`}
            >
              <Image
                src={currentMatch.participants[1].image || "/placeholder.svg"}
                alt={currentMatch.participants[1].name}
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
            <p className="font-semibold text-white text-sm leading-tight line-clamp-2">
              {currentMatch.participants[1].name}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button className="flex-1 bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-gray-900 font-bold py-3 rounded-md transition-all duration-200 hover:scale-105 shadow-lg">
          <Play className="w-4 h-4 mr-2" />
          Watch Live
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white font-semibold py-3 rounded-md transition-all duration-200"
        >
          <Info className="w-4 h-4 mr-2" />
          Details
        </Button>
      </div>
    </Card>
  );
}

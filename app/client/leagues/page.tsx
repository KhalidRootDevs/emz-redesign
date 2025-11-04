"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const leaguesData = [
  {
    name: "Premier League",
    position: 1,
    image: "https://media.api-sports.io/football/leagues/39.png",
    id: 39,
    matches: 8,
    country: "England",
  },
  {
    name: "La Liga",
    position: 2,
    image: "https://media.api-sports.io/football/leagues/140.png",
    id: 140,
    matches: 6,
    country: "Spain",
  },
  {
    name: "UEFA Champions League",
    position: 3,
    image: "https://media.api-sports.io/football/leagues/2.png",
    id: 2,
    matches: 5,
    country: "Europe",
  },
  {
    name: "Serie A",
    position: 4,
    image: "https://media.api-sports.io/football/leagues/135.png",
    id: 135,
    matches: 4,
    country: "Italy",
  },
  {
    name: "Bundesliga",
    position: 5,
    image: "https://media.api-sports.io/football/leagues/78.png",
    id: 78,
    matches: 4,
    country: "Germany",
  },
  {
    name: "Ligue 1",
    position: 6,
    image: "https://media.api-sports.io/football/leagues/61.png",
    id: 61,
    matches: 3,
    country: "France",
  },
  {
    name: "UEFA Europa League",
    position: 7,
    image: "https://media.api-sports.io/football/leagues/3.png",
    id: 3,
    matches: 3,
    country: "Europe",
  },
  {
    name: "Pro League",
    position: 8,
    image: "https://media.api-sports.io/football/leagues/307.png",
    id: 307,
    matches: 3,
    country: "Saudi Arabia",
  },
];

export default function LeaguesPage() {
  return (
    <div className="space-y-6 p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#C8E62A] rounded-lg flex items-center justify-center">
          <Trophy className="w-6 h-6 text-gray-900" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-100">All Leagues</h1>
          <p className="text-sm text-gray-400">
            Browse all available football leagues
          </p>
        </div>
      </div>

      {/* Leagues Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {leaguesData.map((league) => (
          <Card
            key={league.id}
            className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-[#C8E62A]"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {/* League Logo */}
              <div className="w-20 h-20 relative group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={league.image || "/placeholder.svg"}
                  alt={league.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* League Info */}
              <div className="space-y-2 w-full">
                <h3 className="font-bold text-lg text-gray-100 group-hover:text-[#C8E62A] transition-colors">
                  {league.name}
                </h3>
                <p className="text-sm text-gray-400">{league.country}</p>
              </div>

              {/* Match Count */}
              <div className="w-full pt-4 border-t border-gray-800">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-300">
                    <span className="font-semibold text-[#C8E62A]">
                      {league.matches}
                    </span>{" "}
                    Live Matches
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Clock, Info } from "lucide-react";

const upcomingMatchesData = [
  {
    matches: [
      {
        id: "6902e8bb2bb1abfe1fe7c413",
        name: "Premier League",
        matchId: 1762610892612,
        fixtureId: 1435973,
        league: {
          id: 39,
          name: "Premier League",
          image: "https://media.api-sports.io/football/leagues/39.png",
        },
        startingAt: "1767225600",
        startingAtTimestamps: 1767225600,
        matchType: "normal",
        participants: [
          {
            id: 33,
            name: "Manchester United",
            image: "https://media.api-sports.io/football/teams/33.png",
            score: 0,
          },
          {
            id: 40,
            name: "Liverpool",
            image: "https://media.api-sports.io/football/teams/40.png",
            score: 0,
          },
        ],
        status: "active",
        liveStatus: false,
        position: 99999,
        dateOnly: "2025-02-02",
      },
      {
        id: "6902e8bb2bb1abfe1fe7c414",
        name: "Premier League",
        matchId: 1762610892613,
        fixtureId: 1435974,
        league: {
          id: 39,
          name: "Premier League",
          image: "https://media.api-sports.io/football/leagues/39.png",
        },
        startingAt: "1767232800",
        startingAtTimestamps: 1767232800,
        matchType: "normal",
        participants: [
          {
            id: 50,
            name: "Manchester City",
            image: "https://media.api-sports.io/football/teams/50.png",
            score: 0,
          },
          {
            id: 42,
            name: "Arsenal",
            image: "https://media.api-sports.io/football/teams/42.png",
            score: 0,
          },
        ],
        status: "active",
        liveStatus: false,
        position: 99999,
        dateOnly: "2025-02-02",
      },
    ],
    timestamp: "2025-02-02",
  },
  {
    matches: [
      {
        id: "6902e8bb2bb1abfe1fe7c415",
        name: "La Liga",
        matchId: 1762610892614,
        fixtureId: 1435975,
        league: {
          id: 140,
          name: "La Liga",
          image: "https://media.api-sports.io/football/leagues/140.png",
        },
        startingAt: "1767312000",
        startingAtTimestamps: 1767312000,
        matchType: "normal",
        participants: [
          {
            id: 529,
            name: "Barcelona",
            image: "https://media.api-sports.io/football/teams/529.png",
            score: 0,
          },
          {
            id: 541,
            name: "Real Madrid",
            image: "https://media.api-sports.io/football/teams/541.png",
            score: 0,
          },
        ],
        status: "active",
        liveStatus: false,
        position: 99999,
        dateOnly: "2025-02-03",
      },
    ],
    timestamp: "2025-02-03",
  },
  {
    matches: [
      {
        id: "6902e8bb2bb1abfe1fe7c416",
        name: "Bundesliga",
        matchId: 1762610892615,
        fixtureId: 1435976,
        league: {
          id: 78,
          name: "Bundesliga",
          image: "https://media.api-sports.io/football/leagues/78.png",
        },
        startingAt: "1767484800",
        startingAtTimestamps: 1767484800,
        matchType: "normal",
        participants: [
          {
            id: 157,
            name: "Bayern Munich",
            image: "https://media.api-sports.io/football/teams/157.png",
            score: 0,
          },
          {
            id: 165,
            name: "Borussia Dortmund",
            image: "https://media.api-sports.io/football/teams/165.png",
            score: 0,
          },
        ],
        status: "active",
        liveStatus: false,
        position: 99999,
        dateOnly: "2025-02-05",
      },
    ],
    timestamp: "2025-02-05",
  },
];

export default function UpcomingMatches() {
  const getDateLabel = (dateString: string) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const matchDate = new Date(dateString);

    const todayStr = today.toISOString().split("T")[0];
    const tomorrowStr = tomorrow.toISOString().split("T")[0];
    const matchDateStr = matchDate.toISOString().split("T")[0];

    if (matchDateStr === todayStr) return "Today";
    if (matchDateStr === tomorrowStr) return "Tomorrow";

    return matchDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatMatchDate = (timestamp: string) => {
    const date = new Date(Number.parseInt(timestamp) * 1000);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const formatMatchTime = (timestamp: string) => {
    const date = new Date(Number.parseInt(timestamp) * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">Upcoming Matches</h3>
      <div className="space-y-4 lg:space-y-6">
        {upcomingMatchesData.map((group) => (
          <div key={group.timestamp}>
            <h4 className="text-sm font-bold text-gray-400 mb-3 px-1">
              {getDateLabel(group.timestamp)}
            </h4>
            <Card className="rounded-md divide-y divide-gray-800 border-gray-700">
              {group.matches.map((match, index) => (
                <div
                  key={match.id}
                  className="hover:bg-gray-750 transition-colors"
                >
                  {/* Desktop Layout */}
                  <div className="hidden lg:block p-4">
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
                        variant="outline"
                        className="border-[#C8E62A] text-[#C8E62A] hover:bg-[#C8E62A]/10 bg-transparent h-8 text-xs px-3"
                      >
                        <Info className="w-3 h-3 mr-1" />
                        Details
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
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
                      <div className="flex flex-col items-center px-4">
                        <span className="text-sm text-gray-400 font-medium">
                          {formatMatchDate(match.startingAt)}
                        </span>
                        <span className="text-sm font-bold text-[#C8E62A]">
                          {formatMatchTime(match.startingAt)}
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

                  {/* Mobile Layout */}
                  <div className="lg:hidden p-3">
                    {/* Header - League and Time */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Image
                          src={match.league.image || "/placeholder.svg"}
                          alt={match.league.name}
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-xs font-semibold text-gray-300">
                          {match.league.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">
                          {formatMatchDate(match.startingAt)}
                        </div>
                        <div className="text-sm font-bold text-[#C8E62A]">
                          {formatMatchTime(match.startingAt)}
                        </div>
                      </div>
                    </div>

                    {/* Teams */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 flex-1">
                        <div className="w-8 h-8 bg-gray-700 rounded-md p-1">
                          <Image
                            src={
                              match.participants[0].image || "/placeholder.svg"
                            }
                            alt={match.participants[0].name}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-semibold text-white truncate">
                          {match.participants[0].name}
                        </span>
                      </div>

                      <div className="px-2">
                        <span className="text-xs font-bold text-gray-400">
                          VS
                        </span>
                      </div>

                      <div className="flex items-center gap-2 flex-1 justify-end">
                        <span className="text-sm font-semibold text-white truncate text-right">
                          {match.participants[1].name}
                        </span>
                        <div className="w-8 h-8 bg-gray-700 rounded-md p-1">
                          <Image
                            src={
                              match.participants[1].image || "/placeholder.svg"
                            }
                            alt={match.participants[1].name}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-[#C8E62A] text-[#C8E62A] hover:bg-[#C8E62A]/10 bg-transparent text-xs py-2"
                    >
                      <Info className="w-3 h-3 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        ))}

        <Button
          variant="default"
          className="w-full bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-gray-900 font-semibold py-3"
        >
          Load More
        </Button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Filter, X, MonitorPlay as TvMinimalPlay } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const leagues = [
  {
    name: "UEFA Europa League",
    position: 9999,
    image: "https://media.api-sports.io/football/leagues/3.png",
    id: 3,
    matches: 0,
  },
  {
    name: "UEFA Champions League",
    position: 9999,
    image: "https://media.api-sports.io/football/leagues/2.png",
    id: 2,
    matches: 0,
  },
  {
    name: "Bundesliga",
    position: 9999,
    image: "https://media.api-sports.io/football/leagues/78.png",
    id: 78,
    matches: 0,
  },
  {
    name: "Pro League",
    position: 9999,
    image: "https://media.api-sports.io/football/leagues/307.png",
    id: 307,
    matches: 3,
  },
  {
    name: "La Liga",
    position: 9999,
    image: "https://media.api-sports.io/football/leagues/140.png",
    id: 140,
    matches: 0,
  },
  {
    name: "Premier League",
    position: 9999,
    image: "https://media.api-sports.io/football/leagues/39.png",
    id: 39,
    matches: 2,
  },
];

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
    startingAt: "1760541300",
    startingAtTimestamps: 1760541300,
    matchType: "normal",
    participants: [
      {
        id: 2956,
        name: "Damac",
        image: "https://media.api-sports.io/football/teams/2956.png",
        score: 5,
      },
      {
        id: 2931,
        name: "Al-Fateh",
        image: "https://media.api-sports.io/football/teams/2931.png",
        score: 6,
      },
    ],
    status: "active",
    liveStatus: true,
    position: 99999,
    highlight: null,
    createdAt: "2025-10-30T04:25:31.765Z",
    updatedAt: "2025-10-30T06:20:21.574Z",
  },
  {
    id: "6902e8bd2bb1abfe1fe7c41f",
    name: "Pro League",
    matchId: 1762373387880,
    fixtureId: 1435969,
    league: {
      id: 307,
      name: "Pro League",
      image: "https://media.api-sports.io/football/leagues/307.png",
    },
    startingAt: "1761845400",
    startingAtTimestamps: 1761845400,
    matchType: "normal",
    participants: [
      {
        id: 2929,
        name: "Al-Ahli Jeddah",
        image: "https://media.api-sports.io/football/teams/2929.png",
        score: 2,
      },
      {
        id: 10511,
        name: "Al Riyadh",
        image: "https://media.api-sports.io/football/teams/10511.png",
        score: 1,
      },
    ],
    status: "active",
    liveStatus: true,
    position: 99999,
    highlight: null,
    createdAt: "2025-10-30T04:25:33.127Z",
    updatedAt: "2025-10-30T04:27:10.579Z",
  },
  {
    id: "6902e8be2bb1abfe1fe7c42d",
    name: "Pro League",
    matchId: 1762379754026,
    fixtureId: 1435973,
    league: {
      id: 307,
      name: "Pro League",
      image: "https://media.api-sports.io/football/leagues/307.png",
    },
    startingAt: "1761845400",
    startingAtTimestamps: 1761845400,
    matchType: "normal",
    participants: [
      {
        id: 10509,
        name: "Al Kholood",
        image: "https://media.api-sports.io/football/teams/10509.png",
        score: 0,
      },
      {
        id: 10513,
        name: "NEOM",
        image: "https://media.api-sports.io/football/teams/10513.png",
        score: 0,
      },
    ],
    status: "active",
    liveStatus: true,
    position: 99999,
    highlight: null,
    createdAt: "2025-10-30T04:25:34.374Z",
    updatedAt: "2025-10-30T04:27:17.939Z",
  },
  {
    id: "6902e8be2bb1abfe1fe7c42e",
    name: "Premier League",
    matchId: 1762379754027,
    fixtureId: 1435974,
    league: {
      id: 39,
      name: "Premier League",
      image: "https://media.api-sports.io/football/leagues/39.png",
    },
    startingAt: "1761845400",
    startingAtTimestamps: 1761845400,
    matchType: "normal",
    participants: [
      {
        id: 33,
        name: "Manchester United",
        image: "https://media.api-sports.io/football/teams/33.png",
        score: 2,
      },
      {
        id: 40,
        name: "Liverpool",
        image: "https://media.api-sports.io/football/teams/40.png",
        score: 3,
      },
    ],
    status: "active",
    liveStatus: true,
    position: 99999,
    highlight: null,
    createdAt: "2025-10-30T04:25:34.374Z",
    updatedAt: "2025-10-30T04:27:17.939Z",
  },
  {
    id: "6902e8be2bb1abfe1fe7c42f",
    name: "Premier League",
    matchId: 1762379754028,
    fixtureId: 1435975,
    league: {
      id: 39,
      name: "Premier League",
      image: "https://media.api-sports.io/football/leagues/39.png",
    },
    startingAt: "1761845400",
    startingAtTimestamps: 1761845400,
    matchType: "normal",
    participants: [
      {
        id: 50,
        name: "Manchester City",
        image: "https://media.api-sports.io/football/teams/50.png",
        score: 1,
      },
      {
        id: 42,
        name: "Arsenal",
        image: "https://media.api-sports.io/football/teams/42.png",
        score: 1,
      },
    ],
    status: "active",
    liveStatus: true,
    position: 99999,
    highlight: null,
    createdAt: "2025-10-30T04:25:34.374Z",
    updatedAt: "2025-10-30T04:27:17.939Z",
  },
];

export default function LiveMatchesPage() {
  const [selectedLeagues, setSelectedLeagues] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter matches based on selected leagues and search query
  const filteredMatches = liveMatches.filter((match) => {
    // League filter
    const matchesLeague =
      selectedLeagues.length === 0 ||
      selectedLeagues.includes(match.league.id.toString());

    // Search filter
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      match.participants[0].name.toLowerCase().includes(searchLower) ||
      match.participants[1].name.toLowerCase().includes(searchLower) ||
      match.league.name.toLowerCase().includes(searchLower);

    return matchesLeague && matchesSearch;
  });

  // Toggle league selection
  const toggleLeague = (leagueId: string) => {
    setSelectedLeagues((prev) =>
      prev.includes(leagueId)
        ? prev.filter((id) => id !== leagueId)
        : [...prev, leagueId]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedLeagues([]);
    setSearchQuery("");
  };

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8 space-y-6 text-gray-100">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold mb-2 text-gray-100">Live Matches</h1>
        <p className="text-gray-400">
          Watch live football matches from around the world
        </p>
      </div>

      {/* Filters */}
      <Card className="p-4 rounded-xl bg-gray-800 border border-gray-700">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search teams or leagues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C8E62A] focus:border-transparent"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Filter Button */}
          <Button
            variant="outline"
            className="md:w-auto flex items-center justify-center gap-2 border-[#C8E62A] text-[#C8E62A] hover:bg-[#C8E62A]/10 bg-transparent"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="w-4 h-4" />
            Leagues
            {selectedLeagues.length > 0 && (
              <span className="bg-[#C8E62A] text-gray-900 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {selectedLeagues.length}
              </span>
            )}
          </Button>
        </div>

        {/* League Filters */}
        {isFilterOpen && (
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="flex flex-wrap gap-2">
              {leagues.map((league) => (
                <button
                  key={league.id}
                  onClick={() => toggleLeague(league.id.toString())}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedLeagues.includes(league.id.toString())
                      ? "bg-[#C8E62A]/20 text-[#C8E62A] border-2 border-[#C8E62A]"
                      : "bg-gray-800 text-gray-300 border-2 border-transparent hover:bg-gray-700"
                  }`}
                >
                  <Image
                    src={league.image || "/placeholder.svg"}
                    alt={league.name}
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                  <span className="text-xs sm:text-sm font-medium">
                    {league.name}
                  </span>
                </button>
              ))}
              {selectedLeagues.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-gray-900 font-semibold"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        )}
      </Card>

      {/* Live Matches Count */}
      <div className="flex items-center gap-2 text-lg font-semibold text-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <TvMinimalPlay className="w-5 h-5 text-red-500" />
        </div>
        <span>
          {filteredMatches.length} Live{" "}
          {filteredMatches.length === 1 ? "Match" : "Matches"}
        </span>
      </div>

      {/* Live Matches Grid */}
      {filteredMatches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMatches.map((match) => (
            <Card
              key={match.id}
              className="p-4 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group bg-gray-800 border border-gray-700"
            >
              {/* League Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={match.league.image || "/placeholder.svg"}
                    alt={match.league.name}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-sm font-semibold text-gray-300">
                    {match.league.name}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-xs text-red-500 font-bold">LIVE</span>
                </div>
              </div>

              {/* Match Content */}
              <div className="space-y-4">
                {/* Team 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <Image
                      src={match.participants[0].image || "/placeholder.svg"}
                      alt={match.participants[0].name}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                    <span className="font-semibold text-sm text-gray-100">
                      {match.participants[0].name}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-[#C8E62A]">
                    {match.participants[0].score}
                  </span>
                </div>

                {/* Team 2 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <Image
                      src={match.participants[1].image || "/placeholder.svg"}
                      alt={match.participants[1].name}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                    <span className="font-semibold text-sm text-gray-100">
                      {match.participants[1].name}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-[#C8E62A]">
                    {match.participants[1].score}
                  </span>
                </div>
              </div>

              {/* Watch Button */}
              <Button className="w-full mt-4 bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-gray-900 font-semibold">
                <TvMinimalPlay className="w-4 h-4 mr-2" />
                Watch Now
              </Button>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="rounded-xl p-12 text-center bg-gray-800 border border-gray-700">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <TvMinimalPlay className="w-8 h-8 text-gray-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">
            No live matches found
          </h3>
          <p className="text-gray-400 mb-6">
            There are no live matches matching your search criteria. Try
            adjusting your filters or check back later.
          </p>
          {(selectedLeagues.length > 0 || searchQuery) && (
            <Button
              onClick={clearFilters}
              className="bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-gray-900 font-semibold"
            >
              Clear Filters
            </Button>
          )}
        </Card>
      )}
    </div>
  );
}

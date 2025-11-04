"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Calendar,
  Grid,
  List,
  SlidersHorizontal,
  Clock,
  Info,
  Play,
  Star,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const leaguesData = [
  {
    name: "Premier League",
    position: 1,
    image: "https://media.api-sports.io/football/leagues/39.png",
    id: 39,
    matches: 8,
  },
  {
    name: "La Liga",
    position: 2,
    image: "https://media.api-sports.io/football/leagues/140.png",
    id: 140,
    matches: 6,
  },
  {
    name: "UEFA Champions League",
    position: 3,
    image: "https://media.api-sports.io/football/leagues/2.png",
    id: 2,
    matches: 5,
  },
  {
    name: "Serie A",
    position: 4,
    image: "https://media.api-sports.io/football/leagues/135.png",
    id: 135,
    matches: 4,
  },
  {
    name: "Bundesliga",
    position: 5,
    image: "https://media.api-sports.io/football/leagues/78.png",
    id: 78,
    matches: 4,
  },
  {
    name: "Ligue 1",
    position: 6,
    image: "https://media.api-sports.io/football/leagues/61.png",
    id: 61,
    matches: 3,
  },
  {
    name: "UEFA Europa League",
    position: 7,
    image: "https://media.api-sports.io/football/leagues/3.png",
    id: 3,
    matches: 3,
  },
  {
    name: "Pro League",
    position: 8,
    image: "https://media.api-sports.io/football/leagues/307.png",
    id: 307,
    matches: 3,
  },
];

const fixturesData = [
  {
    matches: [
      {
        id: "6902e8bb2bb1abfe1fe7c410",
        name: "Pro League",
        matchId: 1762610892609,
        fixtureId: 1435970,
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
        id: "6902e8bb2bb1abfe1fe7c411",
        name: "Pro League",
        matchId: 1762610892610,
        fixtureId: 1435971,
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
    ],
    timestamp: "2025-02-01",
  },
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

export default function MatchesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLeagues, setSelectedLeagues] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([
    "live",
    "upcoming",
    "completed",
  ]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const toggleLeague = (leagueId: string) => {
    setSelectedLeagues((prev) =>
      prev.includes(leagueId)
        ? prev.filter((id) => id !== leagueId)
        : [...prev, leagueId]
    );
  };

  const toggleStatus = (status: string) => {
    setSelectedStatus((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLeagues([]);
    setSelectedStatus(["live", "upcoming", "completed"]);
    setDateRange({ start: "", end: "" });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else {
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
    }
  };

  const hasActiveFilters =
    selectedLeagues.length > 0 ||
    !selectedStatus.includes("live") ||
    !selectedStatus.includes("upcoming") ||
    !selectedStatus.includes("completed") ||
    dateRange.start ||
    dateRange.end ||
    searchQuery;

  const getFilteredAndSorted = () => {
    let matches = fixturesData.flatMap((group) => {
      return group.matches.map((match: any) => ({
        ...match,
        date: new Date(Number.parseInt(match.startingAtTimestamps) * 1000),
        leagueId: match.league.id.toString(),
        leagueName: match.league.name.toLowerCase(),
        statusNormalized: match.liveStatus ? "live" : "upcoming",
      }));
    });

    matches = matches.filter((match) => {
      const searchLower = searchQuery.toLowerCase();
      const leagueNameMatches = match.leagueName.includes(searchLower);
      const teamNameMatches = match.participants.some((p: any) =>
        p.name.toLowerCase().includes(searchLower)
      );

      const matchesSearch =
        searchQuery === "" || leagueNameMatches || teamNameMatches;
      const matchesLeague =
        selectedLeagues.length === 0 ||
        selectedLeagues.includes(String(match.leagueId));
      const matchesStatus = selectedStatus.includes(match.statusNormalized);

      let matchesDate = true;
      if (dateRange.start && dateRange.end) {
        const matchDate = match.date;
        const startDate = new Date(dateRange.start);
        const endDate = new Date(dateRange.end);
        matchesDate = matchDate >= startDate && matchDate <= endDate;
      }

      return matchesSearch && matchesLeague && matchesStatus && matchesDate;
    });

    return matches;
  };

  const getMatchesByDate = () => {
    const filteredMatches = getFilteredAndSorted();
    return filteredMatches.reduce((acc, match) => {
      const dateKey = match.date.toISOString().split("T")[0];
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(match);
      return acc;
    }, {} as Record<string, any[]>);
  };

  const matchesByDate = getMatchesByDate();
  const filteredMatches = getFilteredAndSorted();

  const formatMatchTime = (timestamp: string) => {
    const date = new Date(Number.parseInt(timestamp) * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatMatchDate = (timestamp: string) => {
    const date = new Date(Number.parseInt(timestamp) * 1000);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8 space-y-6">
      {/* Top Controls Bar */}
      <Card className="rounded-xl p-6 bg-gray-800 border-gray-700">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Search and Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full lg:w-auto">
            {/* Search Bar */}
            <div className="relative flex-1 min-w-0">
              <input
                type="text"
                placeholder="Search matches, teams or leagues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#C8E62A] focus:bg-gray-750 transition-all"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Toggle Button */}
            <Button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              variant={isFilterOpen || hasActiveFilters ? "default" : "outline"}
              className={
                isFilterOpen || hasActiveFilters
                  ? "bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-gray-900"
                  : "border-gray-600 text-gray-300 hover:bg-gray-700"
              }
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-gray-900 rounded-full ml-2 animate-pulse" />
              )}
            </Button>
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-gray-700 border border-gray-600 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-all ${
                  viewMode === "grid"
                    ? "bg-gray-600 text-[#C8E62A] shadow-sm"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-all ${
                  viewMode === "list"
                    ? "bg-gray-600 text-[#C8E62A] shadow-sm"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-400 whitespace-nowrap">
              {filteredMatches.length} matches
            </div>
          </div>
        </div>

        {/* Expandable Filters */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-gray-700 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Status Filter */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-white">
                    Match Status
                  </h3>
                  <div className="space-y-2">
                    {[
                      {
                        id: "live",
                        label: "Live Matches",
                        color: "text-red-400",
                      },
                      {
                        id: "upcoming",
                        label: "Upcoming",
                        color: "text-[#C8E62A]",
                      },
                      {
                        id: "completed",
                        label: "Completed",
                        color: "text-gray-400",
                      },
                    ].map((status) => (
                      <label
                        key={status.id}
                        className="flex items-center cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 border-gray-600 rounded text-[#C8E62A] focus:ring-[#C8E62A] bg-gray-700"
                          checked={selectedStatus.includes(status.id)}
                          onChange={() => toggleStatus(status.id)}
                        />
                        <span
                          className={`ml-2 text-sm group-hover:text-white transition-colors ${status.color}`}
                        >
                          {status.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* League Filter */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-white">
                    Leagues
                  </h3>
                  <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
                    {leaguesData.map((league) => (
                      <label
                        key={league.id}
                        className="flex items-center cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 border-gray-600 rounded text-[#C8E62A] focus:ring-[#C8E62A] bg-gray-700"
                          checked={selectedLeagues.includes(
                            league.id.toString()
                          )}
                          onChange={() => toggleLeague(league.id.toString())}
                        />
                        <span className="ml-2 text-sm text-gray-300 group-hover:text-white transition-colors">
                          {league.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Date Range Filter */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-white">
                    Date Range
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">
                        From
                      </label>
                      <input
                        type="date"
                        value={dateRange.start}
                        onChange={(e) =>
                          setDateRange({ ...dateRange, start: e.target.value })
                        }
                        className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C8E62A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">
                        To
                      </label>
                      <input
                        type="date"
                        value={dateRange.end}
                        onChange={(e) =>
                          setDateRange({ ...dateRange, end: e.target.value })
                        }
                        className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C8E62A]"
                      />
                    </div>
                  </div>
                </div>

                {/* Filter Actions */}
                <div className="flex flex-col justify-end">
                  <div className="space-y-2">
                    <Button
                      onClick={clearFilters}
                      variant="outline"
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    >
                      Clear All Filters
                    </Button>
                    <Button
                      onClick={() => setIsFilterOpen(false)}
                      className="w-full bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-gray-900"
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* Match Results */}
      <div className="space-y-8">
        {Object.keys(matchesByDate).length > 0 ? (
          Object.entries(matchesByDate)
            .sort(
              ([dateA], [dateB]) =>
                new Date(dateA).getTime() - new Date(dateB).getTime()
            )
            .map(([date, matches]) => {
              const safeMatches = matches as any[];

              return (
                <motion.div
                  key={date}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* Date Header */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-lg font-semibold text-white">
                      <Calendar className="w-5 h-5 text-[#C8E62A]" />
                      {formatDate(date)}
                    </div>
                    <div className="flex-1 h-px bg-gray-700" />
                    <span className="text-sm text-gray-400">
                      {safeMatches?.length} match
                      {safeMatches?.length !== 1 ? "es" : ""}
                    </span>
                  </div>

                  {/* Matches Grid/List */}
                  <div
                    className={
                      viewMode === "grid"
                        ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                        : "space-y-3"
                    }
                  >
                    {safeMatches?.map((match, index) => (
                      <motion.div
                        key={match.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Card className="p-3 rounded-xl bg-gray-800 border-gray-700 hover:border-[#C8E62A]/50 transition-all hover:shadow-lg">
                          <div className="flex items-center justify-between mb-2">
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
                            {match.liveStatus ? (
                              <Button
                                size="sm"
                                className="bg-red-600 hover:bg-red-700 text-white h-7 text-xs px-3"
                              >
                                <Play className="w-3 h-3 mr-1" />
                                Watch Now
                              </Button>
                            ) : (
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-[#C8E62A] text-[#C8E62A] hover:bg-[#C8E62A]/10 h-7 text-xs px-3 bg-transparent"
                              >
                                <Info className="w-3 h-3 mr-1" />
                                View Details
                              </Button>
                            )}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 flex-1">
                              {match.liveStatus && (
                                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                              )}
                              {!match.liveStatus && (
                                <Clock className="w-4 h-4 text-gray-400" />
                              )}
                              <Image
                                src={
                                  match.participants[0].image ||
                                  "/placeholder.svg"
                                }
                                alt={match.participants[0].name}
                                width={24}
                                height={24}
                                className="w-6 h-6 object-contain"
                              />
                              <span className="text-sm font-medium text-white truncate">
                                {match.participants[0].name}
                              </span>
                            </div>
                            {match.liveStatus ? (
                              <div className="flex items-center gap-3 px-4">
                                <span className="text-lg font-bold text-white">
                                  {match.participants[0].score}
                                </span>
                                <span className="text-gray-400">:</span>
                                <span className="text-lg font-bold text-white">
                                  {match.participants[1].score}
                                </span>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center px-4">
                                <span className="text-xs text-gray-400 font-medium">
                                  {formatMatchDate(match.startingAt)}
                                </span>
                                <span className="text-xs font-bold text-[#C8E62A]">
                                  {formatMatchTime(match.startingAt)}
                                </span>
                              </div>
                            )}
                            <div className="flex items-center gap-2 flex-1 justify-end">
                              <span className="text-sm font-medium text-white truncate">
                                {match.participants[1].name}
                              </span>
                              <Image
                                src={
                                  match.participants[1].image ||
                                  "/placeholder.svg"
                                }
                                alt={match.participants[1].name}
                                width={24}
                                height={24}
                                className="w-6 h-6 object-contain"
                              />
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 rounded-xl p-12 text-center border border-gray-700"
          >
            <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">
              No matches found
            </h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              We couldn't find any matches matching your search criteria. Try
              adjusting your filters or search query.
            </p>
            <Button
              onClick={clearFilters}
              className="bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-gray-900"
            >
              Clear All Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

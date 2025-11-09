"use client";

import Image from "next/image";
import Link from "next/link";

const leaguesData = [
  {
    name: "Premier League",
    image: "https://media.api-sports.io/football/leagues/39.png",
    id: 39,
  },
  {
    name: "La Liga",
    image: "https://media.api-sports.io/football/leagues/140.png",
    id: 140,
  },
  {
    name: "UEFA Champions League",
    image: "https://media.api-sports.io/football/leagues/2.png",
    id: 2,
  },
  {
    name: "Serie A",
    image: "https://media.api-sports.io/football/leagues/135.png",
    id: 135,
  },
  {
    name: "Bundesliga",
    image: "https://media.api-sports.io/football/leagues/78.png",
    id: 78,
  },
  {
    name: "Ligue 1",
    image: "https://media.api-sports.io/football/leagues/61.png",
    id: 61,
  },
];

const upcomingMatches = [
  { id: 1, title: "Manchester United vs Liverpool", date: "Feb 2, 2025" },
  { id: 2, title: "Manchester City vs Arsenal", date: "Feb 2, 2025" },
  { id: 3, title: "Barcelona vs Real Madrid", date: "Feb 3, 2025" },
  { id: 4, title: "Bayern Munich vs Borussia Dortmund", date: "Feb 5, 2025" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col">
              {/* Logo */}
              <Link
                href="/client"
                className="flex items-center gap-3 mb-6 group"
              >
                <img
                  src={"/emz-logo.png"}
                  className="h-10 object-contain"
                  alt="EMZ Sports"
                />
              </Link>

              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Your ultimate destination for live sports streaming and match
                updates. Never miss a moment of the action.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-800 hover:bg-[#C8E62A] rounded-lg flex items-center justify-center transition-all duration-200 group border border-gray-700 hover:border-[#C8E62A]"
                >
                  <span className="text-gray-400 group-hover:text-gray-900 text-sm font-bold">
                    f
                  </span>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-800 hover:bg-[#C8E62A] rounded-lg flex items-center justify-center transition-all duration-200 group border border-gray-700 hover:border-[#C8E62A]"
                >
                  <span className="text-gray-400 group-hover:text-gray-900 text-sm font-bold">
                    t
                  </span>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-800 hover:bg-[#C8E62A] rounded-lg flex items-center justify-center transition-all duration-200 group border border-gray-700 hover:border-[#C8E62A]"
                >
                  <span className="text-gray-400 group-hover:text-gray-900 text-sm font-bold">
                    in
                  </span>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-800 hover:bg-[#C8E62A] rounded-lg flex items-center justify-center transition-all duration-200 group border border-gray-700 hover:border-[#C8E62A]"
                >
                  <span className="text-gray-400 group-hover:text-gray-900 text-sm font-bold">
                    ig
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Leagues */}
          <div>
            <h3 className="font-bold text-gray-100 mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-4 bg-[#C8E62A] rounded-full"></div>
              Featured Leagues
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {leaguesData.map((league) => (
                <Link
                  key={league.id}
                  href={`/client/leagues/${league.id}`}
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-200 group border border-gray-700 hover:border-[#C8E62A]/30"
                >
                  <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center p-1 border border-gray-700">
                    <Image
                      src={league.image || "/placeholder.svg"}
                      alt={league.name}
                      width={20}
                      height={20}
                      className="object-contain w-5 h-5"
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-medium group-hover:text-[#C8E62A] transition-colors truncate">
                    {league.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-100 mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-4 bg-[#C8E62A] rounded-full"></div>
              Quick Links
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {[
                { name: "Home", href: "/client" },
                { name: "Live Matches", href: "/client/live" },
                { name: "All Matches", href: "/client/matches" },
                { name: "Leagues", href: "/client/leagues" },
                { name: "Teams", href: "/client/teams" },
                { name: "Pricing", href: "/client/pricing" },
                { name: "Support", href: "/client/support" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-[#C8E62A] transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-800/30 flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#C8E62A] transition-colors"></div>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Upcoming Matches */}
          <div>
            <h3 className="font-bold text-gray-100 mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-4 bg-[#C8E62A] rounded-full"></div>
              Upcoming Matches
            </h3>
            <div className="space-y-4">
              {upcomingMatches.map((match) => (
                <Link
                  key={match.id}
                  href="/client/matches"
                  className="block group p-3 rounded-xl bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-200 border border-transparent hover:border-[#C8E62A]/20"
                >
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-medium text-gray-100 group-hover:text-[#C8E62A] transition-colors line-clamp-2 pr-2">
                      {match.title}
                    </p>
                    <div className="w-2 h-2 bg-[#C8E62A] rounded-full mt-1.5 flex-shrink-0"></div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    <p className="text-xs text-gray-400 font-medium">
                      {match.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 EMZ Sports. All rights reserved.
            </p>
            <div className="hidden md:flex items-center gap-1">
              <div className="w-1 h-1 bg-[#C8E62A] rounded-full"></div>
              <div className="w-1 h-1 bg-[#C8E62A] rounded-full"></div>
              <div className="w-1 h-1 bg-[#C8E62A] rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-gray-500 hover:text-[#C8E62A] transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C8E62A] group-hover:w-full transition-all duration-200"></span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

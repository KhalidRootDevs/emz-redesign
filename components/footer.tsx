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
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Slogan */}
          <div>
            {/* Logo */}
            <Link href="/client" className="flex items-center gap-2">
              <img src={"/emz-logo.png"} className="h-10 mb-5" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your ultimate destination for live sports streaming and match
              updates. Never miss a moment of the action.
            </p>
          </div>

          {/* Featured Leagues */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Featured Leagues</h3>
            <div className="grid grid-cols-3 gap-3">
              {leaguesData.map((league) => (
                <Link
                  key={league.id}
                  href={`/client/leagues/${league.id}`}
                  className="flex items-center justify-center p-2 bg-accent rounded-lg hover:bg-purple-600/10 transition-colors border border-border"
                  title={league.name}
                >
                  <Image
                    src={league.image || "/placeholder.svg"}
                    alt={league.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/client"
                  className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/client/live"
                  className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Live Matches
                </Link>
              </li>
              <li>
                <Link
                  href="/client/matches"
                  className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  All Matches
                </Link>
              </li>
              <li>
                <Link
                  href="/client/leagues"
                  className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Leagues
                </Link>
              </li>
              <li>
                <Link
                  href="/client/teams"
                  className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/client/pricing"
                  className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/client/support"
                  className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Upcoming Matches */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Upcoming Matches</h3>
            <ul className="space-y-3">
              {upcomingMatches.map((match) => (
                <li key={match.id}>
                  <Link href="/client/matches" className="block group">
                    <p className="text-sm font-medium text-foreground group-hover:text-purple-600 transition-colors line-clamp-1">
                      {match.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {match.date}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 EMZ Sports. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

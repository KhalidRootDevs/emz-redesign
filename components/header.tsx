"use client";

import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  Crown,
  SettingsIcon,
  LogOut,
  ChevronDown,
  Search,
  Menu,
  X,
  Home,
  Radio,
  Trophy,
  DollarSign,
  HelpCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
];

const teamsData = [
  {
    id: 529,
    name: "Barcelona",
    logo: "https://media.api-sports.io/football/teams/529.png",
    country: "Spain",
  },
  {
    id: 541,
    name: "Real Madrid",
    logo: "https://media.api-sports.io/football/teams/541.png",
    country: "Spain",
  },
  {
    id: 2929,
    name: "Al-Ahli Jeddah",
    logo: "https://media.api-sports.io/football/teams/2929.png",
    country: "Saudi Arabia",
  },
  {
    id: 538,
    name: "Celta Vigo",
    logo: "https://media.api-sports.io/football/teams/538.png",
    country: "Spain",
  },
];

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/client/matches?query=${encodeURIComponent(
        searchQuery
      )}`;
      setIsSearchMode(false);
      setSearchQuery("");
    }
  };

  const isActive = (path: string) => {
    if (path === "/client") {
      return pathname === "/client";
    }
    return pathname?.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/client" className="flex items-center gap-2">
            <img src={"/emz-logo.png"} className="h-10" />
          </Link>

          {!isSearchMode ? (
            <>
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                <Link
                  href="/client"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive("/client") && pathname === "/client"
                      ? "bg-[#C8E62A] text-black"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span className="font-medium">Home</span>
                </Link>

                <Link
                  href="/client/live"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive("/client/live")
                      ? "bg-[#C8E62A] text-black"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <Radio className="w-4 h-4" />
                  <span className="font-medium">Live</span>
                </Link>

                <Link
                  href="/client/matches"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive("/client/matches")
                      ? "bg-[#C8E62A] text-black"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <Trophy className="w-4 h-4" />
                  <span className="font-medium">Matches</span>
                </Link>

                {/* Leagues Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        isActive("/client/leagues")
                          ? "bg-[#C8E62A] text-black"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                    >
                      <span className="font-medium">Leagues</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64">
                    {leaguesData.map((league) => (
                      <DropdownMenuItem
                        key={league.id}
                        className="cursor-pointer"
                      >
                        <Image
                          src={league.image || "/placeholder.svg"}
                          alt={league.name}
                          width={40}
                          height={40}
                          className="mr-3 rounded-lg"
                        />
                        <span className="flex-1">{league.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {league.matches}
                        </span>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link
                        href="/client/leagues"
                        className="cursor-pointer text-[#C8E62A] font-medium"
                      >
                        View All Leagues
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Teams Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        isActive("/client/teams")
                          ? "bg-[#C8E62A] text-black"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                    >
                      <span className="font-medium">Teams</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64">
                    {teamsData.map((team) => (
                      <DropdownMenuItem
                        key={team.id}
                        className="cursor-pointer"
                      >
                        <Image
                          src={team.logo || "/placeholder.svg"}
                          alt={team.name}
                          width={40}
                          height={40}
                          className="mr-3"
                        />
                        <span>{team.name}</span>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link
                        href="/client/teams"
                        className="cursor-pointer text-[#C8E62A] font-medium"
                      >
                        View All Teams
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link
                  href="/client/pricing"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive("/client/pricing")
                      ? "bg-[#C8E62A] text-black"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <DollarSign className="w-4 h-4" />
                  <span className="font-medium">Pricing</span>
                </Link>

                <Link
                  href="/client/support"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive("/client/support")
                      ? "bg-[#C8E62A] text-black"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span className="font-medium">Support</span>
                </Link>
              </nav>
            </>
          ) : (
            <form onSubmit={handleSearch} className="flex-1 mx-4">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search teams and leagues..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-11 pr-4 py-2.5 text-sm bg-accent border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8E62A]"
                />
              </div>
            </form>
          )}

          {/* Search and User Actions */}
          <div className="flex items-center gap-2">
            {!isSearchMode ? (
              <button
                onClick={() => setIsSearchMode(true)}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
              >
                <Search className="w-5 h-5 text-foreground" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsSearchMode(false);
                  setSearchQuery("");
                }}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            )}

            {/* User Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 hover:bg-accent rounded-lg p-1.5 transition-colors">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-[#C8E62A] text-black text-xs">
                      TS
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="w-4 h-4 text-muted-foreground hidden lg:block" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 p-2">
                <div className="flex items-center gap-3 p-3 mb-2">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback className="bg-[#C8E62A] text-black text-lg">
                      TS
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Terry Stacia</p>
                    <p className="text-xs text-muted-foreground">
                      terry.stacia@example.com
                    </p>
                  </div>
                </div>

                <div className="bg-[#C8E62A]/10 border border-[#C8E62A]/30 rounded-lg p-2 mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-[#C8E62A]" />
                    <span className="text-xs font-semibold text-[#C8E62A]">
                      Premium Active
                    </span>
                  </div>
                  <span className="text-xs text-[#C8E62A]">30 days left</span>
                </div>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="cursor-pointer p-3 rounded-lg">
                  <User className="w-4 h-4 mr-3" />
                  <span className="text-sm font-medium">Profile</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer p-3 rounded-lg">
                  <Crown className="w-4 h-4 mr-3 text-[#C8E62A]" />
                  <span className="text-sm font-medium">Upgrade Plan</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer p-3 rounded-lg">
                  <SettingsIcon className="w-4 h-4 mr-3" />
                  <span className="text-sm font-medium">Settings</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="cursor-pointer p-3 rounded-lg text-red-600 focus:text-red-600">
                  <LogOut className="w-4 h-4 mr-3" />
                  <span className="text-sm font-medium">Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="space-y-1">
              <Link
                href="/client"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive("/client") && pathname === "/client"
                    ? "bg-[#C8E62A] text-black"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </Link>

              <Link
                href="/client/live"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive("/client/live")
                    ? "bg-[#C8E62A] text-black"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Radio className="w-5 h-5" />
                <span className="font-medium">Live</span>
              </Link>

              <Link
                href="/client/matches"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive("/client/matches")
                    ? "bg-[#C8E62A] text-black"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Trophy className="w-5 h-5" />
                <span className="font-medium">Matches</span>
              </Link>

              <Link
                href="/client/leagues"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive("/client/leagues")
                    ? "bg-[#C8E62A] text-black"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Leagues</span>
              </Link>

              <Link
                href="/client/teams"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive("/client/teams")
                    ? "bg-[#C8E62A] text-black"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Teams</span>
              </Link>

              <Link
                href="/client/pricing"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive("/client/pricing")
                    ? "bg-[#C8E62A] text-black"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <DollarSign className="w-5 h-5" />
                <span className="font-medium">Pricing</span>
              </Link>

              <Link
                href="/client/support"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive("/client/support")
                    ? "bg-[#C8E62A] text-black"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <HelpCircle className="w-5 h-5" />
                <span className="font-medium">Support</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

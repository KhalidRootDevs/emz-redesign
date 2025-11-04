"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle, LogOut, Home, Radio, Trophy, DollarSign, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

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
]

const teamsData = [
  {
    id: 2956,
    name: "Damac",
    logo: "https://media.api-sports.io/football/teams/2956.png",
    country: "Saudi Arabia",
  },
  {
    id: 2931,
    name: "Al-Fateh",
    logo: "https://media.api-sports.io/football/teams/2931.png",
    country: "Saudi Arabia",
  },
  {
    id: 2929,
    name: "Al-Ahli Jeddah",
    logo: "https://media.api-sports.io/football/teams/2929.png",
    country: "Saudi Arabia",
  },
  {
    id: 10511,
    name: "Al Riyadh",
    logo: "https://media.api-sports.io/football/teams/10511.png",
    country: "Saudi Arabia",
  },
  {
    id: 10509,
    name: "Al Kholood",
    logo: "https://media.api-sports.io/football/teams/10509.png",
    country: "Saudi Arabia",
  },
  {
    id: 10513,
    name: "NEOM",
    logo: "https://media.api-sports.io/football/teams/10513.png",
    country: "Saudi Arabia",
  },
  {
    id: 539,
    name: "Levante",
    logo: "https://media.api-sports.io/football/teams/539.png",
    country: "Spain",
  },
  {
    id: 538,
    name: "Celta Vigo",
    logo: "https://media.api-sports.io/football/teams/538.png",
    country: "Spain",
  },
  {
    id: 542,
    name: "Alaves",
    logo: "https://media.api-sports.io/football/teams/542.png",
    country: "Spain",
  },
  {
    id: 540,
    name: "Espanyol",
    logo: "https://media.api-sports.io/football/teams/540.png",
    country: "Spain",
  },
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
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedSection, setExpandedSection] = useState<string>("")
  const pathname = usePathname()

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? "" : section)
  }

  const isActive = (path: string) => {
    if (path === "/client") {
      return pathname === "/client"
    }
    return pathname?.startsWith(path)
  }

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />}

      <aside
        className={`
        fixed inset-y-0 left-0 z-50
        w-64 bg-white border-r border-gray-200 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
            <span className="font-bold text-xl">Sportia</span>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {/* Main Menu Items */}
          <Link
            href="/client"
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              isActive("/client") ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </Link>

          <Link
            href="/client/live"
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              isActive("/client/live") ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Radio className="w-5 h-5" />
            <span className="font-medium">Live</span>
          </Link>

          <Link
            href="/client/matches"
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              isActive("/client/matches") ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Trophy className="w-5 h-5" />
            <span className="font-medium">Matches</span>
          </Link>

          <Link
            href="/client/pricing"
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              isActive("/client/pricing") ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <DollarSign className="w-5 h-5" />
            <span className="font-medium">Pricing</span>
          </Link>

          <div className="h-px bg-gray-200 my-4" />

          {/* Leagues Section */}
          <div>
            <button
              onClick={() => toggleSection("leagues")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                isActive("/client/leagues") ? "bg-purple-100 text-purple-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="font-semibold">Leagues</span>
              {expandedSection === "leagues" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection === "leagues" && (
              <div className="ml-3 mt-2 space-y-1">
                {leaguesData.map((league) => (
                  <button
                    key={league.id}
                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Image
                      src={league.image || "/placeholder.svg"}
                      alt={league.name}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <span className="flex-1 text-left">{league.name}</span>
                    <span className="text-xs text-gray-400">{league.matches}</span>
                  </button>
                ))}
                <Link
                  href="/client/leagues"
                  className="w-full flex items-center justify-center px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                >
                  View All Leagues
                </Link>
              </div>
            )}
          </div>

          {/* Teams Section */}
          <div>
            <button
              onClick={() => toggleSection("teams")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                isActive("/client/teams") ? "bg-purple-100 text-purple-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="font-semibold">Teams</span>
              {expandedSection === "teams" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection === "teams" && (
              <div className="ml-3 mt-2 space-y-1">
                {teamsData.map((team) => (
                  <button
                    key={team.id}
                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Image
                      src={team.logo || "/placeholder.svg"}
                      alt={team.name}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <span className="flex-1 text-left">{team.name}</span>
                  </button>
                ))}
                <Link
                  href="/client/teams"
                  className="w-full flex items-center justify-center px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                >
                  View All Teams
                </Link>
              </div>
            )}
          </div>

          <div className="h-px bg-gray-200 my-4" />

          {/* Support */}
          <Link
            href="/client/support"
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              isActive("/client/support") ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <HelpCircle className="w-5 h-5" />
            <span className="font-medium">Support</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </aside>
    </>
  )
}

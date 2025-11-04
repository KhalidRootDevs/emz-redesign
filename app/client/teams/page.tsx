"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

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
];

export default function TeamsPage() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-gray-100">All Teams</h1>
        <p className="text-gray-400 mt-1">Browse all football teams</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {teamsData.map((team) => (
          <Card
            key={team.id}
            className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group border-gray-200"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative w-20 h-20 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={team.logo || "/placeholder.svg"}
                  alt={team.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-100 group-hover:text-[#C8E62A] transition-colors">
                  {team.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{team.country}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

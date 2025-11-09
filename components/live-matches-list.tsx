import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Play, Info } from "lucide-react";
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

interface LiveMatchesListProps {
  matches: Match[];
}

export function LiveMatchesList({ matches }: LiveMatchesListProps) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">Live Match</h3>
      <Card className="rounded-md divide-y divide-gray-800 border-gray-700">
        {matches.map((match, index) => (
          <div key={match.id} className="hover:bg-gray-750 transition-colors">
            <div className="p-4">
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
                  className="bg-red-600 hover:bg-red-700 text-white h-8 text-xs px-3"
                >
                  <Play className="w-3 h-3 mr-1" />
                  Watch Now
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                  <div className="w-10 h-10 bg-gray-700 rounded-lg p-1.5">
                    <Image
                      src={match.participants[0].image || "/placeholder.svg"}
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
                <div className="flex items-center gap-4 px-4">
                  <span className="text-xl font-bold text-white">
                    {match.participants[0].score}
                  </span>
                  <span className="text-gray-500 text-lg">:</span>
                  <span className="text-xl font-bold text-white">
                    {match.participants[1].score}
                  </span>
                </div>
                <div className="flex items-center gap-3 flex-1 justify-end">
                  <span className="text-base font-semibold text-white">
                    {match.participants[1].name}
                  </span>
                  <div className="w-10 h-10 bg-gray-700 rounded-lg p-1.5">
                    <Image
                      src={match.participants[1].image || "/placeholder.svg"}
                      alt={match.participants[1].name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

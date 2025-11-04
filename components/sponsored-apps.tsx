import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export default function SponsoredApps() {
  return (
    <div className="space-y-6">
      {/* Sponsored Apps Section - Compact */}
      <Card className="p-5 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-6 bg-[#C8E62A] rounded-full"></div>
          <div>
            <h3 className="font-bold text-lg text-white">Sponsored Apps</h3>
            <p className="text-xs text-gray-400">Recommended for you</p>
          </div>
        </div>

        <div className="space-y-3">
          {/* Sponsored App 1 */}
          <div className="flex items-center gap-3 p-3 bg-gray-750 rounded-lg border border-gray-600 hover:border-[#C8E62A]/50 transition-all duration-200">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-md flex items-center justify-center shadow">
                <span className="text-white font-bold text-sm">FB</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white text-sm mb-0.5">
                Fantasy Bet
              </h4>
              <p className="text-gray-400 text-xs line-clamp-1">
                Play fantasy sports and win real money
              </p>
            </div>
            <Button
              size="sm"
              className="bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-gray-900 font-medium text-xs px-3 py-1.5 h-auto min-h-0"
            >
              View
            </Button>
          </div>

          {/* Sponsored App 2 */}
          <div className="flex items-center gap-3 p-3 bg-gray-750 rounded-lg border border-gray-600 hover:border-[#C8E62A]/50 transition-all duration-200">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-md flex items-center justify-center shadow">
                <span className="text-white font-bold text-sm">LS</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white text-sm mb-0.5">
                Live Scores
              </h4>
              <p className="text-gray-400 text-xs line-clamp-1">
                Real-time scores and match statistics
              </p>
            </div>
            <Button
              size="sm"
              className="bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-gray-900 font-medium text-xs px-3 py-1.5 h-auto min-h-0"
            >
              View
            </Button>
          </div>

          {/* Sponsored App 3 */}
          <div className="flex items-center gap-3 p-3 bg-gray-750 rounded-lg border border-gray-600 hover:border-[#C8E62A]/50 transition-all duration-200">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-md flex items-center justify-center shadow">
                <span className="text-white font-bold text-sm">HL</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white text-sm mb-0.5">
                Highlights Pro
              </h4>
              <p className="text-gray-400 text-xs line-clamp-1">
                Watch match highlights and replays
              </p>
            </div>
            <Button
              size="sm"
              className="bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-gray-900 font-medium text-xs px-3 py-1.5 h-auto min-h-0"
            >
              View
            </Button>
          </div>

          {/* Sponsored App 4 */}
          <div className="flex items-center gap-3 p-3 bg-gray-750 rounded-lg border border-gray-600 hover:border-[#C8E62A]/50 transition-all duration-200">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-md flex items-center justify-center shadow">
                <span className="text-white font-bold text-sm">SP</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white text-sm mb-0.5">
                Sport Predict
              </h4>
              <p className="text-gray-400 text-xs line-clamp-1">
                Expert predictions and betting tips
              </p>
            </div>
            <Button
              size="sm"
              className="bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-gray-900 font-medium text-xs px-3 py-1.5 h-auto min-h-0"
            >
              View
            </Button>
          </div>

          {/* Sponsored App 5 */}
          <div className="flex items-center gap-3 p-3 bg-gray-750 rounded-lg border border-gray-600 hover:border-[#C8E62A]/50 transition-all duration-200">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md flex items-center justify-center shadow">
                <span className="text-white font-bold text-sm">ST</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white text-sm mb-0.5">
                Stream Together
              </h4>
              <p className="text-gray-400 text-xs line-clamp-1">
                Watch matches with friends online
              </p>
            </div>
            <Button
              size="sm"
              className="bg-[#C8E62A] hover:bg-[#C8E62A]/90 text-gray-900 font-medium text-xs px-3 py-1.5 h-auto min-h-0"
            >
              View
            </Button>
          </div>
        </div>
      </Card>

      {/* You can add other sidebar sections below */}
    </div>
  );
}

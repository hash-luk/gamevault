import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import GameCard from "./GameCard";
import { useEffect, useState } from "react";
import currentlyPlaying from "@/data/currentlyPlaying.json";
import recentPlatinums from "@/data/recentPlatinums.json";
import nextInBacklog from "@/data/nextInBacklog.json";
import recentlyDropped from "@/data/recentlyDropped.json";

export default function LibraryOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-0">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Library Overview
            </CardTitle>
            <CardDescription>Recent games from each category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <PlayCircle className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">
                    Currently Playing
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    7
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentlyPlaying.map((game) => (
                    <GameCard
                      key={game.id}
                      title={game.title}
                      gameGenre={game.gameGenre}
                      imageCoverPath={game.imageCoverPath}
                      timePlayed={game.timePlayed}
                      progress={game.progress}
                    />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

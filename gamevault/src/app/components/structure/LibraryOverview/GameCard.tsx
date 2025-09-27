import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Eye, Trophy, XCircle } from "lucide-react";

interface GameCardProps {
  title: string;
  imageCoverPath: string;
  gameGenre: string;
  timePlayed: string;
  progress: number;
}

export default function GameCard(props: GameCardProps) {
  return (
    <div className="group relative bg-white border rounded-lg p-3 hover:shadow-md transition-all ">
      <div className="flex flex-col gap-3">
        <div className="flex gap-4">
          <Image
            src={props.imageCoverPath}
            width={60}
            height={80}
            alt={props.title}
            className="w-15 h-20 object-cover rounded-md"
          />
          <div>
            <h4 className="font-medium text-gray-900 truncate">
              {props.title}
            </h4>
            <p className="text-sm text-gray-500">{props.gameGenre}</p>
            <p className="text-sm text-gray-500">{props.timePlayed} played</p>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="mt-2">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Progress</span>
              <span>{props.progress}%</span>
            </div>
            <Progress value={props.progress} className="h-1.5" />
          </div>
        </div>
        <div className="flex gap-1 mt-3">
          <Button size="sm" variant="ghost" className="h-7 px-2 cursor-pointer">
            <Eye className="h-3 w-3" />
          </Button>
          <Button size="sm" variant="ghost" className="h-7 px-2 cursor-pointer">
            <Trophy className="h-3 w-3" />
          </Button>{" "}
          <Button size="sm" variant="ghost" className="h-7 px-2 cursor-pointer">
            <XCircle className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}

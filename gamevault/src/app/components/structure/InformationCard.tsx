import { Clock, Gamepad2, LucideIcon, PlayCircle, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CardProps {
  title: string;
  additionalInfo: string;
  gameQTD: number;
  Icon: LucideIcon;
  additionalTextColor: string;
  iconColor?: string | "text-gray-400";
}

export default function InformationCard({
  title,
  additionalInfo,
  gameQTD,
  Icon,
  additionalTextColor,
  iconColor,
}: CardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{title}</CardTitle>
        <Icon className={`w-4 h-4 ${iconColor}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{gameQTD}</div>
        <p className={`text-sm ${additionalTextColor}`}>{additionalInfo}</p>
      </CardContent>
    </Card>
  );
}

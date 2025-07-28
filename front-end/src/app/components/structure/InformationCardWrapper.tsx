import InformationCard from "@/app/components/structure/InformationCard";
import { Clock, Gamepad2, PlayCircle, Trophy } from "lucide-react";

export default function InformationCardWrapper() {
  const cardTypes = [
    {
      title: "Total Games",
      quantity: 156,
      additionalInfo: "+8 this month",
      Icon: Gamepad2,
      iconColor: "text-gray-400",
      additionalTextColor: "text-green-600",
    },
    {
      title: "Platinums",
      quantity: 23,
      additionalInfo: "14.7% rate",
      Icon: Trophy,
      iconColor: "text-yellow-500",
      additionalTextColor: "text-blue-600",
    },
    {
      title: "Current Playing",
      quantity: 7,
      additionalInfo: "~45h remaining",
      Icon: PlayCircle,
      iconColor: "text-green-500",
      additionalTextColor: "text-gray-500",
    },
    {
      title: "Backlog",
      quantity: 89,
      additionalInfo: "~340h estimated",
      Icon: Clock,
      iconColor: "text-orange-500",
      additionalTextColor: "text-gray-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 gap-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {cardTypes.map((card, index) => (
          <InformationCard
            title={card.title}
            additionalInfo={card.additionalInfo}
            gameQTD={card.quantity}
            Icon={card.Icon}
            additionalTextColor={card.additionalTextColor}
            iconColor={card.iconColor}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

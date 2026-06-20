import { Trophy } from "lucide-react";

export default function Ticker() {
  const winners = [
    "David won $120",
    "Sarah won $80",
    "Mike won $250",
    "Jenny won $90",
  ];

  return (
    <div className="bg-[#F7F4F2] py-4 overflow-hidden tikl">
      <div className="flex gap-10 whitespace-nowrap animate-pulse justify-center">
        {winners.map((winner, index) => (
          <div
            key={index}
            className="flex items-center gap-2"
          >
            <Trophy size={16} />
            {winner}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Leaderboard() {
  const players = [
    ["CryptoKing", "$2,500"],
    ["BullHunter", "$1,800"],
    ["TrendMaster", "$1,200"],
  ];

  return (
    <section className="py-32">

      <h2
        className="text-center text-6xl mb-16"
        style={{ fontFamily: "Fredoka" }}
      >
        Top Players
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">

        {players.map((player, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-2xl p-6 flex justify-between"
          >
            <span>{player[0]}</span>
            <span>{player[1]}</span>
          </div>
        ))}

      </div>

    </section>
  );
}
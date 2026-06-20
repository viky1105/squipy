import { Sword } from "lucide-react";

export default function BattleArena() {
  return (
    <section className="py-32">

      <h2
        className="text-center text-6xl font-bold mb-16"
        style={{ fontFamily: "Fredoka" }}
      >
        Prediction Arena
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-center">

        <div className="bg-white shadow-xl p-8 rounded-3xl">
          <h3>Player A</h3>
          <p className="mt-4">$50 Stake</p>
          <p>Bullish</p>
        </div>

        <div className="flex justify-center">
          <Sword size={70} />
        </div>

        <div className="bg-white shadow-xl p-8 rounded-3xl">
          <h3>Player B</h3>
          <p className="mt-4">$50 Stake</p>
          <p>Bearish</p>
        </div>

      </div>

    </section>
  );
}
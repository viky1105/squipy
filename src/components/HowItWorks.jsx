import { Wallet, TrendingUp, Trophy } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Stake",
      text: "Choose how much money you want to battle with.",
      icon: Wallet,
    },
    {
      title: "Predict",
      text: "Choose Bullish or Bearish.",
      icon: TrendingUp,
    },
    {
      title: "Win",
      text: "Winner takes the entire prize pool.",
      icon: Trophy,
    },
  ];

  return (
    <section id="how" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-5xl text-center mb-16"
          style={{ fontFamily: "Fredoka" }}
        >
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="bg-[#F7F4F2] p-8 rounded-3xl hover:scale-105 transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
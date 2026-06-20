import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "How does Squipy work?",
      answer:
        "Players stake an amount, choose a prediction side, and compete against another player. The correct prediction wins the prize pool.",
    },
    {
      question: "What happens if both players choose the same side?",
      answer:
        "No worries. If both players make the same prediction, the match is cancelled and both players receive a refund.",
    },
    {
      question: "How quickly are results settled?",
      answer:
        "Matches are settled automatically as soon as the round ends and a result is determined.",
    },
    {
      question: "Can I challenge my friends?",
      answer:
        "Absolutely. Create a private room, send your invite link, and battle your friends directly.",
    },
    {
      question: "Is there a leaderboard?",
      answer:
        "Yes. Win matches, earn rewards, and climb the rankings to become a Squipy legend.",
    },
    {
      question: "Is Squipy fair?",
      answer:
        "Every match follows the same transparent rules and automatic settlement process.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="py-32 relative"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-center text-6xl mb-6"
          style={{ fontFamily: "Fredoka" }}
        >
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-500 mb-16">
          Everything you need to know before entering the arena.
        </p>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(
                    open === index
                      ? null
                      : index
                  )
                }
                className="w-full p-6 flex justify-between items-center text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                {open === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  open === index
                    ? "max-h-40"
                    : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
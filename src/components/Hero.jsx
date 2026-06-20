import squid from "../assets/squid.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1
            className="text-6xl md:text-8xl font-bold leading-tight"
            style={{ fontFamily: "Fredoka" }}
          >
            Predict.
            <br />
            Compete.
            <br />
            Win.
          </h1>

          <p className="text-xl text-gray-600 mt-6">
            Stake against other players and test your instincts.
          </p>

          <div className="flex gap-4 mt-8">
            <a href="https://game.squipy.xyz/">
              <button className="bg-[#A88374] text-white px-8 py-4 rounded-full">
                Play Now
              </button>
            </a>

            <button className="border px-8 py-4 rounded-full">
             <a href="#faq">Learn More</a>
            </button>
          </div>
        </div>

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        >
          <img
            src={squid}
            alt="Squid"
            className="w-full max-w-lg mx-auto"
          /> 
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#A88374]/20 blur-[120px]" />
        </motion.div>
      </div>
    </section>
  );
}
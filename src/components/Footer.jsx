import squid from "../assets/squid.png";
import { motion } from "framer-motion";
import {
  Send,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.img
          src={squid}
          alt="squid"
          className="w-40 mx-auto mb-8"
          animate={{
            y: [0, -15, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        <h2
          className="text-6xl font-bold"
          style={{ fontFamily: "Fredoka" }}
        >
          See You In The Arena
        </h2>

        <p className="mt-6 text-gray-500 text-lg">
          Stake. Predict. Win.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-10">

         
          <a
            href="https://x.com/squipygame"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <Send size={22} />
          </a>

          <a
            href="https://game.squipy.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <Globe size={22} />
          </a>

        </div>

        <div className="mt-16 text-sm text-gray-400">
          © 2026 Squipy
        </div>

      </div>
    </footer>
  );
}
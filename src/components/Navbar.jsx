export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1
          className="text-3xl font-bold"
          style={{ fontFamily: "Fredoka" }}
        >
          Squipy
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#how">How It Works</a>
          <a href="#stats">Stats</a>
          <a href="#faq">FAQ</a>
        </div>

        <a href="https://game.squipy.xyz/">
          <button className="bg-[#A88374] text-white px-6 py-3 rounded-full">
            Play Now
          </button>
        </a>
      </div>
    </nav>
  );
}
export default function CTA() {
  return (
    <section className="py-32 text-center">

      <h2
        className="text-6xl font-bold"
        style={{ fontFamily: "Fredoka" }}
      >
        Ready To Battle?
      </h2>

      <p className="mt-6 text-xl text-gray-600">
        Join thousands of players and start predicting.
      </p>

      <a href="https://game.squipy.xyz/">
        <button className="mt-10 bg-[#A88374] text-white px-10 py-5 rounded-full">
          Start Playing
        </button>
      </a>

    </section>
  );
}
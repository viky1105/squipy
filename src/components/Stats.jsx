export default function Stats() {
  return (
    <section
      id="stats"
      className="py-24 bg-[#A88374] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-5xl font-bold">100+</h3>
            <p>Players</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">$10K+</h3>
            <p>Won</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">5K+</h3>
            <p>Matches</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">98%</h3>
            <p>Payout Success</p>
          </div>

        </div>
      </div>
    </section>
  );
}
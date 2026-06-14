export default function CommunitySection() {
  return (
    <section className="py-28 px-6 bg-[#0A0F3A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold leading-tight">
          One Client Onboarded,<br />
          One Local Vendor <span className="text-[#04C678]">Empowered — For Free!</span>
        </h2>

        <p className="mt-6 max-w-3xl text-gray-300 text-lg">
          For every client we onboard, we support a local vendor by offering free
          branding or marketing services. Helping businesses grow while uplifting
          local vendors — together, we thrive!
        </p>

        <button className="mt-8 bg-white text-[#0A0F3A] px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100">
          Community Service
        </button>

        {/* DECOR IMAGES */}
        <div className="mt-14 grid md:grid-cols-3 gap-10">
          
          {/* Indian Market Vendor */}
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80"
            className="rounded-xl shadow-xl h-[260px] w-full object-cover"
          />

          {/* Indian Shop Owner */}
          <img
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=1000&q=80"
            className="rounded-xl shadow-xl h-[260px] w-full object-cover"
          />

          {/* Indian Street Business */}
          <img
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80
"
            className="rounded-xl shadow-xl h-[260px] w-full object-cover"
          />

        </div>

      </div>
    </section>
  );
}

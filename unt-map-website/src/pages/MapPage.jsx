export default function MapPage() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 rounded-3xl border border-white/50 bg-white/75 p-6 shadow-xl backdrop-blur-lg">
          <h1 className="text-3xl font-bold text-slate-900">Interactive Map</h1>
          <p className="mt-2 text-slate-600">
            Explore Discovery Park using the embedded Unity WebGL map below.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/50 bg-white/80 p-4 shadow-2xl backdrop-blur-lg">
          <iframe
            src="./map/index.html"
            title="UNT Discovery Park Map"
            className="h-[78vh] min-h-[520px] w-full rounded-2xl border-0 bg-slate-200 md:min-h-[700px]"
          />
        </div>
      </div>
    </section>
  );
}
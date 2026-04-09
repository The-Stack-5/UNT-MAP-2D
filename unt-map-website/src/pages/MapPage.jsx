export default function MapPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Interactive Map</h1>
        <p className="mt-2 text-slate-600">
          Explore Discovery Park using the embedded Unity WebGL map below.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <iframe
          src="/map/index.html"
          title="UNT Discovery Park Map"
          className="h-[78vh] min-h-[700px] w-full rounded-2xl border-0 bg-slate-200"
        />
      </div>
    </section>
  );
}
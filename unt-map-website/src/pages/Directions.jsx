export default function Directions() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            How to Use the Map
          </h1>
          <p className="mt-3 text-slate-600">
            Quick instructions for exploring the Discovery Park map.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="rounded-2xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-emerald-700">Zoom</h3>
            <p className="mt-2 text-slate-600">
              Use the mouse wheel or trackpad to zoom in and out of the map.
            </p>
          </div>

          <div className="rounded-2xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-emerald-700">Pan</h3>
            <p className="mt-2 text-slate-600">
              Click and drag to move around the floor layout.
            </p>
          </div>

          <div className="rounded-2xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-emerald-700">
              Explore Floors
            </h3>
            <p className="mt-2 text-slate-600">
              Use the controls inside the map to switch between floors if that
              feature is enabled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
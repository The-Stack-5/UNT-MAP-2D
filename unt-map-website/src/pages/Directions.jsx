export default function Directions() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">How to Use the Map</h1>
        <p className="mt-3 text-slate-600">
          Quick instructions for navigating the Discovery Park map.
        </p>
      </div>

      <div className="grid gap-5">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold text-emerald-700">Zoom</h3>
          <p className="mt-2 text-slate-600">
            Use the mouse wheel or trackpad to zoom in and out.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold text-emerald-700">Pan</h3>
          <p className="mt-2 text-slate-600">
            Click and drag to move around the floor map.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold text-emerald-700">Switch Floors</h3>
          <p className="mt-2 text-slate-600">
            Use the controls inside the Unity map to move between available floors.
          </p>
        </div>
      </div>
    </section>
  );
}
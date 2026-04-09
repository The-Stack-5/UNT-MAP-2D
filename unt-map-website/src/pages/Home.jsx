import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-500 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            Discovery Park Navigation
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Navigate Discovery Park with ease.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-emerald-50 md:text-lg">
            Explore the building, switch floors, and interact with the Unity map
            directly in your browser.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/map"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-emerald-800 shadow hover:bg-emerald-50"
            >
              Open Interactive Map
            </Link>
            <Link
              to="/about"
              className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Features</h2>
          <p className="mt-3 text-slate-600">
            A cleaner web experience around your Unity project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-emerald-700">Interactive Map</h3>
            <p className="mt-3 text-slate-600">
              View the Discovery Park floor map directly in the browser.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-emerald-700">Floor Switching</h3>
            <p className="mt-3 text-slate-600">
              Move between floors to find your destination faster.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-emerald-700">Future Navigation</h3>
            <p className="mt-3 text-slate-600">
              Built for classroom directions, hotspots, and route guidance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
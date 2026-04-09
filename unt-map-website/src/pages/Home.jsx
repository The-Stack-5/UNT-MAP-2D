import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-500 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            Discovery Park Navigation
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Navigate Discovery Park with a cleaner, smarter campus map.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-emerald-50 md:text-lg">
            Explore the building, switch floors, and access your Unity-powered
            interactive map through a polished web experience.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/map"
              className="w-full rounded-xl bg-white px-6 py-3 text-center font-semibold text-emerald-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50 sm:w-auto"
            >
              Open Interactive Map
            </Link>

            <Link
              to="/about"
              className="w-full rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Why this exists</h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Discovery Park can be difficult to navigate, especially for new
            students and visitors. UNT Navigator gives users a clearer, more
            accessible way to understand the layout and locate destinations.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-100 to-slate-200 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Features</h2>
            <p className="mt-3 text-slate-600">
              A cleaner web experience around your Unity project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-emerald-700">
                Interactive Map
              </h3>
              <p className="mt-3 text-slate-600">
                View the Discovery Park floor map directly in the browser with a
                cleaner surrounding interface.
              </p>
            </div>

            <div className="rounded-2xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-emerald-700">
                Floor Switching
              </h3>
              <p className="mt-3 text-slate-600">
                Move between floors and explore the layout more efficiently.
              </p>
            </div>

            <div className="rounded-2xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-emerald-700">
                Future Navigation
              </h3>
              <p className="mt-3 text-slate-600">
                Ready for classroom lookup, wayfinding, and route guidance
                features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
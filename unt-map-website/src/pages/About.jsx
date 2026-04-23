export default function About() {
  return (
    <section className="bg-linear-to-b from-slate-50 to-slate-100 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-white/50 bg-white/75 p-8 shadow-xl backdrop-blur-lg md:p-10">
          <h1 className="text-3xl font-bold text-slate-900">
            About This Project
          </h1>

          <p className="mt-5 leading-8 text-slate-600">
            UNT Navigator is a web experience built around a Unity WebGL map of
            Discovery Park. The goal is to help students and visitors understand
            the building layout and find classrooms more easily.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Rather than presenting the Unity map by itself, this site creates a
            more polished and accessible interface with room for instructions,
            project context, and future navigation features.
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900">
              How it works
            </h2>

            <p className="mt-3 leading-8 text-slate-600">
              The system uses a waypoint-based graph to represent walkable paths
              inside the building. When a user selects a start and destination,
              the application calculates the shortest path using pathfinding
              logic and displays the route directly on the map.
            </p>

            <p className="mt-3 leading-8 text-slate-600">
              Floor transitions are handled through connected nodes such as
              stairs and elevators, allowing navigation between different levels
              of the building.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900">
              Project Team
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-slate-700 shadow-md backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-white/90">
                Tedros Tecle
              </div>

              <div className="rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-slate-700 shadow-md backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-white/90">
                Priscilla Osineye
              </div>

              <div className="rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-slate-700 shadow-md backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-white/90">
                Vicky Wainaina
              </div>

              <div className="rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-slate-700 shadow-md backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-white/90">
                Edidiong Anwan
              </div>

              <div className="rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-slate-700 shadow-md backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-white/90 sm:col-span-2 sm:justify-self-center">
                Aimua Ilogienboh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
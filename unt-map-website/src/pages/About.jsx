export default function About() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-16">
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
        </div>
      </div>
    </section>
  );
}
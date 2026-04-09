export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-3xl font-bold text-slate-900">About This Project</h1>
        <p className="mt-5 leading-7 text-slate-600">
          UNT Navigator is a web experience built around a Unity WebGL map of
          Discovery Park. The goal is to help students and visitors understand
          the building layout and find classrooms more easily.
        </p>
        <p className="mt-4 leading-7 text-slate-600">
          This site gives your Unity project a cleaner browser experience and
          creates room for future features like classroom search, shortest-path
          routing, and improved floor navigation.
        </p>
      </div>
    </section>
  );
}
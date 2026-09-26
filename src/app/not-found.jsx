import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f] px-5 text-white">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ccff00]">
          FITLOG
        </p>

        <h1 className="mt-4 text-7xl font-black sm:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-black uppercase">
          Workout Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:scale-105"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
}
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutCard from "./components/WorkoutCard";
import { getWorkouts } from "../lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-[#0b0d0f] text-white">
      <Navbar />

      <Hero />

      <section
        id="library"
        className="mx-auto max-w-7xl px-5 py-20 lg:px-8"
      >
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
            The Library
          </h2>

          <p className="mt-3 text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
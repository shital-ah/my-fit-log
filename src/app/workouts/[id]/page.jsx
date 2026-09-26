import Link from "next/link";
import { getWorkout } from "../../../lib/api";
import WorkoutActions from "../../components/WorkoutActions";

export default async function WorkoutDetails({ params }) {
    const { id } = await params;
    const workout = await getWorkout(id);

    return (
        <main className="min-h-screen bg-[#0b0d0f] text-white">
            {/* Back Button */}
            <div className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
                <Link
                    href="/"
                    className="text-sm font-bold uppercase tracking-wider text-gray-400 transition hover:text-[#ccff00]"
                >
                    ← Back to Library
                </Link>
            </div>

            {/* Details */}
            <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-2 lg:px-8 lg:py-16">

                {/* Image */}
                <div className="overflow-hidden rounded-2xl border border-[#262a2e] bg-[#14171a]">
                    <img
                        src={workout.image}
                        alt={workout.name}
                        className="h-[400px] w-full object-cover sm:h-[520px]"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">

                    {/* Tags */}
                    <div className="mb-5 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full border border-[#3a3f44] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ccff00]"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
                        {workout.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl leading-7 text-gray-400">
                        {workout.description}
                    </p>

                    {/* Specs */}
                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div className="rounded-xl border border-[#262a2e] bg-[#14171a] p-4">
                            <p className="text-xs uppercase text-gray-500">Duration</p>
                            <p className="mt-1 font-black">{workout.duration} min</p>
                        </div>

                        <div className="rounded-xl border border-[#262a2e] bg-[#14171a] p-4">
                            <p className="text-xs uppercase text-gray-500">Calories</p>
                            <p className="mt-1 font-black">{workout.caloriesBurned} kcal</p>
                        </div>

                        <div className="rounded-xl border border-[#262a2e] bg-[#14171a] p-4">
                            <p className="text-xs uppercase text-gray-500">Sets</p>
                            <p className="mt-1 font-black">{workout.sets}</p>
                        </div>

                        <div className="rounded-xl border border-[#262a2e] bg-[#14171a] p-4">
                            <p className="text-xs uppercase text-gray-500">Rating</p>
                            <p className="mt-1 font-black">★ {workout.rating}</p>
                        </div>
                    </div>

                    {/* Equipment */}
                    <div className="mt-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                            Equipment
                        </p>

                        <p className="mt-2 text-gray-300">
                            {workout.equipment}
                        </p>
                    </div>

                    {/* Instructions */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-black uppercase">
                            Instructions
                        </h2>

                        <div className="mt-4 space-y-3">
                            {workout.instructions.map((instruction, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 rounded-xl border border-[#262a2e] bg-[#14171a] p-4"
                                >
                                    <span className="font-black text-[#ccff00]">
                                        {index + 1}
                                    </span>

                                    <p className="text-sm leading-6 text-gray-400">
                                        {instruction}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <WorkoutActions workout={workout} />

                </div>
            </section>
        </main>
    );
}
"use client";

import Link from "next/link";
import { useState } from "react";
import { useFitLog } from "../../context/FitLogContext";

export default function MyPlan() {
    const { plan, saved, removeFromPlan, removeSaved, showToast } = useFitLog();

    const [activeTab, setActiveTab] = useState("plan");
    const [completed, setCompleted] = useState([]);

    const totalMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    const currentWorkouts = activeTab === "plan" ? plan : saved;

    return (
        <main className="min-h-screen bg-[#0b0d0f] text-white">
            {/* Header */}
            <section className="border-b border-[#262a2e]">
                <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
                    <Link
                        href="/"
                        className="text-sm font-bold uppercase tracking-wider text-gray-500 transition hover:text-[#ccff00]"
                    >
                        ← Back to Workouts
                    </Link>

                    <h1 className="mt-8 text-4xl font-black uppercase tracking-tight sm:text-6xl">
                        My Plan
                    </h1>

                    <p className="mt-3 max-w-xl text-gray-500">
                        Your selected workouts, ready to train.
                    </p>
                </div>
            </section>

            {/* Metrics */}
            <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
                <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-[#262a2e] bg-[#14171a] p-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                            Exercises
                        </p>
                        <p className="mt-2 text-3xl font-black">{plan.length}</p>
                    </div>

                    <div className="rounded-2xl border border-[#262a2e] bg-[#14171a] p-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                            Minutes
                        </p>
                        <p className="mt-2 text-3xl font-black">{totalMinutes}</p>
                    </div>

                    <div className="rounded-2xl border border-[#262a2e] bg-[#14171a] p-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                            Calories
                        </p>
                        <p className="mt-2 text-3xl font-black">{totalCalories}</p>
                    </div>
                </div>
            </section>

            {/* Tabs */}
            <section className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="flex gap-3 border-b border-[#262a2e]">
                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`border-b-2 px-4 py-4 text-sm font-black uppercase tracking-wider ${activeTab === "plan"
                            ? "border-[#ccff00] text-[#ccff00]"
                            : "border-transparent text-gray-500"
                            }`}
                    >
                        Today's Plan
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`border-b-2 px-4 py-4 text-sm font-black uppercase tracking-wider ${activeTab === "saved"
                            ? "border-[#ccff00] text-[#ccff00]"
                            : "border-transparent text-gray-500"
                            }`}
                    >
                        Saved
                    </button>
                </div>
            </section>

            {/* Workout List */}
            <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
                {currentWorkouts.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-[#3a3f44] py-20 text-center">
                        <h2 className="text-2xl font-black uppercase">
                            {activeTab === "plan"
                                ? "Your plan is empty"
                                : "No saved workouts"}
                        </h2>

                        <p className="mt-3 text-gray-500">
                            {activeTab === "plan"
                                ? "Add workouts from the library to build your plan."
                                : "Save workouts you want to try later."}
                        </p>

                        <Link
                            href="/#library"
                            className="mt-6 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase tracking-wide text-black"
                        >
                            Go to Workouts
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-5 md:grid-cols-2">
                        {currentWorkouts.map((workout) => (
                            <div
                                key={workout.id}
                                className="overflow-hidden rounded-2xl border border-[#262a2e] bg-[#14171a]"
                            >
                                <div className="grid sm:grid-cols-[180px_1fr]">
                                    {/* Thumbnail */}
                                    <img
                                        src={workout.image}
                                        alt={workout.name}
                                        className="h-52 w-full object-cover sm:h-full"
                                    />

                                    {/* Content */}
                                    <div className="p-5">
                                        <div className="flex flex-wrap gap-2">
                                            {workout.muscleGroups.map((muscle) => (
                                                <span
                                                    key={muscle}
                                                    className="rounded-full border border-[#3a3f44] px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-400"
                                                >
                                                    {muscle}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="mt-3 text-xl font-black uppercase">
                                            {workout.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            {workout.equipment}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-400">
                                            <span>◷ {workout.duration} min</span>
                                            <span>🔥 {workout.caloriesBurned} kcal</span>
                                            <span>★ {workout.rating}</span>
                                        </div>

                                        {/* Actions */}
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            <Link
                                                href={`/workouts/${workout.id}`}
                                                className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black uppercase text-black"
                                            >
                                                View Details
                                            </Link>

                                            <button
                                                onClick={() => {
                                                    if (!completed.includes(workout.id)) {
                                                        setCompleted([...completed, workout.id]);
                                                        showToast(`${workout.name} marked as done.`);
                                                    }
                                                }}
                                                disabled={completed.includes(workout.id)}
                                                className="rounded-full border border-[#ccff00] px-4 py-2 text-xs font-black uppercase text-[#ccff00] disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                {completed.includes(workout.id) ? "Done" : "Mark as Done"}
                                            </button>

                                            <button
                                                onClick={() =>
                                                    activeTab === "plan"
                                                        ? removeFromPlan(workout.id)
                                                        : removeSaved(workout.id)
                                                }
                                                className="rounded-full border border-[#3a3f44] px-4 py-2 text-xs font-black uppercase text-gray-400 transition hover:border-red-500 hover:text-red-400"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
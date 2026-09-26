"use client";

import { useFitLog } from "../../context/FitLogContext";

export default function WorkoutActions({ workout }) {
    const { plan, saved, addToPlan, saveWorkout } = useFitLog();

    const isInPlan = plan.some((item) => item.id === workout.id);
    const isSaved = saved.some((item) => item.id === workout.id);

    return (
        <div className="mt-8 flex flex-wrap gap-3">
            <button
                onClick={() => addToPlan(workout)}
                disabled={isInPlan || plan.length >= 5}
                className="rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase tracking-wide text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
                {isInPlan ? "Added to Plan" : "Add to Plan"}
            </button>

            <button
                onClick={() => saveWorkout(workout)}
                disabled={isSaved}
                className="rounded-full border border-[#ccff00] px-6 py-3 text-sm font-black uppercase tracking-wide text-[#ccff00] disabled:cursor-not-allowed disabled:opacity-50"
            >
                {isSaved ? "Saved" : "Save Later"}
            </button>
        </div>
    );
}
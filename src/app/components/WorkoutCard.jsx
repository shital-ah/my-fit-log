import Link from "next/link";

export default function WorkoutCard({ workout }) {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            className="group overflow-hidden rounded-2xl border border-[#262a2e] bg-[#14171a] transition hover:-translate-y-1 hover:border-[#ccff00]"
        >
            {/* Image */}
            <div className="h-60 overflow-hidden bg-[#0f1113]">
                <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Category Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full border border-[#3a3f44] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-300"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Name */}
                <h3 className="text-xl font-black uppercase leading-tight text-white">
                    {workout.name}
                </h3>

                {/* Equipment */}
                <p className="mt-2 text-sm text-gray-500">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-5 flex items-center justify-between border-t border-[#262a2e] pt-4 text-xs font-semibold text-gray-400">
                    <span>◷ {workout.duration} min</span>
                    <span>🔥 {workout.caloriesBurned} kcal</span>
                    <span>★ {workout.rating}</span>
                </div>
            </div>
        </Link>
    );
}
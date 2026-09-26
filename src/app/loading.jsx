export default function Loading() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f] text-white">
            <div className="text-center">
                <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-[#262a2e] border-t-[#ccff00]"></div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                    Loading workouts...
                </p>
            </div>
        </main>
    );
}
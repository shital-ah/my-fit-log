"use client";

export default function Toast({ message }) {
    if (!message) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[100] rounded-xl border border-[#ccff00] bg-[#14171a] px-5 py-4 text-sm font-bold text-white shadow-lg">
            {message}
        </div>
    );
}
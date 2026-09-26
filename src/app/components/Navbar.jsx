"use client";

import Link from "next/link";
import { useState } from "react";
import { useFitLog } from "../../context/FitLogContext";

export default function Navbar() {
    const { plan, saved } = useFitLog();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-[#262a2e] bg-[#0b0d0f]/95 backdrop-blur">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-2xl text-white md:hidden"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ccff00] text-xl font-black text-black">
                        F
                    </div>

                    <span className="text-xl font-black tracking-wide text-white">
                        FIT<span className="text-[#ccff00]">LOG</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/"
                        className="text-sm font-bold uppercase tracking-wider text-[#ccff00]"
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className="text-sm font-bold uppercase tracking-wider text-gray-400 transition hover:text-white"
                    >
                        My Plan
                    </Link>
                </div>

                {/* Counters */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/my-plan"
                        className="rounded-full bg-[#ccff00] px-3 py-2 text-xs font-black uppercase tracking-wide text-black sm:px-4"
                    >
                        Plan <span className="ml-1">{plan.length}</span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full border border-[#ccff00] px-3 py-2 text-xs font-black uppercase tracking-wide text-[#ccff00] sm:px-4"
                    >
                        Saved <span className="ml-1">{saved.length}</span>
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="border-t border-[#262a2e] bg-[#0b0d0f] px-5 py-5 md:hidden">
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="text-sm font-bold uppercase tracking-wider text-[#ccff00]"
                        >
                            Workout
                        </Link>

                        <Link
                            href="/my-plan"
                            onClick={() => setMenuOpen(false)}
                            className="text-sm font-bold uppercase tracking-wider text-gray-400"
                        >
                            My Plan
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
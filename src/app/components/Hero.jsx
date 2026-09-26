import Image from "next/image";
import Link from "next/link";
import bannerImage from "../../assets/banner.png";
export default function Hero() {
    return (
        <section className="border-b border-[#262a2e]">
            <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

                {/* Left Content */}
                <div>
                    <p className="mb-5 text-sm font-bold tracking-[0.25em] text-[#ccff00]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                        Train With Intent.
                        <br />
                        Log Every Set.
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into Todays plan, and watch the weeks work add up.
                    </p>

                    <Link
                        href="#library"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:scale-105"
                    >
                        Browse Workouts
                        <span>→</span>
                    </Link>
                </div>

                {/* Hero Image */}
                <div className="relative overflow-hidden rounded-2xl border border-[#262a2e] bg-[#14171a]">
                    <Image
                        src={bannerImage}
                        alt="FitLog workout"
                        className="h-[380px] w-full object-cover sm:h-[480px] lg:h-[540px]"
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
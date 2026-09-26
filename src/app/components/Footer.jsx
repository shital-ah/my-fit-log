import Image from "next/image";
import logo from "../../assets/logo.png";

export default function Footer() {
    return (
        <footer className="sticky bottom-0 z-40 border-t border-[#262a2e] bg-[#14171a]">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9  justify-center">
                        <Image
                            src={logo}
                            alt="FitLog logo"
                            className="h-10 w-10 object-contain"
                        />
                    </div>

                    <span className="text-xl font-black tracking-wide text-white">
                        FIT<span className="text-[#ccff00]">LOG</span>
                    </span>
                </div>

                <p className="text-sm text-gray-500">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
}
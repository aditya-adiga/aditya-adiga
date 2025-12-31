"use client";

import { useMode } from "./ModeContext";

export default function Toggle() {
    const { mode, toggleMode } = useMode();

    return (
        <button
            onClick={toggleMode}
            className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-1 py-1 rounded-full border transition-all duration-300 hover:scale-105 ${mode === "research"
                    ? "bg-[#FDFBF7] border-[#1c1c1c] shadow-sm"
                    : "bg-[#1c1c1c] border-[#FDFBF7] shadow-md"
                }`}
            aria-label="Toggle between Research and Studio mode"
        >
            {/* Research Label */}
            <div
                className={`px-4 py-2 rounded-full transition-all duration-300 flex flex-col items-center ${mode === "research"
                        ? "bg-[#1c1c1c] text-[#FDFBF7]"
                        : "text-[#FDFBF7] opacity-60 hover:opacity-100"
                    }`}
            >
                <span className="font-serif text-sm font-medium tracking-wide">
                    Research
                </span>
            </div>

            {/* Studio Label */}
            <div
                className={`px-4 py-2 rounded-full transition-all duration-300 flex flex-col items-center ${mode === "studio"
                        ? "bg-[#FDFBF7] text-[#1c1c1c]"
                        : "text-[#1c1c1c] opacity-60 hover:opacity-100"
                    }`}
            >
                <span className="font-sans text-sm font-medium tracking-wide">
                    Studio
                </span>
            </div>
        </button>
    );
}

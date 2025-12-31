"use client";

import React, { ReactNode } from "react";
import { useMode } from "./ModeContext";

export default function ModeLayout({ children }: { children: ReactNode }) {
    const { mode } = useMode();

    return (
        <div
            className={`min-h-screen w-full transition-colors duration-500 ease-in-out ${mode === "research" ? "bg-[#F5F2E8]" : "bg-[#E8F5F3]"
                }`}
        >
            {children}
        </div>
    );
}

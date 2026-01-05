"use client";

import { useMode } from "@/components/ModeContext";
import React from "react";

interface HomePageProps {
    researchView: React.ReactNode;
}

export default function HomePage({ researchView }: HomePageProps) {
    const { mode } = useMode();

    return (
        <main className="min-h-screen">
            {/* Conditional Rendering based on Mode */}
            {mode === "research" ? (
                researchView
            ) : (
                <div className="flex min-h-screen items-center justify-center p-24 text-center animate-in fade-in duration-700">
                    <div>
                        <h1 className="text-4xl font-sans font-light text-foreground mb-4">The Studio</h1>
                        <p className="text-xl font-serif text-[var(--color-clay)] italic">A digital garden of half-formed thoughts.</p>
                        <p className="mt-8 text-sm font-mono opacity-50 text-[var(--color-sage)]">(Under Construction)</p>
                    </div>
                </div>
            )}
        </main>
    );
}

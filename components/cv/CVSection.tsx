import React, { ReactNode } from "react";

export default function CVSection({ title, children }: { title: string, children: ReactNode }) {
    return (
        <section className="mb-6">
            <h2 className="font-serif text-lg font-bold uppercase tracking-wide border-b border-[var(--color-foreground)] mb-4 pb-1 text-[var(--color-foreground)]">
                {title}
            </h2>
            <div className="space-y-4">
                {children}
            </div>
        </section>
    );
}

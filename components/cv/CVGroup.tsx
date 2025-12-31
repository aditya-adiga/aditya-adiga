import React, { ReactNode } from "react";

interface CVGroupProps {
    title: string;
    date: string;
    subtitle: string;
    children?: ReactNode;
}

export default function CVGroup({ title, date, subtitle, children }: CVGroupProps) {
    return (
        <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="font-bold text-lg font-serif">{title}</h3>
                <span className="font-serif text-base italic text-[var(--color-foreground)]/80">{date}</span>
            </div>
            <div className="italic text-base font-serif mb-3 text-[var(--color-foreground)]/80">{subtitle}</div>
            <div className="space-y-4 pl-0">
                {children}
            </div>
        </div>
    );
}

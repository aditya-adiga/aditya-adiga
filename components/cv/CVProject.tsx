import React, { ReactNode } from "react";

interface CVProjectProps {
    title: string;
    url?: string;
    links?: { label: string; url: string }[];
    subtitle?: string; // e.g. "Substrate-sensitive approaches..."
    affiliation?: string; // e.g. "Groundless AI"
    collaborators?: string;
    summary?: string; // Narrative description
    bullets?: ReactNode[]; // Optional bullet points
}

export default function CVProject({ title, url, links, subtitle, affiliation, collaborators, summary, bullets }: CVProjectProps) {
    return (
        <div className="pl-2 sm:pl-4">
            <div className="mb-1">
                {url ? (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="font-bold text-base font-serif block sm:inline underline hover:text-[var(--color-sage)] transition-colors">
                        {title}
                    </a>
                ) : (
                    <span className="font-bold text-base font-serif block sm:inline">{title}</span>
                )}
                {subtitle && <span className="font-serif text-base italic block sm:inline sm:ml-1"> — {subtitle}</span>}
            </div>
            {affiliation && (
                <div className="text-sm font-serif text-[var(--color-sage)] italic mb-2">
                    {affiliation}
                </div>
            )}
            {links && links.length > 0 && (
                <div className="flex gap-3 text-sm font-serif mb-2">
                    {links.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[var(--color-foreground)]/80 underline decoration-[var(--color-clay)]/60 hover:text-[var(--color-sage)] transition-colors">
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
            {collaborators && (
                <div className="text-sm font-serif text-[var(--color-foreground)]/70 mb-2">
                    {collaborators}
                </div>
            )}

            {summary && (
                <p className="text-base font-serif leading-relaxed text-[var(--color-foreground)]/90 mb-3 max-w-3xl">
                    {summary}
                </p>
            )}

            {bullets && bullets.length > 0 && (
                <ul className="list-disc list-outside ml-4 space-y-1">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="text-base font-serif leading-relaxed text-[var(--color-foreground)]/90 pl-1 marker:text-[var(--color-foreground)]/50">
                            {bullet}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

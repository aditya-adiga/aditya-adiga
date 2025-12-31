import React from "react";
import Image from "next/image";

export default function CVHeader() {
    return (
        <header className="mb-8">
            <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
                <div className="text-center sm:text-left">
                    <h1 className="font-serif text-5xl sm:text-6xl font-medium tracking-tight text-foreground uppercase mb-4">
                        Aditya Adiga
                    </h1>

                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-base font-serif text-[var(--color-foreground)]/80">
                        <a href="mailto:adityaadiga6@gmail.com" className="hover:underline">adityaadiga6@gmail.com</a>
                        <span className="hidden sm:inline">|</span>

                        <a href="https://www.linkedin.com/in/aditya-adiga-a243631a1/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                        <span className="hidden sm:inline">|</span>
                        <a href="https://github.com/aditya-adiga" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                        <span className="hidden sm:inline">|</span>
                        <a href="https://www.lesswrong.com/users/adiga" target="_blank" rel="noopener noreferrer" className="hover:underline">LessWrong</a>

                    </div>
                </div>

                <div className="flex justify-center sm:justify-end shrink-0">
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-md transition-all duration-500 shadow-sm md:mt-1">
                        <Image
                            src="/pics/profile.JPG"
                            alt="Aditya Adiga"
                            fill
                            sizes="(max-width: 640px) 128px, 144px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="text-[var(--color-foreground)] font-serif leading-relaxed text-base sm:text-lg border-t border-b border-[var(--color-clay)]/20 py-4 text-center sm:text-left flex flex-col gap-4">
                <p>
                    I’m an <strong>AI alignment researcher</strong> working on the <a href="https://www.lesswrong.com/posts/uueHkKrGmeEsKGHPR/live-conversational-threads-not-an-ai-notetaker-2" className="underline">live theory research agenda</a> at <a href="https://groundless.ai/" className="underline">groundless AI</a>, with a focus on how AI systems interact with human reasoning, coordination, and risk across contexts.
                </p>
                <p>
                    My work spans two primary directions: human-centered AI interfaces for collective sensemaking and epistemics, and the study of context- and substrate-flexible risks in AI systems. Across both, I’m interested in how AI capabilities can be shaped to support robust human discernment rather than replace or distort it.
                </p>
                <p>
                    I also have a technical background in computer vision, computational pathology, and medical imaging, grounding this research in applied AI development.
                </p>
                <p>
                    Please reach out to <a href="mailto:adityaadiga6@gmail.com" className="underline">adityaadiga6@gmail.com</a> to have a chat or to collaborate.
                </p>
            </div>
        </header >
    );
}

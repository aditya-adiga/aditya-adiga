"use client";

import React from "react";
import CVHeader from "@/components/cv/CVHeader";
import CVSection from "@/components/cv/CVSection";
import CVGroup from "@/components/cv/CVGroup";
import CVProject from "@/components/cv/CVProject";

export default function ResearchView() {
    return (
        <div className="w-full max-w-4xl mx-auto px-6 py-16 sm:py-24 animate-in fade-in duration-700 slide-in-from-bottom-4">
            <CVHeader />

            <CVSection title="Publications">
                <ul className="list-disc list-outside ml-4 space-y-4 text-base font-serif text-[var(--color-foreground)]/90">
                    <li className="pl-1 marker:text-[var(--color-foreground)]/50">
                        Matt Farr, Aditya Arpitha Prasad, Chris Pang, <strong>Aditya Adiga</strong>, Jayson Amati, and Sahil K. <a href="https://openreview.net/forum?id=n7WYSJ35FU" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-sage)] transition-colors border-b border-[var(--color-foreground)]/40 hover:border-[var(--color-sage)]"><em>MoSSAIC: AI safety after mechanism.</em></a> In Submitted to ILIAD 2: ODYSSEY, 2025. Accepted.
                        <br /><span className="italic block mt-1 opacity-80">Contribution: developed and presented an interface to support the ideas in the paper.</span>
                    </li>
                    <li className="pl-1 marker:text-[var(--color-foreground)]/50">
                        Bindiya A. R., <strong>Aditya Adiga</strong>, B. S. Mahanand, and DIRECT Consortium. <a href="https://www.mdpi.com/2076-3417/15/19/10312" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-sage)] transition-colors border-b border-[var(--color-foreground)]/40 hover:border-[var(--color-sage)]"><em>3D convolutional neural network model for detection of major depressive disorder from grey matter images.</em></a> Applied Sciences, 15(19), 2025.
                        <br /><span className="italic block mt-1 opacity-80">Contribution: worked on system design, implementation, analysis and manuscript writing.</span>
                    </li>
                    <li className="pl-1 marker:text-[var(--color-foreground)]/50">
                        <strong>Aditya Adiga</strong>, J Chandra Darshan, and K K Umesh. <a href="https://link.springer.com/chapter/10.1007/978-981-99-9069-6_23" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-sage)] transition-colors border-b border-[var(--color-foreground)]/40 hover:border-[var(--color-sage)]"><em>Smart greenhouse management system using IoT and multivariate fuzzy logic.</em></a> In Lecture Notes in Networks and Systems, Springer Nature Singapore, 2024.
                        <br /><span className="italic block mt-1 opacity-80">Contribution: responsible for the entire project lifecycle, including conceptualisation, system design, implementation, and manuscript writing.</span>
                    </li>
                </ul>
            </CVSection>

            <CVSection title="Experience">
                <CVGroup
                    title="Groundless AI / AI Safety Camp"
                    date="Jan 2025 -- Present"
                    subtitle="AI Safety Researcher"
                >
                    <div className="text-base font-serif opacity-80">Funding: Epistea (Research Scholarship); AI Safety Support (Research Grant)</div>
                </CVGroup>

                <CVGroup
                    title="Independent"
                    date="Oct 2024 -- Present"
                    subtitle="AI Researcher"
                >
                </CVGroup>

                <CVGroup
                    title="Indx.AI"
                    date="Jan 2023 -- Aug 2024"
                    subtitle="Junior Data Scientist / Research Intern"
                >
                </CVGroup>
            </CVSection>

            <CVSection title="Projects">
                <CVProject
                    title="MOSSAIC"
                    subtitle="Addressing substrate sensitivity risks in AI systems"
                    affiliation="Groundless AI / AI Safety Camp"
                    collaborators="Collaborators: Matthew Farr (Groundless AI), Sahil (Groundless AI)"
                    summary="MOSSAIC explores how AI risks and failure modes change across computational substrates, architectures, and deployment contexts. The work focuses on why safety interventions that succeed in one setting often fail when transferred to another. I develop frameworks that treat substrate sensitivity as a first-class concern, proposing families of mitigation strategies rather than universal solutions. This project contributes conceptual and theoretical grounding for substrate flexibility as a core problem in AI safety research."
                />

                <div className="mt-8"></div>
                <CVProject
                    title="Live Conversational Threads"
                    subtitle="Epistemic tool for collective sensemaking during conversations"
                    affiliation="Groundless AI / AI Safety Camp"
                    collaborators="Collaborator: Sahil (Groundless AI)"
                    summary="This project investigates how AI systems can support collective sensemaking without displacing human judgment. I designed an epistemic interface that backgrounds AI while preserving context, structure, and interpretive agency. Conversations are represented as directed acyclic graphs to maintain thematic relationships and enable non-disruptive navigation. The system supports bookmarking and marking potential insights, which can later be used to generate AI-assisted formalisms tailored to specific research interests. Alongside the technical work, I contribute philosophical analysis on human participation in AI-mediated research environments."
                />

                <div className="mt-8"></div>
                <CVProject
                    title="MDD Classification using 3D Convolutional Neural Networks"
                    affiliation="Independent"
                    collaborators="Collaborator: Dr. BS Mahanand (JSS Science and Technology University)"
                    summary="This project explores MRI-based classification of Major Depressive Disorder using three-dimensional convolutional neural networks. I designed and iteratively refined model architectures and built training and inference pipelines to support systematic experimentation. To improve interpretability, I applied Grad-CAM–based visualisation techniques to analyse model activations and identify salient brain regions. The work emphasises understanding model behaviour alongside predictive performance."
                />

                <div className="mt-8"></div>
                <CVProject
                    title="Automated Invoice Information Extraction"
                    affiliation="Independent (Freelance)"
                    summary="Designed an OCR-based pipeline for extracting structured information from scanned invoices, using image registration, template matching, and preprocessing to support robust performance across real-world document formats."
                />

                <div className="mt-8"></div>
                <CVProject
                    title="Tumour Microenvironment Segmentation in Whole Slide Images"
                    affiliation="Indx.AI"
                    summary="I worked on semantic segmentation of complex tumour microenvironments in whole-slide histopathology images. Using a UNET++-based architecture, I developed models to identify tumours, stroma, and surrounding tissue under conditions of high biological variability. Close collaboration with a pathologist informed annotation strategies and iterative model refinement. The resulting system achieved approximately 80% intersection-over-union while remaining robust to heterogeneous tissue structure."
                />

                <div className="mt-8"></div>
                <CVProject
                    title="Instance Segmentation of Tumour-Inflicting Lymphocytes"
                    affiliation="Indx.AI"
                    summary="Building on earlier segmentation work, this project focuses on identifying tumour-infiltrating lymphocytes within inflamed stroma regions. I fine-tuned Detectron2-based instance segmentation models and integrated them with upstream tumour microenvironment predictions. Model outputs were validated with domain experts to ensure relevance for downstream immunotherapy analysis."
                />

                <div className="mt-8"></div>
                <CVProject
                    title="Biomarker Scoring via Multiple Instance Learning"
                    affiliation="Indx.AI"
                    summary="This project investigates regression-based biomarker scoring using multiple instance learning. I built feature extraction pipelines based on histopathology foundation models and experimented with several MIL strategies. Model outputs were evaluated not only for predictive accuracy but also for biological plausibility and clinical applicability."
                />

                <div className="mt-8"></div>
                <CVProject
                    title="Parallelised Image Stitching and Heatmap Overlay Pipeline"
                    affiliation="Indx.AI"
                    summary="I developed a parallelised pipeline for large-scale whole-slide image processing using VIPS. The system stitches approximately eight million image tiles into pyramidal TIFF images and overlays heatmaps to support interpretation of model outputs. End-to-end processing time was reduced from several hours to under ten minutes, significantly improving scalability."
                />

                <div className="mt-8"></div>
                <CVProject
                    title="Integration of In-House Pathology Image Viewer with AI Pipelines"
                    affiliation="Indx.AI"
                    summary="This project focused on integrating AI inference pipelines with an in-house pathology image viewer. I designed workflows informed by user interviews to align model outputs with clinical interpretability requirements. API-level integration linked image storage, predictions, and visualisation layers, improving usability and enabling smoother diagnostic and research workflows."
                />
            </CVSection>

            {/* <CVSection title="Presentations">
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm font-serif text-[var(--color-foreground)]/90">
                    <li className="pl-1 marker:text-[var(--color-foreground)]/50">Presented <strong>Smart Greenhouse Management System Using IoT and Multivariate Fuzzy Logic</strong> at the International Conference on Innovative Computing and Communications (<strong>ICICC 2024</strong>), New Delhi.</li>
                    <li className="pl-1 marker:text-[var(--color-foreground)]/50">Presented <strong>Live Conversational Threads as part of the Autostructures project</strong> at the Minimal AI Safety Unconference (<strong>MAISU 2025</strong>).</li>
                    <li className="pl-1 marker:text-[var(--color-foreground)]/50"><strong>Live Conversational Threads</strong> was presented and alpha-tested at <strong>PIBBSS Fellowship Retreat</strong>, <strong>AI Alignment Retreat in India</strong> and <strong>Groundless Residency</strong> and was positively received.</li>
                </ul>
            </CVSection> */}
        </div>
    );
}

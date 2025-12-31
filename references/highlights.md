## Research & Project Highlights

### MOSSAIC  
*Substrate-sensitive approaches to AI risk mitigation*

MOSSAIC explores how AI risks and failure modes change across computational substrates, architectures, and deployment contexts. The work focuses on why safety interventions that succeed in one setting often fail when transferred to another. I develop frameworks that treat substrate sensitivity as a first-class concern, proposing families of mitigation strategies rather than universal solutions. This project contributes conceptual and theoretical grounding for substrate flexibility as a core problem in AI safety research.

---

### Live Conversational Threads  
*Epistemic tools for collective sensemaking in AI safety research*

This project investigates how AI systems can support collective sensemaking without displacing human judgment. I designed an epistemic interface that backgrounds AI while preserving context, structure, and interpretive agency. Conversations are represented as directed acyclic graphs to maintain thematic relationships and enable non-disruptive navigation. The system supports bookmarking and marking potential insights, which can later be used to generate AI-assisted formalisms tailored to specific research interests. Alongside the technical work, I contribute philosophical analysis on human participation in AI-mediated research environments.

---

### MRI-based MDD Classification  
*3D convolutional neural networks for mental health research*

This project explores MRI-based classification of Major Depressive Disorder using three-dimensional convolutional neural networks. I designed and iteratively refined model architectures and built training and inference pipelines to support systematic experimentation. To improve interpretability, I applied Grad-CAM–based visualisation techniques to analyse model activations and identify salient brain regions. The work emphasises understanding model behaviour alongside predictive performance.

---

### Tumour Microenvironment Segmentation  
*Whole slide image analysis*

I worked on semantic segmentation of complex tumour microenvironments in whole-slide histopathology images. Using a UNET++-based architecture, I developed models to identify tumours, stroma, and surrounding tissue under conditions of high biological variability. Close collaboration with a pathologist informed annotation strategies and iterative model refinement. The resulting system achieved approximately 80% intersection-over-union while remaining robust to heterogeneous tissue structure.

---

### Tumour-Infiltrating Lymphocyte Detection  
*Instance segmentation in histopathology*

Building on earlier segmentation work, this project focuses on identifying tumour-infiltrating lymphocytes within inflamed stroma regions. I fine-tuned Detectron2-based instance segmentation models and integrated them with upstream tumour microenvironment predictions. Model outputs were validated with domain experts to ensure relevance for downstream immunotherapy analysis.

---

### Biomarker Scoring via Multiple Instance Learning  
*Weakly supervised learning for histopathology*

This project investigates regression-based biomarker scoring using multiple instance learning. I built feature extraction pipelines based on histopathology foundation models and experimented with several MIL strategies. Model outputs were evaluated not only for predictive accuracy but also for biological plausibility and clinical applicability.

---

### Large-Scale Image Stitching and Visualisation  
*Scalable pathology pipelines*

I developed a parallelised pipeline for large-scale whole-slide image processing using VIPS. The system stitches approximately eight million image tiles into pyramidal TIFF images and overlays heatmaps to support interpretation of model outputs. End-to-end processing time was reduced from several hours to under ten minutes, significantly improving scalability.

---

### Clinical Viewer and AI Pipeline Integration  
*Deployment-oriented research tooling*

This project focused on integrating AI inference pipelines with an in-house pathology image viewer. I designed workflows informed by user interviews to align model outputs with clinical interpretability requirements. API-level integration linked image storage, predictions, and visualisation layers, improving usability and enabling smoother diagnostic and research workflows.

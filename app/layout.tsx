import type { Metadata } from "next";
import Script from "next/script";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/components/ModeContext";
import Toggle from "@/components/Toggle";
import ModeLayout from "@/components/ModeLayout";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Adiga – AI Safety and Alignment Researcher | Portfolio",
  description:
    "Official website of Aditya Adiga, AI safety and alignment researcher working on the live theory research agenda at Groundless AI. Portfolio of research, projects, and thoughts.",
  alternates: {
    canonical: "https://adityaadiga.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${sourceSerif.variable} ${inter.variable} antialiased relative transition-colors duration-500`}
      >
        <ModeProvider>
          <ModeLayout>
            <Toggle />
            {children}
          </ModeLayout>
        </ModeProvider>
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aditya Adiga",
              url: "https://adityaadiga.com",
              jobTitle: "AI Alignment Researcher",
              affiliation: {
                "@type": "Organization",
                name: "Groundless AI",
              },
              sameAs: [
                "https://www.linkedin.com/in/aditya-adiga-a243631a1/",
                "https://github.com/aditya-adiga",
                "https://www.lesswrong.com/users/adiga",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
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
  title: "Aditya Adiga",
  description: "AI Safety Researcher & Engineer",
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
      </body>
    </html>
  );
}
